var data_js = {
    "sp-clause-activity-inc": {
        "default": 1.0,
        "log-scale": "false",
        "range": [
            0.5,
            1.5
        ],
        "type": "continuous"
    },
    "sp-clause-decay": {
        "default": 1.4,
        "log-scale": "true",
        "range": [
            1.0,
            2.0
        ],
        "type": "continuous"
    },
    "sp-clause-del-heur": {
        "default": "2",
        "type": "categrical",
        "values": [
            "0",
            "1",
            "2"
        ]
    },
    "sp-clause-inversion": {
        "default": "1",
        "dependsOn": [
            {
                "sp-learned-clause-sort-heur": {
                    "type": "categorical",
                    "values": [
                        "19"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0",
            "1"
        ]
    },
    "sp-first-restart": {
        "default": 100.0,
        "log-scale": "true",
        "range": [
            25.0,
            3200.0
        ],
        "type": "continuous"
    },
    "sp-learned-clause-sort-heur": {
        "affects": [
            "sp-clause-inversion"
        ],
        "default": "0",
        "type": "categrical",
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19"
        ]
    },
    "sp-learned-clauses-inc": {
        "default": 1.3,
        "log-scale": "false",
        "range": [
            1.1,
            1.5
        ],
        "type": "continuous"
    },
    "sp-learned-size-factor": {
        "default": 0.4,
        "log-scale": "true",
        "range": [
            0.1,
            1.6
        ],
        "type": "continuous"
    },
    "sp-max-res-lit-inc": {
        "default": 1.0,
        "dependsOn": [
            {
                "sp-resolution": {
                    "type": "categorical",
                    "values": [
                        "1",
                        "2"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.25,
            4.0
        ],
        "type": "continuous"
    },
    "sp-max-res-runs": {
        "default": 4.0,
        "dependsOn": [
            {
                "sp-resolution": {
                    "type": "categorical",
                    "values": [
                        "1",
                        "2"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1.0,
            32.0
        ],
        "type": "continuous"
    },
    "sp-orig-clause-sort-heur": {
        "default": "0",
        "type": "categrical",
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19"
        ]
    },
    "sp-phase-dec-heur": {
        "affects": [
            "sp-rand-phase-dec-freq"
        ],
        "default": "5",
        "type": "categrical",
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ]
    },
    "sp-rand-phase-dec-freq": {
        "affects": [
            "sp-rand-phase-scaling"
        ],
        "default": "0.001",
        "dependsOn": [
            {
                "sp-phase-dec-heur": {
                    "type": "categorical",
                    "values": [
                        "0",
                        "1",
                        "3",
                        "4",
                        "5",
                        "6"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0",
            "0.0001",
            "0.001",
            "0.005",
            "0.01",
            "0.05"
        ]
    },
    "sp-rand-phase-scaling": {
        "default": 1.0,
        "dependsOn": [
            {
                "sp-rand-phase-dec-freq": {
                    "type": "categorical",
                    "values": [
                        "0.0001",
                        "0.001",
                        "0.005",
                        "0.01",
                        "0.05"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.3,
            1.1
        ],
        "type": "continuous"
    },
    "sp-rand-var-dec-freq": {
        "affects": [
            "sp-rand-var-dec-scaling"
        ],
        "default": "0.001",
        "type": "categrical",
        "values": [
            "0",
            "0.0001",
            "0.001",
            "0.005",
            "0.01",
            "0.05"
        ]
    },
    "sp-rand-var-dec-scaling": {
        "default": 1.0,
        "dependsOn": [
            {
                "sp-rand-var-dec-freq": {
                    "type": "categorical",
                    "values": [
                        "0.0001",
                        "0.001",
                        "0.005",
                        "0.01",
                        "0.05"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.3,
            1.1
        ],
        "type": "continuous"
    },
    "sp-res-cutoff-cls": {
        "default": 8.0,
        "dependsOn": [
            {
                "sp-resolution": {
                    "type": "categorical",
                    "values": [
                        "1",
                        "2"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            2.0,
            20.0
        ],
        "type": "continuous"
    },
    "sp-res-cutoff-lits": {
        "default": 400.0,
        "dependsOn": [
            {
                "sp-resolution": {
                    "type": "categorical",
                    "values": [
                        "1",
                        "2"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            100.0,
            1600.0
        ],
        "type": "continuous"
    },
    "sp-res-order-heur": {
        "default": "0",
        "dependsOn": [
            {
                "sp-resolution": {
                    "type": "categorical",
                    "values": [
                        "1",
                        "2"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19"
        ]
    },
    "sp-resolution": {
        "affects": [
            "sp-max-res-lit-inc",
            "sp-res-cutoff-lits",
            "sp-res-order-heur",
            "sp-res-cutoff-cls",
            "sp-max-res-runs"
        ],
        "default": "1",
        "type": "categrical",
        "values": [
            "0",
            "1",
            "2"
        ]
    },
    "sp-restart-inc": {
        "default": 1.5,
        "log-scale": "false",
        "range": [
            1.1,
            1.9
        ],
        "type": "continuous"
    },
    "sp-update-dec-queue": {
        "default": "1",
        "type": "categrical",
        "values": [
            "0",
            "1"
        ]
    },
    "sp-use-pure-literal-rule": {
        "default": "1",
        "type": "categrical",
        "values": [
            "0",
            "1"
        ]
    },
    "sp-var-activity-inc": {
        "default": 1.0,
        "log-scale": "false",
        "range": [
            0.5,
            1.5
        ],
        "type": "continuous"
    },
    "sp-var-dec-heur": {
        "default": "0",
        "type": "categrical",
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19"
        ]
    },
    "sp-variable-decay": {
        "default": 1.4,
        "log-scale": "true",
        "range": [
            1.0,
            2.0
        ],
        "type": "continuous"
    }
}