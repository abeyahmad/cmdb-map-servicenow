var treeData = [{
        "children": [{
            "label": "Data Center Zone",
            "name": "cmdb_ci_zone"
        }, {
            "children": [{
                "children": [{
                    "label": "VMware vCenter Folder",
                    "name": "cmdb_ci_vcenter_folder"
                }, {
                    "label": "VMware vCenter Network",
                    "name": "cmdb_ci_vcenter_network"
                }, {
                    "label": "VMware vCenter Datastore",
                    "name": "cmdb_ci_vcenter_datastore"
                }, {
                    "label": "ESX Resource Pool",
                    "name": "cmdb_ci_esx_resource_pool"
                }, {
                    "label": "VMware vCenter Cluster",
                    "name": "cmdb_ci_vcenter_cluster"
                }, {
                    "label": "VMware vCenter Datacenter",
                    "name": "cmdb_ci_vcenter_datacenter"
                }],
                "label": "VMware vCenter Object",
                "name": "cmdb_ci_vcenter_object"
            }, {
                "children": [{
                    "label": "Hyper-V Virtual Network",
                    "name": "cmdb_ci_hyper_v_network"
                }, {
                    "label": "Hyper-V Resource Pool Component",
                    "name": "cmdb_ci_hyper_v_rpool_comp"
                }, {
                    "label": "Hyper-V Cluster",
                    "name": "cmdb_ci_hyper_v_cluster"
                }, {
                    "label": "Hyper-V Resource Pool",
                    "name": "cmdb_ci_hyper_v_resource_pool"
                }],
                "label": "Hyper-V Object",
                "name": "cmdb_ci_hyper_v_object"
            }, {
                "children": [{
                    "label": "Network",
                    "name": "cmdb_ci_kvm_network"
                }, {
                    "label": "Storage Pool",
                    "name": "cmdb_ci_kvm_storage_pool"
                }, {
                    "label": "Storage Volume",
                    "name": "cmdb_ci_kvm_storage_volume"
                }],
                "label": "KVM Object",
                "name": "cmdb_ci_kvm_object"
            }, {
                "children": [{
                    "label": "VMware Virtual Machine Template",
                    "name": "cmdb_ci_vmware_template"
                }],
                "label": "Virtual Machine Template",
                "name": "cmdb_ci_vm_template"
            }, {
                "children": [{
                    "label": "EC2 Virtual Machine Instance",
                    "name": "cmdb_ci_ec2_instance"
                }, {
                    "label": "Hyper-V Virtual Machine Instance",
                    "name": "cmdb_ci_hyper_v_instance"
                }, {
                    "label": "VMware Virtual Machine Instance",
                    "name": "cmdb_ci_vmware_instance"
                }, {
                    "label": "KVM Virtual Machine Instance",
                    "name": "cmdb_ci_kvm_vm_instance"
                }, {
                    "label": "Solaris Virtual Machine Instance",
                    "name": "cmdb_ci_solaris_instance"
                }],
                "label": "Virtual Machine Instance",
                "name": "cmdb_ci_vm_instance"
            }],
            "label": "Virtual Machine Object",
            "name": "cmdb_ci_vm_object"
        }, {
            "label": "Storage File Share",
            "name": "cmdb_ci_storage_fileshare"
        }, {
            "label": "Virtual Private Network",
            "name": "cmdb_ci_vpn"
        }, {
            "label": "SAN Zone",
            "name": "cmdb_ci_san_zone"
        }, {
            "label": "Computer Room AC",
            "name": "cmdb_ci_crac"
        }, {
            "children": [{
                "label": "Windows Cluster Node",
                "name": "cmdb_ci_win_cluster_node"
            }],
            "label": "Cluster Node",
            "name": "cmdb_ci_cluster_node"
        }, {
            "children": [{
                "children": [{
                    "label": "Storage Disk",
                    "name": "cmdb_ci_storage_disk"
                }],
                "label": "Disk",
                "name": "cmdb_ci_disk"
            }, {
                "children": [{
                    "label": "Fibre Channel Disk",
                    "name": "cmdb_ci_fc_disk"
                }, {
                    "label": "iSCSI Disk",
                    "name": "cmdb_ci_iscsi_disk"
                }],
                "label": "SAN Disk",
                "name": "cmdb_ci_san_disk"
            }],
            "label": "Storage Device",
            "name": "cmdb_ci_storage_device"
        }, {
            "children": [{
                "label": "External Connection Qualifier",
                "name": "cmdb_ci_qualifier_external_connection"
            }, {
                "label": "Manual Connection Qualifier",
                "name": "cmdb_ci_qualifier_manual_connection"
            }, {
                "label": "Entrypoint Marker",
                "name": "cmdb_ci_qualifier_entrypoint"
            }, {
                "label": "Boundary Connection Qualifier",
                "name": "cmdb_ci_qualifier_boundary_connection"
            }],
            "label": "Qualifier",
            "name": "cmdb_ci_qualifier"
        }, {
            "children": [{
                "children": [{
                    "label": "Uninterruptible Power Supply",
                    "name": "cmdb_ci_ups_power_eq"
                }, {
                    "label": "Automatic Transfer Switch",
                    "name": "cmdb_ci_ats_power_eq"
                }, {
                    "label": "Direct Current Plant Battery Bank",
                    "name": "cmdb_ci_dc_plant_battery_pwr"
                }, {
                    "label": "Surger Protection Equipment",
                    "name": "cmdb_ci_surge_power_eq"
                }, {
                    "label": "Direct Current Plant Equipment",
                    "name": "cmdb_ci_dc_plant_eq_power_eq"
                }, {
                    "label": "Power Generator",
                    "name": "cmdb_ci_generator_power_eq"
                }],
                "label": "Power Equipment",
                "name": "cmdb_ci_power_eq"
            }, {
                "label": "HVAC Equipment",
                "name": "cmdb_ci_hvac"
            }, {
                "label": "Buildings",
                "name": "cmdb_ci_building_facility"
            }, {
                "children": [{
                    "label": "Tower",
                    "name": "cmdb_ci_tower_tower_eq"
                }, {
                    "label": "Tower Lights",
                    "name": "cmdb_ci_tower_light_tower_eq"
                }, {
                    "label": "Tower Beacon",
                    "name": "cmdb_ci_beacon_tower_eq"
                }, {
                    "label": "Tower Light Controller",
                    "name": "cmdb_ci_twr_light_cnt_tower_eq"
                }],
                "label": "Tower Equipment",
                "name": "cmdb_ci_tower_eq"
            }, {
                "label": "Fuel Tank",
                "name": "cmdb_ci_fuel_tank"
            }],
            "label": "Facility Hardware",
            "name": "cmdb_ci_facility_hardware"
        }, {
            "label": "Datastore Disk",
            "name": "cmdb_ci_vcenter_datastore_disk"
        }, {
            "label": "SAN Zone Alias",
            "name": "cmdb_ci_san_zone_alias"
        }, {
            "label": "Computer Room",
            "name": "cmdb_ci_computer_room"
        }, {
            "label": "Configuration file",
            "name": "cmdb_ci_config_file"
        }, {
            "label": "Accessory",
            "name": "cmdb_ci_acc"
        }, {
            "label": "IP Network",
            "name": "cmdb_ci_ip_network"
        }, {
            "label": "SAN Fabric",
            "name": "cmdb_ci_san_fabric"
        }, {
            "label": "Load Balancer Pool",
            "name": "cmdb_ci_lb_pool"
        }, {
            "label": "SAN Zone Set",
            "name": "cmdb_ci_san_zone_set"
        }, {
            "label": "IP Address",
            "name": "cmdb_ci_ip_address"
        }, {
            "label": "Cloud Mgmt Subnet",
            "name": "cmdb_ci_subnet"
        }, {
            "label": "SNC Component",
            "name": "cmdb_ci_snc_component"
        }, {
            "label": "Memory Module",
            "name": "cmdb_ci_memory_module"
        }, {
            "label": "Business Service",
            "name": "cmdb_ci_service"
        }, {
            "children": [{
                "label": "Windows Cluster Resource",
                "name": "cmdb_ci_win_cluster_resource"
            }],
            "label": "Cluster Resource",
            "name": "cmdb_ci_cluster_resource"
        }, {
            "children": [{
                "label": "UNIX Daemon",
                "name": "cmdb_ci_unix_daemon"
            }, {
                "label": "Windows Service",
                "name": "cmdb_ci_windows_service"
            }],
            "label": "IP Service Instance",
            "name": "cmdb_ci_ip_service"
        }, {
            "label": "SAN Connection",
            "name": "cmdb_ci_san_connection"
        }, {
            "label": "Print Queue",
            "name": "cmdb_ci_print_queue"
        }, {
            "children": [{
                "label": "Switch Forwarding Rule",
                "name": "dscy_swtch_fwd_rule"
            }, {
                "label": "Wire",
                "name": "dscy_net_wire"
            }, {
                "label": "Switch Partition",
                "name": "dscy_swtch_partition"
            }, {
                "label": "Router Interface",
                "name": "dscy_router_interface"
            }, {
                "label": "Switchport",
                "name": "dscy_switchport"
            }, {
                "label": "Next Hop Routing Rule",
                "name": "dscy_route_next_hop"
            }, {
                "label": "Exit Interface Routing Rule",
                "name": "dscy_route_interface"
            }],
            "label": "Network Infrastructure Item",
            "name": "dscy_net_base"
        }, {
            "label": "Group",
            "name": "cmdb_ci_group"
        }, {
            "label": "Websphere Cell",
            "name": "cmdb_ci_websphere_cell"
        }, {
            "label": "UPS Input",
            "name": "cmdb_ci_ups_input"
        }, {
            "label": "Translation Rule",
            "name": "cmdb_ci_translation_rule"
        }, {
            "label": "UPS Bypass",
            "name": "cmdb_ci_ups_bypass"
        }, {
            "label": "Storage HBA",
            "name": "cmdb_ci_storage_hba"
        }, {
            "label": "Storage Controller",
            "name": "cmdb_ci_storage_controller"
        }, {
            "label": "Network Traffic",
            "name": "cmdb_ci_net_traffic"
        }, {
            "label": "Virtual Private Cloud",
            "name": "cmdb_ci_vpc"
        }, {
            "children": [{
                "children": [{
                    "label": "NFS File system",
                    "name": "cmdb_ci_file_system_nfs"
                }, {
                    "label": "NAS File System",
                    "name": "cmdb_ci_nas_file_system"
                }, {
                    "label": "SMB File system",
                    "name": "cmdb_ci_file_system_smb"
                }],
                "label": "File System",
                "name": "cmdb_ci_file_system"
            }],
            "label": "Storage Volume",
            "name": "cmdb_ci_storage_volume"
        }, {
            "label": "Load Balancer Interface",
            "name": "cmdb_ci_lb_interface"
        }, {
            "label": "SAN Endpoint",
            "name": "cmdb_ci_san_endpoint"
        }, {
            "label": "SAN Zone Alias Member",
            "name": "cmdb_ci_san_zone_alias_member"
        }, {
            "children": [{
                "label": "Storage Port",
                "name": "cmdb_ci_storage_port"
            }],
            "label": "Fibre Channel Port",
            "name": "cmdb_ci_fc_port"
        }, {
            "label": "Network Adapter",
            "name": "cmdb_ci_network_adapter"
        }, {
            "label": "Cluster Virtual IP",
            "name": "cmdb_ci_cluster_vip"
        }, {
            "label": "UPS Output",
            "name": "cmdb_ci_ups_output"
        }, {
            "children": [{
                "label": "RAID",
                "name": "cmdb_ci_raid"
            }, {
                "label": "Veritas Volume",
                "name": "cmdb_ci_veritas_volume"
            }, {
                "label": "LVM Pool",
                "name": "cmdb_ci_lvm_pool"
            }, {
                "label": "Veritas Plex",
                "name": "cmdb_ci_veritas_plex"
            }, {
                "label": "Multipath IO Pool Group",
                "name": "cmdb_ci_mpio_pool_group"
            }, {
                "label": "Multipath IO Pool",
                "name": "cmdb_ci_mpio_pool"
            }, {
                "label": "Veritas Disk",
                "name": "cmdb_ci_veritas_disk"
            }],
            "label": "Storage Pool",
            "name": "cmdb_ci_storage_pool"
        }, {
            "label": "Storage Area Network",
            "name": "cmdb_ci_san"
        }, {
            "label": "Application Cluster",
            "name": "cmdb_ci_application_cluster"
        }, {
            "label": "SAN Zone Member",
            "name": "cmdb_ci_san_zone_member"
        }, {
            "children": [{
                "label": "Application Software",
                "name": "cmdb_ci_application_software"
            }, {
                "label": "Desktop Software",
                "name": "cmdb_ci_desktop_software"
            }, {
                "label": "Infrastructure Software",
                "name": "cmdb_ci_inf_software"
            }],
            "label": "Software",
            "name": "cmdb_ci_spkg"
        }, {
            "label": "Load Balancer Pool Member",
            "name": "cmdb_ci_lb_pool_member"
        }, {
            "label": "DNS Name",
            "name": "cmdb_ci_dns_name"
        }, {
            "label": "Communication Device",
            "name": "cmdb_ci_comm"
        }, {
            "label": "IP Phone",
            "name": "cmdb_ci_ip_phone"
        }, {
            "label": "Tomcat Connector",
            "name": "cmdb_ci_tomcat_connector"
        }, {
            "label": "Environment",
            "name": "cmdb_ci_environment"
        }, {
            "label": "Data Center",
            "name": "cmdb_ci_datacenter"
        }, {
            "children": [{
                "label": "MySQL Catalog",
                "name": "cmdb_ci_db_mysql_catalog"
            }, {
                "label": "Oracle Catalog",
                "name": "cmdb_ci_db_ora_catalog"
            }, {
                "label": "MSFT SQL Catalog",
                "name": "cmdb_ci_db_mssql_catalog"
            }, {
                "label": "DB2 Catalog",
                "name": "cmdb_ci_db_db2_catalog"
            }, {
                "label": "Sybase Catalog",
                "name": "cmdb_ci_db_syb_catalog"
            }],
            "label": "Database Catalog",
            "name": "cmdb_ci_db_catalog"
        }, {
            "label": "Database",
            "name": "cmdb_ci_database"
        }, {
            "label": "Rack",
            "name": "cmdb_ci_rack"
        }, {
            "children": [{
                "label": "ActiveMatrix Business Works",
                "name": "cmdb_ci_appl_tibco_matrix"
            }, {
                "children": [{
                    "label": "KVM",
                    "name": "cmdb_ci_kvm"
                }, {
                    "label": "Parallels",
                    "name": "cmdb_ci_vm_parallels"
                }, {
                    "label": "Zones",
                    "name": "cmdb_ci_vm_zones"
                }, {
                    "label": "VMware",
                    "name": "cmdb_ci_vm_vmware"
                }],
                "label": "Virtual Machine HyperVisor",
                "name": "cmdb_ci_vm"
            }, {
                "label": "BizTalk Orchestration",
                "name": "cmdb_ci_appl_biztalk_orch"
            }, {
                "label": "HP SM KnowledgeBase",
                "name": "cmdb_ci_appl_hp_sm_kb"
            }, {
                "label": "IBM CTG",
                "name": "cmdb_ci_appl_ibm_ctg"
            }, {
                "label": "Citrix Application Icon",
                "name": "cmdb_ci_appl_citrix_app"
            }, {
                "label": "Dynamic CRM Component",
                "name": "cmdb_ci_appl_ms_dynamic_crm"
            }, {
                "label": "Oracle Process Manager",
                "name": "cmdb_ci_appl_ora_pm"
            }, {
                "label": "Oracle Forms UI",
                "name": "cmdb_ci_appl_ora_forms_ui"
            }, {
                "label": "Oracle Forms Engine",
                "name": "cmdb_ci_appl_ora_forms"
            }, {
                "label": "Lotus Domino HTTP Server",
                "name": "cmdb_ci_web_domino"
            }, {
                "label": "Oracle Metric Server",
                "name": "cmdb_ci_appl_ora_metric_svr"
            }, {
                "children": [{
                    "label": "Websphere EAR",
                    "name": "cmdb_ci_app_server_ws_ear"
                }, {
                    "label": "Domino",
                    "name": "cmdb_ci_app_server_domino"
                }, {
                    "label": "Jboss module",
                    "name": "cmdb_ci_app_server_jb_module"
                }, {
                    "label": "Oracle Essbase Server",
                    "name": "cmdb_ci_app_server_ora_ess"
                }, {
                    "label": "JBoss",
                    "name": "cmdb_ci_app_server_jboss"
                }, {
                    "label": "Data Power",
                    "name": "cmdb_ci_app_server_datapower"
                }, {
                    "label": "Vendavo Application Server",
                    "name": "cmdb_ci_app_server_vendavo"
                }, {
                    "label": "Remedy HSServer",
                    "name": "cmdb_ci_app_server_remedy"
                }, {
                    "label": "Oracle iAS Web module",
                    "name": "cmdb_ci_app_server_ora_ias_m"
                }, {
                    "label": "Jrun WAR",
                    "name": "cmdb_ci_app_server_jrun_war"
                }, {
                    "label": "JavaServer",
                    "name": "cmdb_ci_app_server_java"
                }, {
                    "label": "HP uCMDB",
                    "name": "cmdb_ci_app_server_hp_ucmdb"
                }, {
                    "label": "Jrun",
                    "name": "cmdb_ci_app_server_jrun"
                }, {
                    "label": "Oracle iAS",
                    "name": "cmdb_ci_app_server_ora_ias"
                }, {
                    "label": "Tomcat",
                    "name": "cmdb_ci_app_server_tomcat"
                }, {
                    "label": "Composer",
                    "name": "cmdb_ci_app_server_composer"
                }, {
                    "children": [{
                        "label": "Websphere ODR LB",
                        "name": "cmdb_ci_app_server_ws_odr"
                    }],
                    "label": "IBM Websphere",
                    "name": "cmdb_ci_app_server_websphere"
                }, {
                    "label": "Tomcat WAR",
                    "name": "cmdb_ci_app_server_tomcat_war"
                }, {
                    "label": "Weblogic LB",
                    "name": "cmdb_ci_appl_weblogic_lb"
                }, {
                    "label": "BEA Weblogic",
                    "name": "cmdb_ci_app_server_weblogic"
                }, {
                    "label": "Data Power Domain",
                    "name": "cmdb_ci_app_server_dp_domain"
                }, {
                    "label": "WeblogicModule",
                    "name": "cmdb_ci_app_server_wl_module"
                }],
                "label": "Application Server",
                "name": "cmdb_ci_app_server"
            }, {
                "label": "Web Service",
                "name": "cmdb_ci_web_service"
            }, {
                "label": "Oracle Report Server",
                "name": "cmdb_ci_appl_ora_report"
            }, {
                "label": "Cisco UCS Manager",
                "name": "cmdb_ci_appl_cisco_ucs_manager"
            }, {
                "label": "Web Site",
                "name": "cmdb_ci_web_site"
            }, {
                "label": "Weblogic Module Server",
                "name": "cmdb_ci_appl_weblogicmodule"
            }, {
                "label": "Web Application",
                "name": "cmdb_ci_web_application"
            }, {
                "label": "HP Service Manager",
                "name": "cmdb_ci_appl_hp_service"
            }, {
                "label": "ITAM Asset Center",
                "name": "cmdb_ci_appl_itam"
            }, {
                "label": "Vignette Server",
                "name": "cmdb_ci_appl_vignette_server"
            }, {
                "children": [{
                    "label": "Cisco UCS Blade Server",
                    "name": "cmdb_ci_appl_cisco_ucs_blade"
                }, {
                    "label": "Cisco UCS Chassis",
                    "name": "cmdb_ci_appl_cisco_ucs_chassis"
                }],
                "label": "Cisco Fibre InterConnect",
                "name": "cmdb_ci_appl_cisco_fibre"
            }, {
                "label": "VMware vCenter Instance",
                "name": "cmdb_ci_vcenter"
            }, {
                "label": "BizTalk",
                "name": "cmdb_ci_appl_biztalk"
            }, {
                "label": "Generic Application",
                "name": "cmdb_ci_appl_generic"
            }, {
                "label": "WMB Flow",
                "name": "cmdb_ci_appl_wmb"
            }, {
                "label": "SAP System",
                "name": "cmdb_ci_appl_sap_system"
            }, {
                "label": "WBEM Service",
                "name": "cmdb_ci_wbem_service"
            }, {
                "label": "Simulation",
                "name": "cmdb_ci_app_simulation"
            }, {
                "label": "SAP BO BOXIScheduleRouter",
                "name": "cmdb_ci_appl_sap_bo_scheduler"
            }, {
                "label": "EMS Queue",
                "name": "cmdb_ci_appl_tibco_queue"
            }, {
                "label": "Oracle ESB",
                "name": "cmdb_ci_appl_ora_ebs"
            }, {
                "label": "HP Quality Center",
                "name": "cmdb_ci_appl_hp_qc"
            }, {
                "label": "Vignette Search Starter",
                "name": "cmdb_ci_appl_vignette_search"
            }, {
                "label": "SharePoint",
                "name": "cmdb_ci_appl_sharepoint"
            }, {
                "label": "IBM CICS",
                "name": "cmdb_ci_appl_ibm_cics"
            }, {
                "label": "Fast Search",
                "name": "cmdb_ci_appl_fastsearch"
            }, {
                "label": "SAP Hana Db",
                "name": "cmdb_ci_appl_sap_hana_db"
            }, {
                "label": "Oracle App TNS Service",
                "name": "cmdb_ci_appl_ora_tns"
            }, {
                "children": [{
                    "label": "FTP Server",
                    "name": "cmdb_ci_ftp_server"
                }, {
                    "label": "AD Forest",
                    "name": "cmdb_ci_directory_ad_forest"
                }, {
                    "label": "Email Server",
                    "name": "cmdb_ci_email_server"
                }, {
                    "label": "Policy Server",
                    "name": "cmdb_ci_dir_policy_server"
                }, {
                    "label": "Inetinfo service",
                    "name": "cmdb_ci_inetinfo"
                }, {
                    "label": "IIS Virtual Directory",
                    "name": "cmdb_ci_iisdirectory"
                }, {
                    "label": "CA eTrust Directory Server",
                    "name": "cmdb_ci_appl_ca_dir_server"
                }, {
                    "children": [{
                        "label": "Iplanet Web Server",
                        "name": "cmdb_ci_iplanet_web_server"
                    }, {
                        "label": "Apache Web Server",
                        "name": "cmdb_ci_apache_web_server"
                    }, {
                        "label": "Microsoft iis Web Server",
                        "name": "cmdb_ci_microsoft_iis_web_server"
                    }, {
                        "label": "Nginx Web Server",
                        "name": "cmdb_ci_nginx_web_server"
                    }],
                    "label": "Web Server",
                    "name": "cmdb_ci_web_server"
                }, {
                    "label": "IIFP",
                    "name": "cmdb_ci_directory_iifp"
                }, {
                    "label": "Sun LDAP Server",
                    "name": "cmdb_ci_sun_ldap_dir_server"
                }, {
                    "label": "Site Minder",
                    "name": "cmdb_ci_dir_site_minder_server"
                }, {
                    "label": "AD Domain",
                    "name": "cmdb_ci_ad_domain"
                }, {
                    "label": "IP Server",
                    "name": "cmdb_ci_ip_server"
                }, {
                    "label": "Enterprise Vault",
                    "name": "cmdb_ci_email_server_ent_vault"
                }, {
                    "children": [{
                        "label": "Active Directory Domain Controller",
                        "name": "cmdb_ci_ad_controller"
                    }],
                    "label": "Directory Server",
                    "name": "cmdb_ci_directory_server"
                }, {
                    "label": "HA Proxy",
                    "name": "cmdb_ci_directory_ha"
                }, {
                    "label": "Sun Directory Proxy Server",
                    "name": "cmdb_ci_sun_dir_proxy_server"
                }, {
                    "label": "JES",
                    "name": "cmdb_ci_email_server_jes"
                }, {
                    "children": [{
                        "label": "LDAP DB",
                        "name": "cmdb_ci_directory_ldap"
                    }],
                    "label": "LDAP Service",
                    "name": "cmdb_ci_infra_service_ldap"
                }],
                "label": "Infrastructure Service",
                "name": "cmdb_ci_infra_service"
            }, {
                "label": "Documentum DocBase",
                "name": "cmdb_ci_appl_doc_docbase"
            }, {
                "label": "IBM WebSphere Message Broker",
                "name": "cmdb_ci_appl_ibm_wmb"
            }, {
                "label": "SharePoint Service",
                "name": "cmdb_ci_appl_sp_service"
            }, {
                "label": "Oracle OAFM Server",
                "name": "cmdb_ci_appl_ora_oafm"
            }, {
                "label": "Hitachi",
                "name": "cmdb_ci_appl_groundwork"
            }, {
                "label": "Oracle Fulfillment Server",
                "name": "cmdb_ci_appl_ora_fs"
            }, {
                "label": "Tibco Hawk",
                "name": "cmdb_ci_appl_tibco_hawk"
            }, {
                "label": "Oracle Discoverer UI",
                "name": "cmdb_ci_appl_ora_disc_ui"
            }, {
                "label": "SAP Application Server",
                "name": "cmdb_ci_appl_sap_server"
            }, {
                "label": "IBM WebSphere MQ Queue",
                "name": "cmdb_ci_appl_ibm_wmq_queue"
            }, {
                "label": "Peoplesoft Application Server",
                "name": "cmdb_ci_appl_peoplesoft"
            }, {
                "label": "IBM WMB Http Listener",
                "name": "cmdb_ci_appl_ibm_wmb_listener"
            }, {
                "label": "ActiveMatrix Business Works Process",
                "name": "cmdb_ci_appl_tibco_matrix_proc"
            }, {
                "label": "Documentum Brava License Server",
                "name": "cmdb_ci_appl_doc_brava_server"
            }, {
                "label": "Sendmail",
                "name": "cmdb_ci_appl_sendmail"
            }, {
                "label": "Cisco CallManager",
                "name": "cmdb_ci_appl_cisco_call_man"
            }, {
                "label": "Oracle Notification Server",
                "name": "cmdb_ci_appl_ora_notif_svr"
            }, {
                "label": "IBM WebSphere MQ",
                "name": "cmdb_ci_appl_ibm_wmq"
            }, {
                "label": "Citrix XenAPP or Presentation Server",
                "name": "cmdb_ci_appl_citrix_xenapp"
            }, {
                "label": "Oracle Discoverer Engine",
                "name": "cmdb_ci_appl_ora_disc"
            }, {
                "label": "HP SM Index Server",
                "name": "cmdb_ci_appl_hp_index"
            }, {
                "label": ".NET Application",
                "name": "cmdb_ci_appl_dot_net"
            }, {
                "label": "Advanced Queue Queue",
                "name": "cmdb_ci_appl_ora_queue"
            }, {
                "label": "Oracle Metric Client",
                "name": "cmdb_ci_appl_ora_metric_client"
            }, {
                "label": "CA Identity Manager Provisioning Server",
                "name": "cmdb_ci_appl_ca_id_man"
            }, {
                "label": "Oracle OACORE Server",
                "name": "cmdb_ci_appl_ora_oacore"
            }, {
                "label": "MySQLClusterMGMNode",
                "name": "cmdb_ci_db_mysql_clustermgnode"
            }, {
                "label": "Weblogic JMS Server",
                "name": "cmdb_ci_appl_weblogic_jms"
            }, {
                "label": "Documentum Broker",
                "name": "cmdb_ci_appl_doc_docbroker"
            }, {
                "label": "SAP Business Objects",
                "name": "cmdb_ci_appl_sap_bo"
            }, {
                "label": "Connect-It Service",
                "name": "cmdb_ci_appl_connectit"
            }, {
                "children": [{
                    "label": "Puppet Master",
                    "name": "cmdb_ci_puppet_master"
                }],
                "label": "Management Server",
                "name": "cmdb_ci_config_automation_server"
            }, {
                "label": "Documentum Brava Job Processor",
                "name": "cmdb_ci_appl_doc_brava_proc"
            }, {
                "label": "Oracle Database Listener",
                "name": "cmdb_ci_db_ora_listener"
            }, {
                "label": "Control-M",
                "name": "cmdb_ci_appl_controlm"
            }, {
                "label": "Tibco Enterprise Message Service",
                "name": "cmdb_ci_appl_tibco_message"
            }, {
                "label": "Load Balancer Application",
                "name": "cmdb_ci_lb_appl"
            }, {
                "label": "CA Enterprise Communicator",
                "name": "cmdb_ci_appl_ca"
            }, {
                "children": [{
                    "label": "SAP CI Application",
                    "name": "cmdb_ci_appl_sap_ci"
                }, {
                    "label": "SAP ASCS Application",
                    "name": "cmdb_ci_appl_sap_ascs"
                }, {
                    "label": "SAP DI Application",
                    "name": "cmdb_ci_appl_sap_di"
                }, {
                    "label": "SAP JC Application",
                    "name": "cmdb_ci_appl_sap_jc"
                }, {
                    "label": "SAP SCS Application",
                    "name": "cmdb_ci_appl_sap_scs"
                }, {
                    "label": "SAP ERS Application",
                    "name": "cmdb_ci_appl_sap_ers"
                }],
                "label": "SAP Application",
                "name": "cmdb_ci_appl_sap"
            }, {
                "label": "Websphere Portal",
                "name": "cmdb_ci_appl_websphere_portal"
            }, {
                "label": "HP Operations Manager",
                "name": "cmdb_ci_appl_hp_operations"
            }, {
                "label": "Oracle Weblogic JMS Queue",
                "name": "cmdb_ci_appl_ora_jms_queue"
            }, {
                "children": [{
                    "label": "ExchangeHub",
                    "name": "cmdb_ci_exchange_hub"
                }, {
                    "label": "ExchangeBackEndServer",
                    "name": "cmdb_ci_exchange_backend"
                }, {
                    "label": "Exchange Client Access Server",
                    "name": "cmdb_ci_exchange_cas"
                }, {
                    "label": "ExchangeFrontEndServer",
                    "name": "cmdb_ci_exchange_frontend"
                }, {
                    "label": "Exchange Mailbox Server",
                    "name": "cmdb_ci_exchange_mailbox_server"
                }, {
                    "label": "Exchange MailBox",
                    "name": "cmdb_ci_exchange_mailbox"
                }, {
                    "label": "Exchange Edge Transport Server",
                    "name": "cmdb_ci_exchange_edge_transport_server"
                }, {
                    "label": "Exchange Hub Transport Server",
                    "name": "cmdb_ci_exchange_hub_transport_server"
                }],
                "label": "Exchange Service Component",
                "name": "cmdb_ci_exchange_service_component"
            }, {
                "label": "SQL Server Integration Services Job",
                "name": "cmdb_ci_db_mssql_int_job"
            }, {
                "label": "CA Introscope Enterprise Manager",
                "name": "cmdb_ci_appl_ca_ent_man"
            }, {
                "label": "SAP Business Objects",
                "name": "cmdb_ci_appl_sap_bus_obj"
            }, {
                "label": "Webseal",
                "name": "cmdb_ci_app_server_webseal"
            }, {
                "label": "Windows Domain Controller",
                "name": "cmdb_ci_win_domain_controller"
            }, {
                "label": "MSMQ",
                "name": "cmdb_ci_appl_msmq"
            }, {
                "label": "Oracle Concurrent Server",
                "name": "cmdb_ci_appl_ora_conc"
            }, {
                "children": [{
                    "label": "PostgreSQL Instance",
                    "name": "cmdb_ci_db_postgresql_instance"
                }, {
                    "label": "Sybase Instance",
                    "name": "cmdb_ci_db_syb_instance"
                }, {
                    "label": "MS SQL DataBase",
                    "name": "cmdb_ci_db_mssql_database"
                }, {
                    "label": "SQL Server Integration Services",
                    "name": "cmdb_ci_db_mssql_integration"
                }, {
                    "label": "MS SQL Server",
                    "name": "cmdb_ci_db_mssql_server"
                }, {
                    "label": "SQL Server Reporting Services",
                    "name": "cmdb_ci_db_mssql_reporting"
                }, {
                    "label": "DB2 Instance",
                    "name": "cmdb_ci_db_db2_instance"
                }, {
                    "label": "MySQL Instance",
                    "name": "cmdb_ci_db_mysql_instance"
                }, {
                    "label": "Oracle Instance",
                    "name": "cmdb_ci_db_ora_instance"
                }, {
                    "label": "SQL Server Analysis Services",
                    "name": "cmdb_ci_db_mssql_analysis"
                }, {
                    "label": "HBase Instance",
                    "name": "cmdb_ci_db_hbase_instance"
                }, {
                    "label": "MongoDB Instance",
                    "name": "cmdb_ci_db_mongodb_instance"
                }, {
                    "label": "MSFT SQL Instance",
                    "name": "cmdb_ci_db_mssql_instance"
                }],
                "label": "Database Instance",
                "name": "cmdb_ci_db_instance"
            }, {
                "label": "Citrix Collector",
                "name": "cmdb_ci_appl_citrix_collector"
            }, {
                "label": "Oracle TNS Listener Engine",
                "name": "cmdb_ci_appl_ora_tnslsnr"
            }, {
                "label": "Vignette Content Management Server",
                "name": "cmdb_ci_appl_vign_content_svr"
            }, {
                "label": "Oracle HTTP Server",
                "name": "cmdb_ci_appl_ora_http"
            }, {
                "label": "MySQLClusterDataNode",
                "name": "cmdb_ci_db_mysql_clusternode"
            }, {
                "label": "Delivery Controler",
                "name": "cmdb_ci_appl_delivery_controler"
            }],
            "label": "Application",
            "name": "cmdb_ci_appl"
        }, {
            "label": "Outlet",
            "name": "cmdb_ci_pdu_outlet"
        }, {
            "label": "Load Balancer Service",
            "name": "cmdb_ci_lb_service"
        }, {
            "children": [{
                "label": "Veritas Subdisk",
                "name": "cmdb_ci_veritas_subdisk"
            }, {
                "label": "Multipath IO Pool Path",
                "name": "cmdb_ci_mpio_pool_path"
            }, {
                "label": "LVM Pool Member",
                "name": "cmdb_ci_lvm_pool_member"
            }, {
                "label": "RAID Member",
                "name": "cmdb_ci_raid_member"
            }],
            "label": "Storage Pool Member",
            "name": "cmdb_ci_storage_pool_member"
        }, {
            "label": "Patch",
            "name": "cmdb_ci_patches"
        }, {
            "label": "Computer Peripheral",
            "name": "cmdb_ci_peripheral"
        }, {
            "label": "Load Balancer VLAN",
            "name": "cmdb_ci_lb_vlan"
        }, {
            "label": "UPS Alarm",
            "name": "cmdb_ci_ups_alarm"
        }, {
            "label": "IP Device",
            "name": "cmdb_ci_ip_device"
        }, {
            "children": [{
                "label": "Windows Cluster",
                "name": "cmdb_ci_win_cluster"
            }],
            "label": "Cluster",
            "name": "cmdb_ci_cluster"
        }, {
            "label": "CIM Profiles",
            "name": "cmdb_ci_cim_profile"
        }, {
            "label": "Business Process",
            "name": "cmdb_ci_business_process"
        }, {
            "label": "Disk Partition",
            "name": "cmdb_ci_disk_partition"
        }, {
            "label": "Veritas Disk Group",
            "name": "cmdb_ci_veritas_disk_group"
        }, {
            "label": "Circuit",
            "name": "cmdb_ci_circuit"
        }, {
            "children": [{
                "label": "Printer",
                "name": "cmdb_ci_printer"
            }, {
                "label": "Mass Storage Device",
                "name": "cmdb_ci_msd"
            }, {
                "children": [{
                    "label": "Storage Switch",
                    "name": "cmdb_ci_storage_switch"
                }, {
                    "children": [{
                        "label": "Windows Server",
                        "name": "cmdb_ci_win_server"
                    }, {
                        "label": "Netware Server",
                        "name": "cmdb_ci_netware_server"
                    }, {
                        "label": "IBM Mainframe",
                        "name": "cmdb_ci_mainframe"
                    }, {
                        "label": "Storage Server",
                        "name": "cmdb_ci_storage_server"
                    }, {
                        "children": [{
                            "label": "Cisco CSS",
                            "name": "cmdb_ci_lb_cisco_css"
                        }, {
                            "label": "ACE",
                            "name": "cmdb_ci_lb_ace"
                        }, {
                            "label": "A10 Load Balancer",
                            "name": "cmdb_ci_lb_a10"
                        }, {
                            "label": "ISA Server",
                            "name": "cmdb_ci_lb_isa"
                        }, {
                            "label": "F5 BigIP GTM",
                            "name": "cmdb_ci_lb_f5_gtm"
                        }, {
                            "label": "F5 BIG-IP",
                            "name": "cmdb_ci_lb_bigip"
                        }, {
                            "label": "Radware Load Balancer",
                            "name": "cmdb_ci_lb_radware"
                        }, {
                            "label": "Cisco CSM",
                            "name": "cmdb_ci_lb_cisco_csm"
                        }, {
                            "label": "Network Load Balancer",
                            "name": "cmdb_ci_lb_network"
                        }, {
                            "label": "F5 BigIP LTM",
                            "name": "cmdb_ci_lb_f5_ltm"
                        }, {
                            "label": "Alteon",
                            "name": "cmdb_ci_lb_alteon"
                        }, {
                            "label": "Citrix Netscaler",
                            "name": "cmdb_ci_lb_netscaler"
                        }],
                        "label": "Load Balancer",
                        "name": "cmdb_ci_lb"
                    }, {
                        "children": [{
                            "label": "HPUX Server",
                            "name": "cmdb_ci_hpux_server"
                        }, {
                            "label": "Solaris Server",
                            "name": "cmdb_ci_solaris_server"
                        }, {
                            "label": "AIX Server",
                            "name": "cmdb_ci_aix_server"
                        }],
                        "label": "UNIX Server",
                        "name": "cmdb_ci_unix_server"
                    }, {
                        "label": "IBM Mainframe LPAR",
                        "name": "cmdb_ci_mainframe_lpar"
                    }, {
                        "label": "CIM Server",
                        "name": "cmdb_ci_cim_server"
                    }, {
                        "children": [{
                            "children": [{
                                "label": "ESX Server",
                                "name": "cmdb_ci_esx_server"
                            }],
                            "label": "VMware vCenter Server Object",
                            "name": "cmdb_ci_vcenter_server_obj"
                        }, {
                            "label": "Hyper-V Server",
                            "name": "cmdb_ci_hyper_v_server"
                        }],
                        "label": "Virtualization Server",
                        "name": "cmdb_ci_virtualization_server"
                    }, {
                        "label": "OS/X Server",
                        "name": "cmdb_ci_osx_server"
                    }, {
                        "label": "Linux Server",
                        "name": "cmdb_ci_linux_server"
                    }],
                    "label": "Server",
                    "name": "cmdb_ci_server"
                }],
                "label": "Computer",
                "name": "cmdb_ci_computer"
            }, {
                "label": "UPS",
                "name": "cmdb_ci_ups"
            }, {
                "label": "Out-of-Band Device",
                "name": "cmdb_ci_outofband_device"
            }, {
                "label": "PDU",
                "name": "cmdb_ci_pdu"
            }, {
                "children": [{
                    "label": "IP Firewall",
                    "name": "cmdb_ci_ip_firewall"
                }, {
                    "label": "IP Router",
                    "name": "cmdb_ci_ip_router"
                }, {
                    "label": "IP Switch",
                    "name": "cmdb_ci_ip_switch"
                }],
                "label": "Network Gear",
                "name": "cmdb_ci_netgear"
            }],
            "label": "Hardware",
            "name": "cmdb_ci_hardware"
        }, {
            "children": [{
                "children": [{
                    "label": "iSCSI Export",
                    "name": "cmdb_ci_iscsi_export"
                }, {
                    "label": "Fibre Channel Export",
                    "name": "cmdb_ci_fc_export"
                }],
                "label": "SAN Export",
                "name": "cmdb_ci_san_export"
            }],
            "label": "Storage Export",
            "name": "cmdb_ci_storage_export"
        }, {
            "children": [{
                "label": "WMB Dependency",
                "name": "cmdb_ci_endpoint_wmb_depend"
            }, {
                "label": "MySQL Cluster Data Node",
                "name": "cmdb_ci_endpoint_mysql_cl_dn"
            }, {
                "label": "EMS JNDI",
                "name": "cmdb_ci_endpoint_ems_jndi"
            }, {
                "label": "CRM Component",
                "name": "cmdb_ci_endpoint_crm"
            }, {
                "label": "MSMQ Flow",
                "name": "cmdb_ci_endpoint_msmq"
            }, {
                "label": "POP3",
                "name": "cmdb_ci_endpoint_pop3"
            }, {
                "label": "XenApp or Presentation Server",
                "name": "cmdb_ci_endpoint_storf"
            }, {
                "label": "Business Objects CMS Server",
                "name": "cmdb_ci_endpoint_obj_cms_srv"
            }, {
                "label": "Remote TCP Cross-memory",
                "name": "cmdb_ci_endpoint_remote_tcp"
            }, {
                "label": "DB2 UDB",
                "name": "cmdb_ci_endpoint_db2sql"
            }, {
                "label": "Peoplesoft Application Server",
                "name": "cmdb_ci_endpoint_peoplesoft"
            }, {
                "label": "Tibco Hawk",
                "name": "cmdb_ci_endpoint_tibco_hawk"
            }, {
                "label": "Enterprise Vault",
                "name": "cmdb_ci_endpoint_ent_vault"
            }, {
                "label": "Storage FC Connectivity",
                "name": "cmdb_ci_endpoint_storage_fc"
            }, {
                "label": "Application To Storage",
                "name": "cmdb_ci_endpoint_app_storage"
            }, {
                "label": "JMS Server",
                "name": "cmdb_ci_endpoint_jms_server"
            }, {
                "label": "FTP",
                "name": "cmdb_ci_endpoint_ftp"
            }, {
                "label": "BizTalk Connection",
                "name": "cmdb_ci_endpoint_biztalk"
            }, {
                "label": "Tibco Conf File",
                "name": "cmdb_ci_endpoint_tbco_confile"
            }, {
                "label": "Sybase",
                "name": "cmdb_ci_endpoint_sybase"
            }, {
                "label": "Oracle RAC DB",
                "name": "cmdb_ci_endpoint_oracle_rac"
            }, {
                "label": "Outbound Cluster Endpoint",
                "name": "cmdb_ci_endpoint_ob_cluster"
            }, {
                "children": [{
                    "label": "SharePoint Service",
                    "name": "cmdb_ci_endpoint_sharepoint_service"
                }, {
                    "label": "Oracle DB schema inclusion",
                    "name": "cmdb_ci_endpoint_oracle_db_schema"
                }, {
                    "label": "AQ Queue",
                    "name": "cmdb_ci_endpoint_aq_queue"
                }, {
                    "label": "StoreFront Components",
                    "name": "cmdb_ci_endpoint_storefront_comp"
                }, {
                    "label": "SAP BO Servers",
                    "name": "cmdb_ci_endpoint_sap_bo_servers"
                }, {
                    "label": "SSIS job",
                    "name": "cmdb_ci_endpoint_ssis_job"
                }, {
                    "label": "Jrun WAR Inc",
                    "name": "cmdb_ci_endpoint_jrun"
                }, {
                    "label": "BizTalk Inclusion",
                    "name": "cmdb_ci_endpoint_biztalk_orch"
                }, {
                    "label": "JMS Queue",
                    "name": "cmdb_ci_endpoint_jms_queue"
                }, {
                    "label": "WMB Flow",
                    "name": "cmdb_ci_endpoint_wmb_flow"
                }, {
                    "label": "EBS Inc Modules",
                    "name": "cmdb_ci_endpoint_ebs"
                }, {
                    "label": "Oracle App TNS Service",
                    "name": "cmdb_ci_endpoint_oracle_tns"
                }, {
                    "label": "Simulation Inclusion Endpoint",
                    "name": "cmdb_ci_endpoint_sim_inc"
                }, {
                    "label": "UCS",
                    "name": "cmdb_ci_endpoint_ucs"
                }, {
                    "label": "Weblogic Module",
                    "name": "cmdb_ci_endpoint_weblogic_module"
                }, {
                    "label": "J2EE EAR",
                    "name": "cmdb_ci_endpoint_j2ee_ear"
                }, {
                    "label": "IIS Website",
                    "name": "cmdb_ci_endpoint_iis"
                }, {
                    "label": "Citrix StoreFront App Icon Inc",
                    "name": "cmdb_ci_endpoint_xenapp_citrx"
                }, {
                    "label": "MQ Queue",
                    "name": "cmdb_ci_endpoint_mq_queue"
                }, {
                    "label": "LDAP DB",
                    "name": "cmdb_ci_endpoint_ldap_db"
                }, {
                    "label": "Oracle iAS Module INC",
                    "name": "cmdb_ci_endpoint_oracle_ias"
                }, {
                    "label": "Jboss Module Inclusion",
                    "name": "cmdb_ci_endpoint_jboss"
                }, {
                    "label": "Tibco BW process",
                    "name": "cmdb_ci_endpoint_tibco_bw_proc"
                }, {
                    "label": "Tomcat WAR Inclusion",
                    "name": "cmdb_ci_endpoint_tomcat_war"
                }, {
                    "label": "EMS Queue",
                    "name": "cmdb_ci_endpoint_ems_queue"
                }, {
                    "label": "App Icon Inc",
                    "name": "cmdb_ci_endpoint_app"
                }, {
                    "label": "MS SQL db inclusion",
                    "name": "cmdb_ci_endpoint_ms_sql"
                }, {
                    "label": "XenApp or Presentation Server",
                    "name": "cmdb_ci_endpoint_xenapp"
                }],
                "label": "Inclusion Endpoint",
                "name": "cmdb_ci_endpoint_inclusion"
            }, {
                "label": "MS SQL Server",
                "name": "cmdb_ci_endpoint_ms_sql_server"
            }, {
                "label": "Sharepoint connection",
                "name": "cmdb_ci_endpoint_sp_connection"
            }, {
                "label": "SSIS file",
                "name": "cmdb_ci_endpoint_ssis_file"
            }, {
                "label": "SAP HANA DB",
                "name": "cmdb_ci_endpoint_sap_db"
            }, {
                "label": "RFC",
                "name": "cmdb_ci_endpoint_rfc"
            }, {
                "label": "MySQL Slave Server",
                "name": "cmdb_ci_endpoint_mysql_slave"
            }, {
                "label": "MySQL Server",
                "name": "cmdb_ci_endpoint_mysql_server"
            }, {
                "label": "TCP",
                "name": "cmdb_ci_endpoint_tcp"
            }, {
                "label": "NNTP",
                "name": "cmdb_ci_endpoint_nntp"
            }, {
                "label": "LDAP",
                "name": "cmdb_ci_endpoint_ldap"
            }, {
                "label": "HPOM",
                "name": "cmdb_ci_endpoint_hpom"
            }, {
                "label": "DCTM Job Processor",
                "name": "cmdb_ci_endpoint_dctm_job"
            }, {
                "label": "SSIS for MSSQL",
                "name": "cmdb_ci_endpoint_ssis_mssql"
            }, {
                "label": "Citrix Delivery Controller",
                "name": "cmdb_ci_endpoint_dliver_cnrl"
            }, {
                "label": "AJP",
                "name": "cmdb_ci_endpoint_ajp"
            }, {
                "label": "Simulation Endpoint",
                "name": "cmdb_ci_endpoint_sim_flow"
            }, {
                "label": "SMTP",
                "name": "cmdb_ci_endpoint_smtp"
            }, {
                "label": "VirtualMachine to ESX Storage",
                "name": "cmdb_ci_endpoint_vm_esx"
            }, {
                "label": "MAPI-HUB",
                "name": "cmdb_ci_endpoint_mapi_hub"
            }, {
                "label": "SAP APP EP",
                "name": "cmdb_ci_endpoint_sap_app"
            }, {
                "label": "MQ",
                "name": "cmdb_ci_endpoint_mq"
            }, {
                "label": "CTG",
                "name": "cmdb_ci_endpoint_ctg"
            }, {
                "label": "MQ Flow",
                "name": "cmdb_ci_endpoint_mq_flow"
            }, {
                "label": "HTTP(S)",
                "name": "cmdb_ci_endpoint_http"
            }, {
                "label": "SSAS for MSSQL",
                "name": "cmdb_ci_endpoint_ssas_mssql"
            }, {
                "label": "F5 Mirror",
                "name": "cmdb_ci_endpoint_f5"
            }, {
                "label": "DocBase Connection",
                "name": "cmdb_ci_endpoint_docbase"
            }, {
                "label": "EJB",
                "name": "cmdb_ci_endpoint_ejb"
            }, {
                "label": "Network",
                "name": "cmdb_ci_endpoint_network"
            }, {
                "label": "IMAP",
                "name": "cmdb_ci_endpoint_imap"
            }, {
                "label": "JMS Flow",
                "name": "cmdb_ci_endpoint_jms_flow"
            }, {
                "label": "MySQL Cluster MGM",
                "name": "cmdb_ci_endpoint_mysql_cl_mg"
            }, {
                "label": "IIFP",
                "name": "cmdb_ci_endpoint_iifp"
            }, {
                "label": "Oracle ESB Connection",
                "name": "cmdb_ci_endpoint_oracle_esb"
            }, {
                "label": "Active Directory Domain to Domain Controllers",
                "name": "cmdb_ci_endpoint_ad_domain"
            }, {
                "label": "SSAS",
                "name": "cmdb_ci_endpoint_ssas"
            }, {
                "label": "SSIS",
                "name": "cmdb_ci_endpoint_ssis"
            }, {
                "label": "Exchange 2013",
                "name": "cmdb_ci_endpoint_exchange"
            }, {
                "label": "DCTM Index Agent Connection",
                "name": "cmdb_ci_endpoint_dctm_index"
            }, {
                "label": "XenApp or Presentation Server Components",
                "name": "cmdb_ci_endpoint_xenapp_comp"
            }, {
                "label": "HTTP Listener to WMB Dependency",
                "name": "cmdb_ci_endpoint_listener_wmb"
            }, {
                "label": "Advanced Queue",
                "name": "cmdb_ci_endpoint_aq"
            }, {
                "label": "ITAM Asset Center",
                "name": "cmdb_ci_endpoint_itam"
            }, {
                "label": "PostgreSQL DB",
                "name": "cmdb_ci_endpoint_postgresql"
            }, {
                "label": "SAP Application Server",
                "name": "cmdb_ci_endpoint_sap"
            }, {
                "label": "Oracle DB",
                "name": "cmdb_ci_endpoint_oracle_db"
            }, {
                "label": "Tibco BW",
                "name": "cmdb_ci_endpoint_tibco_bw"
            }, {
                "label": "Fast Search",
                "name": "cmdb_ci_endpoint_fastsearch"
            }, {
                "label": "MQ Cross-memory",
                "name": "cmdb_ci_endpoint_mq_mem"
            }, {
                "label": "DCTM Connection to broker",
                "name": "cmdb_ci_endpoint_dctm_broker"
            }, {
                "label": "MAPI",
                "name": "cmdb_ci_endpoint_mapi"
            }, {
                "label": "Active Directory Forest",
                "name": "cmdb_ci_endpoint_ad_forest"
            }, {
                "label": "Tibco File Listener",
                "name": "cmdb_ci_endpoint_tibco_file"
            }, {
                "label": "EMS",
                "name": "cmdb_ci_endpoint_ems"
            }],
            "label": "Endpoint",
            "name": "cmdb_ci_endpoint"
        }],
        "label": "Configuration Item",
        "name": "cmdb_ci"
    }]
