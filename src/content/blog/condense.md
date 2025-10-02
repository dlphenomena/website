---
description: Behavior of training nolinear neural networks
public: true
title: Condensation
pubDate: 2025-09-28
tags:
  - Training
---

# Condensation

## 1. Introduction

The **condensation phenomenon/alignment** in deep neural networks (DNNs) describes that: **During the nonlinear training of neural networks, neurons in the same layer tend to condense into groups with similar outputs.** [[1]](#ref1) This phenomenon is referred to as **condensation** [[2]](#ref2) or **align** [[3]](#ref3). This behavior is supported by both empirical observations and theoretical analysis. The number of these condensed neuron clusters often increases as training progresses, offering a mechanism for the network's output complexity to grow.

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

<figure>
  <center>
    <div style="display: grid; grid-template-columns: repeat(3, 27.5%); gap: 10px; justify-content: center;">
      <!-- Row 1 -->
      <figure style="margin: 0;">
        <img src="pic/trajectory100.png" width="100%">
        <figcaption>epoch = 100</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src="pic/trajectory1000.png" width="100%">
        <figcaption>epoch = 1000</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src="pic/trajectory5000.png" width="100%">
        <figcaption>epoch = 5000</figcaption>
      </figure>
      <!-- Row 2 -->
      <figure style="margin: 0;">
        <img src="pic/trajectory10000.png" width="100%">
        <figcaption>epoch = 10000</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src="pic/trajectory12000.png" width="100%">
        <figcaption>epoch = 12000</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src="pic/trajectory100000.png" width="100%">
        <figcaption>epoch = 100000</figcaption>
      </figure>
    </div>
  </center>
</figure>

Figure 1: The feature maps ${(\theta_k,A_k)}_{k}$ of a two-layer ReLU neural network. The red dots and the gray dots are the features of the active and the static neurons respectively and the blue solid lines are the trajectories of the active neurons during the training. The epochs are described in subcaptions.

## 2. Phase diagram: when condensation happens

Empirically, we have found that in non-linear training regime, condensation is a very common phenomenon. In [[2]](#ref2), to characterize the non-linear and linear regimes, we consider a two-layer NN with $m$ hidden neurons:

$$
f^\alpha_{\boldsymbol{\theta}}(\boldsymbol{x}) = \frac{1}{\alpha} \sum_{k=1}^{m}a_k\sigma(\boldsymbol{w}_k^{T}\boldsymbol{x}),
$$

where $\boldsymbol{x}\in\mathbb{R}^{d}$, $\alpha$ is the scaling factor, $\boldsymbol{\theta}=\mathrm{vec}(\boldsymbol{\theta}_a,\boldsymbol{\theta}_\boldsymbol{w})$ with $\boldsymbol{\theta}_a=\mathrm{vec}(\{a_k\}_{k=1}^{m})$, $\boldsymbol{\theta}_{\boldsymbol{w}}=\mathrm{vec}(\{\boldsymbol{w}_k\}_{k=1}^{m})$ is the set of parameters initialized by $a_k^0\sim N(0, \beta_1^2)$, $\boldsymbol{w}_k^0\sim N(0, \beta_2^2 I_d)$. The bias term $b_k$ can be incorporated by expanding $\boldsymbol{x}$ and $\boldsymbol{w}_k$ to $(\boldsymbol{x}^T,1)^T$ and $(\boldsymbol{w}_k^T,b_k)^T$. We consider the infinite-width limit $m\to\infty$.

The linear regime refers to a dynamic regime that the model can be approximated by the first-order Taylor expansion at the initial parameter point, i.e.,

$$
f^{\alpha}_{\boldsymbol{\theta(t)}}(\boldsymbol{x}) \approx f^{\alpha}_{\boldsymbol{\theta(0)}}(\boldsymbol{x}) + \nabla_{\boldsymbol{\theta}} f^{\alpha}_{\boldsymbol{\theta(0)}}(\boldsymbol{x})\cdot (\boldsymbol{\theta(t)}-\boldsymbol{\theta(0)}),
$$

where $\boldsymbol{\theta(t)}$ is the parameter set at training time $t$. Therefore, to characterize the linear/non-linear regime, the key is the change of $\boldsymbol{\theta_{\boldsymbol{w}}}$ during the training. If it changes very slightly, then, the first-order Taylor expansion can be approximated held, i.e., linear regime, otherwise, non-linear regime. A key quantity is defined as:

$$
\mathrm{RD}(\boldsymbol{\theta}_{\boldsymbol{w}}(t))=\frac{||{\theta_{\boldsymbol{w}}(t)-\theta_{\boldsymbol{w}}(0)}||_{2}}{||{\theta_{\boldsymbol{w}}(0)}||_{2}}.
$$

Through appropriate rescaling and normalization of the gradient flow dynamics, which accounts for the dynamical similarity up to a time scaling, we arrive at two independent coordinates:

$$
\gamma=\lim\limits_{m\to\infty}-\frac{\log\beta_1\beta_2/\alpha}{\log m}, \quad \gamma'=\lim\limits_{m\to\infty}-\frac{\log\beta_1/\beta_2}{\log m}.
$$

The resulting phase diagram is shown in Fig. 2, which can be rigorously characterized by the following two theorems.

<figure>
    <center>
    <img src="pic/fig-phase-diagram_output.png" width="100%">
    </center>
</figure>

Figure 2: Phase diagram of two-layer ReLU NNs at infinite-width limit. The marked examples are studied in existing literature. [[2]](#ref2)

**Theorem 1** (Informal statement [[2]](#ref2))

> If $\gamma<1$ or $\gamma'>\gamma-1$, then with a high probability over the choice of $\boldsymbol{\theta}^0$, we have
>
> $$
> \lim_{m\to+\infty}\sup\limits_{t\in[0,+\infty)}\mathrm{RD}(\boldsymbol{\theta}_{\boldsymbol{w}}(t))=0.
> $$

**Theorem 2** (Informal statement [[2]](#ref2))

> If $\gamma>1$ and $\gamma'<\gamma-1$, then with a high probability over the choice of $\boldsymbol{\theta}^0$, we have
>
> $$
> \lim_{m\to+\infty} \sup\limits_{t\in[0,+\infty)}\mathrm{RD}(\boldsymbol{\theta}_{\boldsymbol{w}}(t))=+\infty.
> $$

## References

<a id="ref1">[1]</a> Xu, Zhi-Qin John, Yaoyu Zhang, and Zhangchen Zhou. "An overview of condensation phenomenon in deep learning." arXiv preprint arXiv:2504.09484 (2025).

<a id="ref2">[2]</a> Luo, Tao, Zhi-Qin John Xu, Zheng Ma, and Yaoyu Zhang. "Phase diagram for two-layer relu neural networks at infinite-width limit." Journal of Machine Learning Research 22, no. 71 (2021): 1-47.

<a id="ref3">[3]</a> Maennel, Hartmut, Olivier Bousquet, and Sylvain Gelly. "Gradient descent quantizes relu network features." arXiv preprint arXiv:1803.08367 (2018).
