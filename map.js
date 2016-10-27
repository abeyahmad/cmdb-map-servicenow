// ************** Generate the tree diagram	 *****************
var margin = {
        top: 20,
        right: 120,
        bottom: 20,
        left: 120
    },
    width = screen.width - margin.right - margin.left,
    height = 10000 - margin.top - margin.bottom;

var i = 0,
    duration = 300,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) {
        return [d.y, d.x];
    }).source(function(d) {
        return {
            x: d.source.x + 10,
            y: d.source.y + 200
        }
    }).target(function(d) {
        return {
            x: d.target.x + 10,
            y: d.target.y
        }
    })

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
var started = 0;
update(root);

// window.setTimeout(partB,5000);
// function partB() {
//     var a = document.querySelectorAll('g');
//     var event = document.createEvent('Event');
//     event.initEvent('click');
// }
//
// a.forEach(function (b) {
//     b.dispatchEvent(event);
// })
d3.select(self.frameElement).style("height", "500px");

function update(source) {
    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);
    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
        d.y = d.depth * 300;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function(d) {
            return d.id || (d.id = ++i);
        });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", click)
        .style("margin", "20px")

    nodeEnter.append("rect")
        .attr("width", 1e-6)
        .attr("height", 1e-6)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        })
    nodeEnter.append("text")
        .attr("x", function(d) {
            return d.children || d._children ? -2 : 2;
        })
        .attr("dy", "15")
        .attr("dx", 5)
        // .attr("text-anchor", function(d) {
        //     return d.children || d._children ? "end" : "start";
        // })
        .text(function(d) {
            return d.name;
        })
        .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    nodeUpdate.select("rect")
        .attr("width", 200)
        .attr("height", 20)
        // .style("fill", function(d) {
        //     return d._children ? "lightsteelblue" : "#fff";
        // });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    nodeExit.select("rect")
        .attr("width", 1e-6)
        .attr("height", 1e-6)

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function(d) {
            return d.target.id;
        })

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
            var o = {
                x: source.x0,
                y: source.y0
            };
            return diagonal({
                source: o,
                target: o
            });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
            var o = {
                x: source.x,
                y: source.y
            };
            return diagonal({
                source: o,
                target: o
            });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
    if (started == 0) {
        started = 1;
        // nodes.forEach(function(d) {
        //     click(d)
        // })
    }
}


function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}
