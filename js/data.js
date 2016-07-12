var data_js = {
    "balancing:strategy": {
        "default": "none",
        "type": "categrical",
        "values": [
            "none",
            "weighting"
        ]
    },
    "classifier:__choice__": {
        "affects": [
            "classifier:decision_tree:max_features",
            "classifier:gradient_boosting:learning_rate",
            "classifier:random_forest:max_features",
            "classifier:decision_tree:min_samples_leaf",
            "classifier:xgradient_boosting:base_score",
            "classifier:gradient_boosting:max_depth",
            "classifier:sgd:loss",
            "classifier:extra_trees:max_depth",
            "classifier:passive_aggressive:fit_intercept",
            "classifier:qda:reg_param",
            "classifier:extra_trees:min_weight_fraction_leaf",
            "classifier:bernoulli_nb:fit_prior",
            "classifier:decision_tree:min_weight_fraction_leaf",
            "classifier:adaboost:algorithm",
            "classifier:liblinear_svc:C",
            "classifier:extra_trees:max_features",
            "classifier:gradient_boosting:max_leaf_nodes",
            "classifier:lda:shrinkage",
            "classifier:multinomial_nb:alpha",
            "classifier:random_forest:min_weight_fraction_leaf",
            "classifier:random_forest:min_samples_split",
            "classifier:random_forest:max_depth",
            "classifier:libsvm_svc:tol",
            "classifier:sgd:n_iter",
            "classifier:decision_tree:splitter",
            "classifier:xgradient_boosting:learning_rate",
            "classifier:multinomial_nb:fit_prior",
            "classifier:k_nearest_neighbors:n_neighbors",
            "classifier:libsvm_svc:gamma",
            "classifier:xgradient_boosting:colsample_bylevel",
            "classifier:extra_trees:min_samples_split",
            "classifier:k_nearest_neighbors:weights",
            "classifier:xgradient_boosting:subsample",
            "classifier:xgradient_boosting:min_child_weight",
            "classifier:gradient_boosting:max_features",
            "classifier:extra_trees:bootstrap",
            "classifier:xgradient_boosting:reg_alpha",
            "classifier:extra_trees:n_estimators",
            "classifier:libsvm_svc:shrinking",
            "classifier:liblinear_svc:multi_class",
            "classifier:liblinear_svc:dual",
            "classifier:extra_trees:min_samples_leaf",
            "classifier:gradient_boosting:subsample",
            "classifier:xgradient_boosting:max_delta_step",
            "classifier:gradient_boosting:min_samples_leaf",
            "classifier:passive_aggressive:loss",
            "classifier:xgradient_boosting:gamma",
            "classifier:sgd:penalty",
            "classifier:xgradient_boosting:reg_lambda",
            "classifier:random_forest:bootstrap",
            "classifier:adaboost:max_depth",
            "classifier:decision_tree:max_leaf_nodes",
            "classifier:sgd:learning_rate",
            "classifier:lda:n_components",
            "classifier:sgd:eta0",
            "classifier:gradient_boosting:min_samples_split",
            "classifier:bernoulli_nb:alpha",
            "classifier:random_forest:min_samples_leaf",
            "classifier:libsvm_svc:C",
            "classifier:liblinear_svc:penalty",
            "classifier:extra_trees:criterion",
            "classifier:gradient_boosting:min_weight_fraction_leaf",
            "classifier:proj_logit:max_epochs",
            "classifier:random_forest:max_leaf_nodes",
            "classifier:libsvm_svc:kernel",
            "classifier:random_forest:n_estimators",
            "classifier:decision_tree:max_depth",
            "classifier:passive_aggressive:n_iter",
            "classifier:decision_tree:criterion",
            "classifier:random_forest:criterion",
            "classifier:sgd:average",
            "classifier:gradient_boosting:loss",
            "classifier:liblinear_svc:loss",
            "classifier:sgd:alpha",
            "classifier:xgradient_boosting:colsample_bytree",
            "classifier:adaboost:n_estimators",
            "classifier:xgradient_boosting:n_estimators",
            "classifier:liblinear_svc:fit_intercept",
            "classifier:sgd:fit_intercept",
            "classifier:liblinear_svc:intercept_scaling",
            "classifier:gradient_boosting:n_estimators",
            "classifier:k_nearest_neighbors:p",
            "classifier:libsvm_svc:max_iter",
            "classifier:xgradient_boosting:max_depth",
            "classifier:decision_tree:min_samples_split",
            "classifier:lda:tol",
            "classifier:xgradient_boosting:scale_pos_weight",
            "classifier:adaboost:learning_rate",
            "classifier:liblinear_svc:tol",
            "classifier:passive_aggressive:C"
        ],
        "default": "random_forest",
        "type": "categrical",
        "values": [
            "adaboost",
            "bernoulli_nb",
            "decision_tree",
            "extra_trees",
            "gaussian_nb",
            "gradient_boosting",
            "k_nearest_neighbors",
            "lda",
            "liblinear_svc",
            "libsvm_svc",
            "multinomial_nb",
            "passive_aggressive",
            "proj_logit",
            "qda",
            "random_forest",
            "sgd",
            "xgradient_boosting"
        ]
    },
    "classifier:adaboost:algorithm": {
        "default": "SAMME.R",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "adaboost"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "SAMME.R",
            "SAMME"
        ]
    },
    "classifier:adaboost:learning_rate": {
        "default": 0.1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "adaboost"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.01,
            2.0
        ],
        "type": "continuous"
    },
    "classifier:adaboost:max_depth": {
        "default": 1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "adaboost"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            10
        ],
        "type": "continuous"
    },
    "classifier:adaboost:n_estimators": {
        "default": 50,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "adaboost"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            50,
            500
        ],
        "type": "continuous"
    },
    "classifier:bernoulli_nb:alpha": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "bernoulli_nb"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.01,
            100.0
        ],
        "type": "continuous"
    },
    "classifier:bernoulli_nb:fit_prior": {
        "default": "True",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "bernoulli_nb"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "classifier:decision_tree:criterion": {
        "default": "gini",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "gini",
            "entropy"
        ]
    },
    "classifier:decision_tree:max_depth": {
        "default": 0.5,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.0,
            2.0
        ],
        "type": "continuous"
    },
    "classifier:decision_tree:max_features": {
        "default": "1.0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1.0"
        ]
    },
    "classifier:decision_tree:max_leaf_nodes": {
        "default": "None",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None"
        ]
    },
    "classifier:decision_tree:min_samples_leaf": {
        "default": 1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "classifier:decision_tree:min_samples_split": {
        "default": 2,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            20
        ],
        "type": "continuous"
    },
    "classifier:decision_tree:min_weight_fraction_leaf": {
        "default": "0.0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0.0"
        ]
    },
    "classifier:decision_tree:splitter": {
        "default": "best",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "decision_tree"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "best"
        ]
    },
    "classifier:extra_trees:bootstrap": {
        "default": "False",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "classifier:extra_trees:criterion": {
        "default": "gini",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "gini",
            "entropy"
        ]
    },
    "classifier:extra_trees:max_depth": {
        "default": "None",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None"
        ]
    },
    "classifier:extra_trees:max_features": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.5,
            5.0
        ],
        "type": "continuous"
    },
    "classifier:extra_trees:min_samples_leaf": {
        "default": 1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "classifier:extra_trees:min_samples_split": {
        "default": 2,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            20
        ],
        "type": "continuous"
    },
    "classifier:extra_trees:min_weight_fraction_leaf": {
        "default": "0.0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0.0"
        ]
    },
    "classifier:extra_trees:n_estimators": {
        "default": "100",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "100"
        ]
    },
    "classifier:gradient_boosting:learning_rate": {
        "default": 0.1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.01,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:gradient_boosting:loss": {
        "default": "deviance",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "deviance"
        ]
    },
    "classifier:gradient_boosting:max_depth": {
        "default": 3,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            10
        ],
        "type": "continuous"
    },
    "classifier:gradient_boosting:max_features": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.5,
            5.0
        ],
        "type": "continuous"
    },
    "classifier:gradient_boosting:max_leaf_nodes": {
        "default": "None",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None"
        ]
    },
    "classifier:gradient_boosting:min_samples_leaf": {
        "default": 1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "classifier:gradient_boosting:min_samples_split": {
        "default": 2,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            20
        ],
        "type": "continuous"
    },
    "classifier:gradient_boosting:min_weight_fraction_leaf": {
        "default": "0.0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0.0"
        ]
    },
    "classifier:gradient_boosting:n_estimators": {
        "default": 100,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            50,
            500
        ],
        "type": "continuous"
    },
    "classifier:gradient_boosting:subsample": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.01,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:k_nearest_neighbors:n_neighbors": {
        "default": 1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "k_nearest_neighbors"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1,
            100
        ],
        "type": "continuous"
    },
    "classifier:k_nearest_neighbors:p": {
        "default": "2",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "k_nearest_neighbors"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1",
            "2"
        ]
    },
    "classifier:k_nearest_neighbors:weights": {
        "default": "uniform",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "k_nearest_neighbors"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "uniform",
            "distance"
        ]
    },
    "classifier:lda:n_components": {
        "default": 10,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "lda"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            250
        ],
        "type": "continuous"
    },
    "classifier:lda:shrinkage": {
        "affects": [
            "classifier:lda:shrinkage_factor"
        ],
        "default": "None",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "lda"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None",
            "auto",
            "manual"
        ]
    },
    "classifier:lda:shrinkage_factor": {
        "default": 0.5,
        "dependsOn": [
            {
                "classifier:lda:shrinkage": {
                    "type": "categorical",
                    "values": [
                        "manual"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.0,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:lda:tol": {
        "default": 0.0001,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "lda"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-05,
            0.1
        ],
        "type": "continuous"
    },
    "classifier:liblinear_svc:C": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.03125,
            32768.0
        ],
        "type": "continuous"
    },
    "classifier:liblinear_svc:dual": {
        "default": "False",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "False"
        ]
    },
    "classifier:liblinear_svc:fit_intercept": {
        "default": "True",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True"
        ]
    },
    "classifier:liblinear_svc:intercept_scaling": {
        "default": "1",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1"
        ]
    },
    "classifier:liblinear_svc:loss": {
        "default": "squared_hinge",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "hinge",
            "squared_hinge"
        ]
    },
    "classifier:liblinear_svc:multi_class": {
        "default": "ovr",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "ovr"
        ]
    },
    "classifier:liblinear_svc:penalty": {
        "default": "l2",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "l1",
            "l2"
        ]
    },
    "classifier:liblinear_svc:tol": {
        "default": 0.0001,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-05,
            0.1
        ],
        "type": "continuous"
    },
    "classifier:libsvm_svc:C": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "libsvm_svc"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.03125,
            32768.0
        ],
        "type": "continuous"
    },
    "classifier:libsvm_svc:coef0": {
        "default": 0.0,
        "dependsOn": [
            {
                "classifier:libsvm_svc:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly",
                        "sigmoid"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            -1.0,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:libsvm_svc:degree": {
        "default": 3,
        "dependsOn": [
            {
                "classifier:libsvm_svc:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            5
        ],
        "type": "continuous"
    },
    "classifier:libsvm_svc:gamma": {
        "default": 0.1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "libsvm_svc"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            3.0517578125e-05,
            8.0
        ],
        "type": "continuous"
    },
    "classifier:libsvm_svc:kernel": {
        "affects": [
            "classifier:libsvm_svc:degree",
            "classifier:libsvm_svc:coef0"
        ],
        "default": "rbf",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "libsvm_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "rbf",
            "poly",
            "sigmoid"
        ]
    },
    "classifier:libsvm_svc:max_iter": {
        "default": "-1",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "libsvm_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "-1"
        ]
    },
    "classifier:libsvm_svc:shrinking": {
        "default": "True",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "libsvm_svc"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "classifier:libsvm_svc:tol": {
        "default": 0.0001,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "libsvm_svc"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-05,
            0.1
        ],
        "type": "continuous"
    },
    "classifier:multinomial_nb:alpha": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "multinomial_nb"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.01,
            100.0
        ],
        "type": "continuous"
    },
    "classifier:multinomial_nb:fit_prior": {
        "default": "True",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "multinomial_nb"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "classifier:passive_aggressive:C": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "passive_aggressive"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-05,
            10.0
        ],
        "type": "continuous"
    },
    "classifier:passive_aggressive:fit_intercept": {
        "default": "True",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "passive_aggressive"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True"
        ]
    },
    "classifier:passive_aggressive:loss": {
        "default": "hinge",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "passive_aggressive"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "hinge",
            "squared_hinge"
        ]
    },
    "classifier:passive_aggressive:n_iter": {
        "default": 20,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "passive_aggressive"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            5,
            1000
        ],
        "type": "continuous"
    },
    "classifier:proj_logit:max_epochs": {
        "default": 2,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "proj_logit"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "classifier:qda:reg_param": {
        "default": 0.5,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "qda"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.0,
            10.0
        ],
        "type": "continuous"
    },
    "classifier:random_forest:bootstrap": {
        "default": "True",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "classifier:random_forest:criterion": {
        "default": "gini",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "gini",
            "entropy"
        ]
    },
    "classifier:random_forest:max_depth": {
        "default": "None",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None"
        ]
    },
    "classifier:random_forest:max_features": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.5,
            5.0
        ],
        "type": "continuous"
    },
    "classifier:random_forest:max_leaf_nodes": {
        "default": "None",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None"
        ]
    },
    "classifier:random_forest:min_samples_leaf": {
        "default": 1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "classifier:random_forest:min_samples_split": {
        "default": 2,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            20
        ],
        "type": "continuous"
    },
    "classifier:random_forest:min_weight_fraction_leaf": {
        "default": "0.0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0.0"
        ]
    },
    "classifier:random_forest:n_estimators": {
        "default": "100",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_forest"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "100"
        ]
    },
    "classifier:sgd:alpha": {
        "default": 0.0001,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-06,
            0.1
        ],
        "type": "continuous"
    },
    "classifier:sgd:average": {
        "default": "False",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "False",
            "True"
        ]
    },
    "classifier:sgd:epsilon": {
        "default": 0.0001,
        "dependsOn": [
            {
                "classifier:sgd:loss": {
                    "type": "categorical",
                    "values": [
                        "modified_huber"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-05,
            0.1
        ],
        "type": "continuous"
    },
    "classifier:sgd:eta0": {
        "default": 0.01,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1e-07,
            0.1
        ],
        "type": "continuous"
    },
    "classifier:sgd:fit_intercept": {
        "default": "True",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True"
        ]
    },
    "classifier:sgd:l1_ratio": {
        "default": 0.15,
        "dependsOn": [
            {
                "classifier:sgd:penalty": {
                    "type": "categorical",
                    "values": [
                        "elasticnet"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-09,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:sgd:learning_rate": {
        "affects": [
            "classifier:sgd:power_t"
        ],
        "default": "optimal",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "optimal",
            "invscaling",
            "constant"
        ]
    },
    "classifier:sgd:loss": {
        "affects": [
            "classifier:sgd:epsilon"
        ],
        "default": "log",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "hinge",
            "log",
            "modified_huber",
            "squared_hinge",
            "perceptron"
        ]
    },
    "classifier:sgd:n_iter": {
        "default": 20,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            5,
            1000
        ],
        "type": "continuous"
    },
    "classifier:sgd:penalty": {
        "affects": [
            "classifier:sgd:l1_ratio"
        ],
        "default": "l2",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "sgd"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "l1",
            "l2",
            "elasticnet"
        ]
    },
    "classifier:sgd:power_t": {
        "default": 0.25,
        "dependsOn": [
            {
                "classifier:sgd:learning_rate": {
                    "type": "categorical",
                    "values": [
                        "invscaling"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1e-05,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:xgradient_boosting:base_score": {
        "default": "0.5",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0.5"
        ]
    },
    "classifier:xgradient_boosting:colsample_bylevel": {
        "default": "1",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1"
        ]
    },
    "classifier:xgradient_boosting:colsample_bytree": {
        "default": "1",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1"
        ]
    },
    "classifier:xgradient_boosting:gamma": {
        "default": "0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0"
        ]
    },
    "classifier:xgradient_boosting:learning_rate": {
        "default": 0.1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.01,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:xgradient_boosting:max_delta_step": {
        "default": "0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0"
        ]
    },
    "classifier:xgradient_boosting:max_depth": {
        "default": 3,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            10
        ],
        "type": "continuous"
    },
    "classifier:xgradient_boosting:min_child_weight": {
        "default": 1,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "classifier:xgradient_boosting:n_estimators": {
        "default": 100,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            50,
            500
        ],
        "type": "continuous"
    },
    "classifier:xgradient_boosting:reg_alpha": {
        "default": "0",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0"
        ]
    },
    "classifier:xgradient_boosting:reg_lambda": {
        "default": "1",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1"
        ]
    },
    "classifier:xgradient_boosting:scale_pos_weight": {
        "default": "1",
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1"
        ]
    },
    "classifier:xgradient_boosting:subsample": {
        "default": 1.0,
        "dependsOn": [
            {
                "classifier:__choice__": {
                    "type": "categorical",
                    "values": [
                        "xgradient_boosting"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.01,
            1.0
        ],
        "type": "continuous"
    },
    "imputation:strategy": {
        "default": "mean",
        "type": "categrical",
        "values": [
            "mean",
            "median",
            "most_frequent"
        ]
    },
    "one_hot_encoding:minimum_fraction": {
        "default": 0.01,
        "dependsOn": [
            {
                "one_hot_encoding:use_minimum_fraction": {
                    "type": "categorical",
                    "values": [
                        "True"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.0001,
            0.5
        ],
        "type": "continuous"
    },
    "one_hot_encoding:use_minimum_fraction": {
        "affects": [
            "one_hot_encoding:minimum_fraction"
        ],
        "default": "True",
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "preprocessor:__choice__": {
        "affects": [
            "preprocessor:nystroem_sampler:n_components",
            "preprocessor:extra_trees_preproc_for_classification:n_estimators",
            "preprocessor:kitchen_sinks:gamma",
            "preprocessor:gem:precond",
            "preprocessor:extra_trees_preproc_for_classification:min_weight_fraction_leaf",
            "preprocessor:select_percentile_classification:percentile",
            "preprocessor:liblinear_svc_preprocessor:penalty",
            "preprocessor:feature_agglomeration:pooling_func",
            "preprocessor:extra_trees_preproc_for_classification:max_depth",
            "preprocessor:polynomial:interaction_only",
            "preprocessor:kernel_pca:kernel",
            "preprocessor:nystroem_sampler:kernel",
            "preprocessor:fast_ica:whiten",
            "preprocessor:random_trees_embedding:max_depth",
            "preprocessor:select_rates:mode",
            "preprocessor:feature_agglomeration:linkage",
            "preprocessor:random_trees_embedding:max_leaf_nodes",
            "preprocessor:liblinear_svc_preprocessor:loss",
            "preprocessor:pca:whiten",
            "preprocessor:extra_trees_preproc_for_classification:max_features",
            "preprocessor:polynomial:include_bias",
            "preprocessor:random_trees_embedding:min_samples_leaf",
            "preprocessor:random_trees_embedding:min_weight_fraction_leaf",
            "preprocessor:polynomial:degree",
            "preprocessor:random_trees_embedding:min_samples_split",
            "preprocessor:liblinear_svc_preprocessor:fit_intercept",
            "preprocessor:liblinear_svc_preprocessor:C",
            "preprocessor:select_rates:alpha",
            "preprocessor:liblinear_svc_preprocessor:dual",
            "preprocessor:pca:keep_variance",
            "preprocessor:liblinear_svc_preprocessor:tol",
            "preprocessor:feature_agglomeration:n_clusters",
            "preprocessor:select_percentile_classification:score_func",
            "preprocessor:liblinear_svc_preprocessor:multi_class",
            "preprocessor:kernel_pca:n_components",
            "preprocessor:feature_agglomeration:affinity",
            "preprocessor:fast_ica:algorithm",
            "preprocessor:liblinear_svc_preprocessor:intercept_scaling",
            "preprocessor:extra_trees_preproc_for_classification:min_samples_leaf",
            "preprocessor:gem:N",
            "preprocessor:kitchen_sinks:n_components",
            "preprocessor:random_trees_embedding:n_estimators",
            "preprocessor:fast_ica:fun",
            "preprocessor:select_rates:score_func",
            "preprocessor:extra_trees_preproc_for_classification:bootstrap",
            "preprocessor:extra_trees_preproc_for_classification:criterion",
            "preprocessor:extra_trees_preproc_for_classification:min_samples_split"
        ],
        "default": "no_preprocessing",
        "type": "categrical",
        "values": [
            "extra_trees_preproc_for_classification",
            "fast_ica",
            "feature_agglomeration",
            "gem",
            "kernel_pca",
            "kitchen_sinks",
            "liblinear_svc_preprocessor",
            "no_preprocessing",
            "nystroem_sampler",
            "pca",
            "polynomial",
            "random_trees_embedding",
            "select_percentile_classification",
            "select_rates"
        ]
    },
    "preprocessor:extra_trees_preproc_for_classification:bootstrap": {
        "default": "False",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "preprocessor:extra_trees_preproc_for_classification:criterion": {
        "default": "gini",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "gini",
            "entropy"
        ]
    },
    "preprocessor:extra_trees_preproc_for_classification:max_depth": {
        "default": "None",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None"
        ]
    },
    "preprocessor:extra_trees_preproc_for_classification:max_features": {
        "default": 1.0,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.5,
            5.0
        ],
        "type": "continuous"
    },
    "preprocessor:extra_trees_preproc_for_classification:min_samples_leaf": {
        "default": 1,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "preprocessor:extra_trees_preproc_for_classification:min_samples_split": {
        "default": 2,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            20
        ],
        "type": "continuous"
    },
    "preprocessor:extra_trees_preproc_for_classification:min_weight_fraction_leaf": {
        "default": "0.0",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "0.0"
        ]
    },
    "preprocessor:extra_trees_preproc_for_classification:n_estimators": {
        "default": "100",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "extra_trees_preproc_for_classification"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "100"
        ]
    },
    "preprocessor:fast_ica:algorithm": {
        "default": "parallel",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "fast_ica"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "parallel",
            "deflation"
        ]
    },
    "preprocessor:fast_ica:fun": {
        "default": "logcosh",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "fast_ica"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "logcosh",
            "exp",
            "cube"
        ]
    },
    "preprocessor:fast_ica:n_components": {
        "default": 100,
        "dependsOn": [
            {
                "preprocessor:fast_ica:whiten": {
                    "type": "categorical",
                    "values": [
                        "True"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            10,
            2000
        ],
        "type": "continuous"
    },
    "preprocessor:fast_ica:whiten": {
        "affects": [
            "preprocessor:fast_ica:n_components"
        ],
        "default": "False",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "fast_ica"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "False",
            "True"
        ]
    },
    "preprocessor:feature_agglomeration:affinity": {
        "default": "euclidean",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "feature_agglomeration"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "euclidean",
            "manhattan",
            "cosine"
        ]
    },
    "preprocessor:feature_agglomeration:linkage": {
        "default": "ward",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "feature_agglomeration"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "ward",
            "complete",
            "average"
        ]
    },
    "preprocessor:feature_agglomeration:n_clusters": {
        "default": 25,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "feature_agglomeration"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            400
        ],
        "type": "continuous"
    },
    "preprocessor:feature_agglomeration:pooling_func": {
        "default": "mean",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "feature_agglomeration"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "mean",
            "median",
            "max"
        ]
    },
    "preprocessor:gem:N": {
        "default": 10,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gem"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            5,
            20
        ],
        "type": "continuous"
    },
    "preprocessor:gem:precond": {
        "default": 0.1,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "gem"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.0,
            0.5
        ],
        "type": "continuous"
    },
    "preprocessor:kernel_pca:coef0": {
        "default": 0.0,
        "dependsOn": [
            {
                "preprocessor:kernel_pca:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly",
                        "sigmoid"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            -1.0,
            1.0
        ],
        "type": "continuous"
    },
    "preprocessor:kernel_pca:degree": {
        "default": 3,
        "dependsOn": [
            {
                "preprocessor:kernel_pca:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            5
        ],
        "type": "continuous"
    },
    "preprocessor:kernel_pca:gamma": {
        "default": 1.0,
        "dependsOn": [
            {
                "preprocessor:kernel_pca:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly",
                        "rbf"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            3.0517578125e-05,
            8.0
        ],
        "type": "continuous"
    },
    "preprocessor:kernel_pca:kernel": {
        "affects": [
            "preprocessor:kernel_pca:degree",
            "preprocessor:kernel_pca:coef0",
            "preprocessor:kernel_pca:gamma"
        ],
        "default": "rbf",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "kernel_pca"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "poly",
            "rbf",
            "sigmoid",
            "cosine"
        ]
    },
    "preprocessor:kernel_pca:n_components": {
        "default": 100,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "kernel_pca"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            10,
            2000
        ],
        "type": "continuous"
    },
    "preprocessor:kitchen_sinks:gamma": {
        "default": 1.0,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "kitchen_sinks"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.3,
            2.0
        ],
        "type": "continuous"
    },
    "preprocessor:kitchen_sinks:n_components": {
        "default": 100,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "kitchen_sinks"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            50,
            10000
        ],
        "type": "continuous"
    },
    "preprocessor:liblinear_svc_preprocessor:C": {
        "default": 1.0,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            0.03125,
            32768.0
        ],
        "type": "continuous"
    },
    "preprocessor:liblinear_svc_preprocessor:dual": {
        "default": "False",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "False"
        ]
    },
    "preprocessor:liblinear_svc_preprocessor:fit_intercept": {
        "default": "True",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True"
        ]
    },
    "preprocessor:liblinear_svc_preprocessor:intercept_scaling": {
        "default": "1",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1"
        ]
    },
    "preprocessor:liblinear_svc_preprocessor:loss": {
        "default": "squared_hinge",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "hinge",
            "squared_hinge"
        ]
    },
    "preprocessor:liblinear_svc_preprocessor:multi_class": {
        "default": "ovr",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "ovr"
        ]
    },
    "preprocessor:liblinear_svc_preprocessor:penalty": {
        "default": "l1",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "l1"
        ]
    },
    "preprocessor:liblinear_svc_preprocessor:tol": {
        "default": 0.0001,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "liblinear_svc_preprocessor"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            1e-05,
            0.1
        ],
        "type": "continuous"
    },
    "preprocessor:nystroem_sampler:coef0": {
        "default": 0.0,
        "dependsOn": [
            {
                "preprocessor:nystroem_sampler:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly",
                        "sigmoid"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            -1.0,
            1.0
        ],
        "type": "continuous"
    },
    "preprocessor:nystroem_sampler:degree": {
        "default": 3,
        "dependsOn": [
            {
                "preprocessor:nystroem_sampler:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            5
        ],
        "type": "continuous"
    },
    "preprocessor:nystroem_sampler:gamma": {
        "default": 0.1,
        "dependsOn": [
            {
                "preprocessor:nystroem_sampler:kernel": {
                    "type": "categorical",
                    "values": [
                        "poly",
                        "rbf",
                        "sigmoid"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            3.0517578125e-05,
            8.0
        ],
        "type": "continuous"
    },
    "preprocessor:nystroem_sampler:kernel": {
        "affects": [
            "preprocessor:nystroem_sampler:coef0",
            "preprocessor:nystroem_sampler:gamma",
            "preprocessor:nystroem_sampler:degree"
        ],
        "default": "rbf",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "nystroem_sampler"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "poly",
            "rbf",
            "sigmoid",
            "cosine"
        ]
    },
    "preprocessor:nystroem_sampler:n_components": {
        "default": 100,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "nystroem_sampler"
                    ]
                }
            }
        ],
        "log-scale": "true",
        "range": [
            50,
            10000
        ],
        "type": "continuous"
    },
    "preprocessor:pca:keep_variance": {
        "default": 0.9999,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "pca"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.5,
            0.9999
        ],
        "type": "continuous"
    },
    "preprocessor:pca:whiten": {
        "default": "False",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "pca"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "False",
            "True"
        ]
    },
    "preprocessor:polynomial:degree": {
        "default": 2,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "polynomial"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            3
        ],
        "type": "continuous"
    },
    "preprocessor:polynomial:include_bias": {
        "default": "True",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "polynomial"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "True",
            "False"
        ]
    },
    "preprocessor:polynomial:interaction_only": {
        "default": "False",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "polynomial"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "False",
            "True"
        ]
    },
    "preprocessor:random_trees_embedding:max_depth": {
        "default": 5,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_trees_embedding"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            10
        ],
        "type": "continuous"
    },
    "preprocessor:random_trees_embedding:max_leaf_nodes": {
        "default": "None",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_trees_embedding"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "None"
        ]
    },
    "preprocessor:random_trees_embedding:min_samples_leaf": {
        "default": 1,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_trees_embedding"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1,
            20
        ],
        "type": "continuous"
    },
    "preprocessor:random_trees_embedding:min_samples_split": {
        "default": 2,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_trees_embedding"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            2,
            20
        ],
        "type": "continuous"
    },
    "preprocessor:random_trees_embedding:min_weight_fraction_leaf": {
        "default": "1.0",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_trees_embedding"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "1.0"
        ]
    },
    "preprocessor:random_trees_embedding:n_estimators": {
        "default": 10,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "random_trees_embedding"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            10,
            100
        ],
        "type": "continuous"
    },
    "preprocessor:select_percentile_classification:percentile": {
        "default": 50.0,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "select_percentile_classification"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            1.0,
            99.0
        ],
        "type": "continuous"
    },
    "preprocessor:select_percentile_classification:score_func": {
        "default": "chi2",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "select_percentile_classification"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "chi2",
            "f_classif"
        ]
    },
    "preprocessor:select_rates:alpha": {
        "default": 0.1,
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "select_rates"
                    ]
                }
            }
        ],
        "log-scale": "false",
        "range": [
            0.01,
            0.5
        ],
        "type": "continuous"
    },
    "preprocessor:select_rates:mode": {
        "default": "fpr",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "select_rates"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "fpr",
            "fdr",
            "fwe"
        ]
    },
    "preprocessor:select_rates:score_func": {
        "default": "chi2",
        "dependsOn": [
            {
                "preprocessor:__choice__": {
                    "type": "categorical",
                    "values": [
                        "select_rates"
                    ]
                }
            }
        ],
        "type": "categrical",
        "values": [
            "chi2",
            "f_classif"
        ]
    },
    "rescaling:__choice__": {
        "default": "min/max",
        "type": "categrical",
        "values": [
            "none",
            "min/max",
            "standardize",
            "normalize"
        ]
    }
}