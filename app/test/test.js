var run_test = function() {
  obj = {
    "type" : "Project",
    "access" : "write",
    "attributes" : {
        "_id": "bb1fda63-ee8a-46af-b986-958d924bfbcf",
        "_rev": "4-2185cd00eaf3c5f002626fc1713dc563",
        "name": "Alice's project",
        "purpose": "qPCR experiments and analysis",
        "start": "2014-01-29T02:21:24.236-05:00",
        "startZone": "America/New_York",
        "tags" : {
            "kvedananda" : ["qPCR", "Agilent"]
        },
        "properties" : {
            "kvedananda" : {
                "projectOwner" : "Alice",
                "investigator" : "Keith"
            }
        },
        "notes" : {
            "kvedananda" : [
                {
                    "timestamp" : "...",
                    "text" : "Note text",
                    "findings" : "Hey all found some really interesting results today..."
                }
            ]
        }
    },
    "links" : {
        "experiments" : {
            "href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/experiments",
            "count" : 0
        },
        "projects" : {
            "href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/projects",
            "count" : 1
        },
        "attachments" : {
            "href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/attachments",
            "count" : 0
        },
        "owner" : {
            "href" : "/api/v1/entities/14c1dd90-69b3-0131-a68a-12313d009d02",
            "count" : 1
        },
        "analysis_records" : {
            "href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/analyses",
            "count" : 0
        }
    }
  }
  console.log(WebserviceJSONConvert.to_ui(obj));
};
