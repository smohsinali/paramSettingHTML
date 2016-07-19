var data_js = {
    "rescaling:__choice__": {
        "default": "min/max",
        "type": "categrical",
        "values": [
            "none",
            "min/max",
            "standardize",
            "normalize"
        ]
    },
    "preprocessor:__choice__": {
        "affects": [
            "preprocessor:pca:keep_variance",
            "preprocessor:pca:whiten",
            "preprocessor:select_percentile_classification:percentile",
            "preprocessor:select_percentile_classification:score_func",
            "preprocessor:kernel_pca:n_components",
            "preprocessor:kernel_pca:kernel",
            "preprocessor:polynomial:interaction_only",
            "preprocessor:polynomial:degree",
            "preprocessor:polynomial:include_bias"
        ],
        "default": "no_preprocessing",
        "type": "categrical",
        "values": [
            "kernel_pca",
            "no_preprocessing",
            "pca",
            "polynomial",
            "select_percentile_classification"
        ]
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "false",
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
            "preprocessor:kernel_pca:gamma",
            "preprocessor:kernel_pca:coef0"
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
        "integer": "true",
        "log-scale": "false",
        "range": [
            10,
            500
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "false",
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
    "balancing:strategy": {
        "default": "none",
        "type": "categrical",
        "values": [
            "none"
        ]
    },
    "classifier:__choice__": {
        "affects": [
            "classifier:random_forest:n_estimators",
            "classifier:random_forest:max_features",
            "classifier:liblinear_svc:penalty",
            "classifier:random_forest:min_samples_leaf",
            "classifier:decision_tree:min_weight_fraction_leaf",
            "classifier:decision_tree:max_features",
            "classifier:liblinear_svc:C",
            "classifier:xgradient_boosting:colsample_bylevel",
            "classifier:extra_trees:max_depth",
            "classifier:extra_trees:max_features",
            "classifier:xgradient_boosting:base_score",
            "classifier:xgradient_boosting:learning_rate",
            "classifier:sgd:fit_intercept",
            "classifier:extra_trees:bootstrap",
            "classifier:decision_tree:max_depth",
            "classifier:sgd:alpha",
            "classifier:liblinear_svc:loss",
            "classifier:libsvm_svc:shrinking",
            "classifier:lda:tol",
            "classifier:extra_trees:min_weight_fraction_leaf",
            "classifier:random_forest:bootstrap",
            "classifier:adaboost:algorithm",
            "classifier:random_forest:criterion",
            "classifier:decision_tree:criterion",
            "classifier:xgradient_boosting:reg_alpha",
            "classifier:xgradient_boosting:scale_pos_weight",
            "classifier:extra_trees:n_estimators",
            "classifier:random_forest:min_weight_fraction_leaf",
            "classifier:xgradient_boosting:max_depth",
            "classifier:libsvm_svc:tol",
            "classifier:lda:n_components",
            "classifier:extra_trees:min_samples_split",
            "classifier:xgradient_boosting:n_estimators",
            "classifier:sgd:average",
            "classifier:decision_tree:min_samples_split",
            "classifier:lda:shrinkage",
            "classifier:sgd:penalty",
            "classifier:liblinear_svc:multi_class",
            "classifier:xgradient_boosting:reg_lambda",
            "classifier:qda:reg_param",
            "classifier:extra_trees:criterion",
            "classifier:liblinear_svc:intercept_scaling",
            "classifier:libsvm_svc:gamma",
            "classifier:adaboost:n_estimators",
            "classifier:random_forest:max_leaf_nodes",
            "classifier:adaboost:max_depth",
            "classifier:sgd:eta0",
            "classifier:random_forest:max_depth",
            "classifier:liblinear_svc:dual",
            "classifier:random_forest:min_samples_split",
            "classifier:decision_tree:splitter",
            "classifier:decision_tree:max_leaf_nodes",
            "classifier:xgradient_boosting:min_child_weight",
            "classifier:extra_trees:min_samples_leaf",
            "classifier:xgradient_boosting:gamma",
            "classifier:k_nearest_neighbors:n_neighbors",
            "classifier:sgd:learning_rate",
            "classifier:k_nearest_neighbors:p",
            "classifier:libsvm_svc:C",
            "classifier:xgradient_boosting:colsample_bytree",
            "classifier:adaboost:learning_rate",
            "classifier:decision_tree:min_samples_leaf",
            "classifier:libsvm_svc:max_iter",
            "classifier:liblinear_svc:tol",
            "classifier:liblinear_svc:fit_intercept",
            "classifier:libsvm_svc:kernel",
            "classifier:sgd:n_iter",
            "classifier:sgd:loss",
            "classifier:k_nearest_neighbors:weights",
            "classifier:xgradient_boosting:subsample",
            "classifier:xgradient_boosting:max_delta_step"
        ],
        "default": "random_forest",
        "type": "categrical",
        "values": [
            "adaboost",
            "decision_tree",
            "extra_trees",
            "k_nearest_neighbors",
            "lda",
            "liblinear_svc",
            "libsvm_svc",
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
            "SAMME.R"
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "true",
        "log-scale": "false",
        "range": [
            50,
            500
        ],
        "type": "continuous"
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "true",
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "true",
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
        "integer": "true",
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
        "integer": "true",
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
        "integer": "false",
        "log-scale": "false",
        "range": [
            0.0,
            1.0
        ],
        "type": "continuous"
    },
    "classifier:lda:tol": {
        "default": "0.0001",
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
            "0.0001"
        ]
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
        "integer": "false",
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
            "l2"
        ]
    },
    "classifier:liblinear_svc:tol": {
        "default": "0.0001",
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
            "0.0001"
        ]
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
        "integer": "false",
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "false",
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
        "integer": "false",
        "log-scale": "true",
        "range": [
            1e-05,
            0.1
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
        "integer": "false",
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "true",
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
        "integer": "false",
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
        "integer": "false",
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
        "integer": "false",
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "false",
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
        "integer": "false",
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
        "integer": "true",
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
        "integer": "true",
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
        "integer": "true",
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
        "integer": "false",
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
            "mean"
        ]
    },
    "one_hot_encoding:use_minimum_fraction": {
        "default": "False",
        "type": "categrical",
        "values": [
            "False"
        ]
    },
}
