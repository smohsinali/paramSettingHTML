var info = {
    "rescaling:__choice__": "Rescale the data (necessary for some preprocessing or classification algorithms). Possible choices are 'none' which leaves the data as it is, 'min/max' which rescales the each feature linearly between zero and one, 'standardize' which transforms each feature to have zero mean and unit variance and 'normalize' which transforms each sample to have length one (manhattan distance).",
    "classifier:__choice__": "Classifier used in the pipeline.",
    "classifier:decision_tree:min_samples_leaf ": "The minimum number of samples required to be at a leaf node.",
    "classifier:decision_tree:criterion": "The function to measure the quality of a split. 'gini': Gini impurity; 'entropy': information gain",
    "classifier:decision_tree:min_samples_split": "The minimum number of samples required to split an internal node.",
    "classifier:decision_tree:max_depth": "Re-parametrization of decision tree's max_depth parameter. max_depth = max(1, round(max_depth * num_features)). \
\
The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples. Ignored if max_leaf_nodes is not None.",

    "classifier:extra_trees:min_samples_leaf": "The minimum number of samples in newly created leaves. A split is discarded if after the split, one of the leaves would contain less then 'min_samples_leaf' samples.",
    "classifier:extra_trees:max_features": "Re-parametrization of extra tree's max_features parameter. max_features = max_features * (log(num_features) + 1).\
\
max_features is a percentage and int(max_features * n_features) features are considered at each split.",
    "classifier:extra_trees:criterion": "The function to measure the quality of a split. 'gini': Gini impurity; 'entropy': information gain",
    "classifier:extra_trees:bootstrap": "Whether bootstrap samples are used when building trees.",
    "classifier:extra_trees:min_samples_split": "The minimum number of samples required to split an internal node.",

    "classifier:random_forest:bootstrap": "Whether bootstrap samples are used when building trees.",
    "classifier:random_forest:max_features": "Re-parametrization of decision tree's max_depth parameter. max_depth = max(1, round(max_depth * num_features)).\
\
max_features is a percentage and int(max_features * n_features) features are considered at each split.",
    "classifier:random_forest:min_samples_split": "The minimum number of samples required to split an internal node.",
    "classifier:random_forest:min_samples_leaf": "The minimum number of samples in newly created leaves. A split is discarded if after the split, one of the leaves would contain less then 'min_samples_leaf' samples.",
    "classifier:random_forest:criterion": "The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “entropy” for the information gain.",

    "classifier:adaboost:learning_rate": "Learning rate shrinks the contribution of each classifier by learning_rate.",
    "classifier:adaboost:max_depth": "The maximum depth of the tree.",
    "classifier:adaboost:n_estimators": "The maximum number of estimators at which boosting is terminated.",

    "classifier:sgd:alpha": "Constant that multiplies the regularization term. Also used to compute learning_rate when set to 'optimal'.",
    "classifier:sgd:learning_rate": "The learning rate schedule: constant: eta = eta0\
optimal: eta = 1.0 / (alpha * (t + t0))\
invscaling: eta = eta0 / pow(t, power_t)",
    "classifier:sgd:eta0": "The initial learning rate for all learning rate schedules.",
    "classifier:sgd:average": "When set to True, computes the averaged SGD weights.",
    "classifier:sgd:loss": "The loss function to be used. 'hinge': gives a linear SVM; 'log': gives logistic regression; 'modified_huber': smooth loss that brings tolerance to outliers; 'squared_hinge': like hinge but is quadratically penalized. 'perceptron': the linear loss used by the perceptron algorithm.",
    "classifier:sgd:penalty": "The penalty to be used. 'l2' is the standard regularizer for linear SVM models, 'l1' and 'elasticnet' might bring sparsity to the model (feature selection) which is not achievable with 'l2'.",
    "classifier:sgd:power_t": "The exponent for inverse scaling learning rate.",
    "classifier:sgd:l1_ratio": "The Elastic Net mixing parameter, with 0 <= l1_ratio <= 1. l1_ratio=0 corresponds to L2 penalty, l1_ratio=1 to L1",
    "classifier:sgd:epsilon": "Determines the threshold at which it becomes less important to get the prediction exactly right.",
    "classifier:sgd:n_iter": "The number of passes over the training data (aka epochs). The number of iterations is set to 1 if using partial_fit.",

    "classifier:lda:shrinkage": "Shrinkage parameter, possible values:\
None: no shrinkage (default).\
'auto': automatic shrinkage using the Ledoit-Wolf lemma.\
'manual'",
    "classifier:lda:n_components": "Number of components (< n_classes - 1) for dimensionality reduction.",
    "classifier:lda:shrinkage_factor": "fixed shrinkage parameters",

    "classifier:qda:reg_param": "Regularizes the covariance estimate as (1-reg_param)*Sigma + reg_param*np.eye(n_features).",


    "classifier:xgradient_boosting:subsample": "subsample ratio of the training instance. Setting it to 0.5 means that XGBoost randomly collected half of the data instances to grow trees and this will prevent overfitting.",
    "classifier:xgradient_boosting:min_child_weight": "Minimum sum of instance weight(hessian) needed in a child. If the tree partition step results in a leaf node with the sum of instance weight less than min_child_weight, then the building process will give up further partitioning.",
    "classifier:xgradient_boosting:n_estimators": "The number of rounds for boosting.",
    "classifier:xgradient_boosting:learning_rate": "Step size shrinkage used in update to prevents overfitting.",
    "classifier:xgradient_boosting:max_depth": "Maximum depth of a tree, increase this value will make model more complex / likely to be overfitting.",

    "classifier:libsvm_svc:C": "Penalty parameter C of the error term.",
    "classifier:libsvm_svc:kernel": "Specifies the kernel type to be used in the algorithm.",
    "classifier:libsvm_svc:shrinking": "Whether to use the shrinking heuristic.",
    "classifier:libsvm_svc:degree": "Degree of the polynomial kernel function ('poly').",
    "classifier:libsvm_svc:coef0": "Independent term in kernel function.",
    "classifier:libsvm_svc:gamma": "Kernel coefficient for 'rbf', 'poly' and 'sigmoid'.",
    "classifier:libsvm_svc:tol": "Tolerance for stopping criterion.",

    "classifier:liblinear_svc:C": "Penalty parameter C of the error term.",

    "classifier:k_nearest_neighbors:p": "Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2.",
    "classifier:k_nearest_neighbors:weights": "weight function used in prediction. Possible values are :\
 'uniform': uniform weights. All points in each neighborhood are weighted equally\
'distance' : weight points by the inverse of their distance. in this case, closer neighbors of a query point will have a greater influence than neighbors which are further away.",
    "classifier:k_nearest_neighbors:n_neighbors": "Number of neighbors to use by default for k_neighbors queries.",

    "preprocessor:__choice__": "Choice of preprocessing algorithm to apply to the data. Choose no_preprocessing to skip this step.",

    "preprocessor:select_percentile_classification:percentile": "Percent of features to keep.",
    "preprocessor:select_percentile_classification:score_func": "Function taking two arrays X and y, and returning a pair of arrays. Either f_classif, which calculates the ANOVA F-value between labe/feature for classification tasks or chi2 which calculates the Chi-squared stats of non-negative features for classification tasks.",

    "preprocessor:kernel_pca:kernel": "Kernel.",
    "preprocessor:kernel_pca:n_components": "Number of components.",
    "preprocessor:kernel_pca:degree": "Degree for poly kernels. Ignored by other kernels.",
    "preprocessor:kernel_pca:coef0": "Independent term in poly and sigmoid kernels.",
    "preprocessor:kernel_pca:gamma": "Kernel coefficient for rbf and poly kernels.",
    
    "preprocessor:polynomial:interaction_only": "If true, only interaction features are produced: features that are products of at mostdegree distinct input features (so not x[1] ** 2, x[0] * x[2] ** 3, etc.).",
    "preprocessor:polynomial:include_bias": "If True (default), then include a bias column, the feature in which all polynomial powers are zero (i.e. a column of ones - acts as an intercept term in a linear model).",
    "preprocessor:polynomial:degree": "The degree of the polynomial features.",

    "preprocessor:pca:keep_variance": "Select the number of components such that the amount of variance that needs to be explained is greater than the percentage specified by n_components.",    
    "preprocessor:pca:whiten": "When True (False by default) the components_ vectors are divided by n_samples times singular values to ensure uncorrelated outputs with unit component-wise variances.",
}
