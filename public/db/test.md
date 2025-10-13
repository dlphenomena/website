## 1. Introduction

The **condensation/alignment phenomenon** in deep neural networks (DNNs) describes that: **During the nonlinear training of neural networks, neurons in the same layer tend to condense into groups with similar outputs** [[1]](#ref1). This phenomenon is referred to as **condensation** [[2]](#ref2) or **alignment** [[3]](#ref3). This behavior is supported by both empirical observations and theoretical analysis. The number of these condensed neuron clusters often increases as training progresses, offering a mechanism for the network's output complexity to grow.

To illustrate this, consider the target function:

$$
f(x) = - \sigma(x) + \sigma(2(x+0.3)) - \sigma(1.5(x-0.4)) + \sigma(0.5(x-0.8)),
$$

where $\sigma(x) = \mathrm{ReLU}(x)$. The width of the hidden layer is $m=100$, and the learning rate is $0.1$. The parameters are initialized by $\mathcal{N}(0,\frac{1}{m^4})$. The training data is evenly sampled in $[-1,1]$.

For a two-layer neural network with one-dimensional input:

$$
h(x) = \sum\limits_{k=1}^{m}a_k\sigma(w_k x+b_k),
$$

the feature of the neuron $k$ is defined as $(\theta_k,A_k)$, where $\theta_k = \operatorname{sign}(b_k) \times \arccos\left(\frac{w_k}{\sqrt{w_k^2+b_k^2}}\right)$ and $A_k = \sqrt{w_k^2+b_k^2}$.

The features $\{(\theta_k,A_k)\}_{k}$ during the training process are shown in Fig. 1. We observe that, as training progresses, the neurons in the network condense into a few isolated orientations, and the number of these orientations increases.
