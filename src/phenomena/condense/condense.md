---
description: During the nonlinear training of neural networks, neurons in the same layer tend to condense into groups with similar outputs
public: true
title: Condensation
pubDate: 2025-09-28
tags:
  - Training
author: Zhiwei Bai, Zhi-Qin John Xu, Zhangchen Zhou
---

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

<figure>
  <center>
    <div style="display: grid; grid-template-columns: repeat(3, 27.5%); gap: 10px; justify-content: center;">
      <!-- Row 1 -->
      <figure style="margin: 0;">
        <img src=https://cdn.jsdelivr.net/gh/Anson-Se/upload_pic_phenomenon@main/trajectory100_1.png width="100%">
        <figcaption>epoch = 100</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src=https://cdn.jsdelivr.net/gh/Anson-Se/upload_pic_phenomenon@main/trajectory1000_1.png width="100%">
        <figcaption>epoch = 1000</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src=https://cdn.jsdelivr.net/gh/Anson-Se/upload_pic_phenomenon@main/trajectory5000_1.png width="100%">
        <figcaption>epoch = 5000</figcaption>
      </figure>
      <!-- Row 2 -->
      <figure style="margin: 0;">
        <img src=https://cdn.jsdelivr.net/gh/Anson-Se/upload_pic_phenomenon@main/trajectory10000_1.png width="100%">
        <figcaption>epoch = 10000</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src=https://cdn.jsdelivr.net/gh/Anson-Se/upload_pic_phenomenon@main/trajectory12000_1.png width="100%">
        <figcaption>epoch = 12000</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src=https://cdn.jsdelivr.net/gh/Anson-Se/upload_pic_phenomenon@main/trajectory100000_1.png
        width="100%">
        <figcaption>epoch = 100000</figcaption>
      </figure>
    </div>
  </center>
</figure>

Figure 1: The feature maps $\{(\theta_k,A_k)\}_{k}$ of a two-layer ReLU neural network. The red dots and the gray dots are the features of the active and the static neurons respectively and the blue solid lines are the trajectories of the active neurons during the training. The epochs are described in subcaptions.

## 2. Phase diagram: when condensation happens

Empirically, we have found that in non-linear training regime, condensation is a very common phenomenon. In [[2]](#ref2), to characterize the non-linear and linear regimes, we consider a two-layer NN with $m$ hidden neurons:

$$
f^\alpha_{\boldsymbol{\theta}}(\boldsymbol{x}) = \frac{1}{\alpha} \sum_{k=1}^{m}a_k\sigma(\boldsymbol{w}_k^{T}\boldsymbol{x}),
$$

where $\boldsymbol{x}\in\mathbb{R}^{d}$, $\alpha$ is the scaling factor, $\boldsymbol{\theta}=\mathrm{vec}(\boldsymbol{\theta}_a,\boldsymbol{\theta}_{\boldsymbol{w}})$ with $\boldsymbol{\theta}_a=\mathrm{vec}(\{a_k\}_{k=1}^{m})$, $\boldsymbol{\theta}_{\boldsymbol{w}}=\mathrm{vec}(\{\boldsymbol{w}_k\}_{k=1}^{m})$ is the set of parameters initialized by $a_k^0\sim N(0, \beta_1^2)$, $\boldsymbol{w}_k^0\sim N(0, \beta_2^2 I_d)$. The bias term $b_k$ can be incorporated by expanding $\boldsymbol{x}$ and $\boldsymbol{w}_k$ to $(\boldsymbol{x}^T,1)^T$ and $(\boldsymbol{w}_k^T,b_k)^T$. We consider the infinite-width limit $m\to\infty$.

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
    <img src=https://cdn.jsdelivr.net/gh/Anson-Se/upload_pic_phenomenon@main/fig-phase-diagram_output.png width="100%">
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

## Key References

<a id="ref1">[1]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Zhou, Zhangchen. _An overview of condensation phenomenon in deep learning_. [arXiv](https://arxiv.org/abs/2504.09484)

<a id="ref2">[2]</a> Luo, Tao; Xu, Zhi-Qin John; Ma, Zheng; Zhang, Yaoyu. _Phase diagram for two-layer relu neural networks at infinite-width limit_. [Journal of Machine Learning Research, 2022](https://www.jmlr.org/papers/v22/20-1123.html), [arXiv](https://arxiv.org/abs/2007.07497)

<a id="ref3">[3]</a> Maennel, Hartmut; Bousquet, Olivier; Gelly, Sylvain . _Gradient descent quantizes relu network features_. [arXiv](https://arxiv.org/abs/1803.08367) 

## Related Works

**Theory:** Phuong, Mary; Lampert, Christoph H.. _The inductive bias of relu networks on orthogonally separable data_. [International Conference on Learning Representations, 2021](https://iclr.cc/virtual/2021/poster/2889)

**TL,DR:** Prove that the neurons of two-layer ReLU neural networks will asymptotically converge to two directions (align in two directions): the positive max-margin vector and the negative max-margin vector on orthogonally separable data.

---

**Theory:** Boursier, Etienne; Pillaud-Vivien, Loucas; Nicolas Flammarion. _Gradient flow dynamics of shallow relu networks for square loss and orthogonal inputs_. [Advances in Neural Information Processing Systems, 2022](https://proceedings.neurips.cc/paper_files/paper/2022/file/7eeb9af3eb1f48e29c05e8dd3342b286-Paper-Conference.pdf), [arXiv](https://arxiv.org/abs/2206.00939)

**TL,DR:** Prove that, for orthogonal input vectors, the gradient flow dynamics of training two-layer ReLU neural networks on the mean squared error loss exhibit an initial alignment phase, and estimate the timescale on which this phase occurs.

---

**Theory:** Chistikov, Dmitry; Englert, Matthias; Lazic, Ranko. _Learning a neuron by a shallow relu network: Dynamics and implicit bias for correlated inputs_. [Advances in Neural Information Processing Systems, 2023](https://proceedings.neurips.cc/paper_files/paper/2023/file/4af24e6ce753c181e703f3f0be3b5e20-Paper-Conference.pdf), [arXiv](https://arxiv.org/abs/2306.06479)

**TL,DR:** This work shows that when use two-layer ReLU neural networks to learn a target function of one neuron with correlated inputs, the neurons will first align and will not separate during training.

---

**Theory:** Wang, Mingze; Ma, Chao. _Understanding multi-phase optimization dynamics and rich nonlinear behaviors of relu networks_. [Advances in Neural Information Processing Systems, 2023](https://proceedings.neurips.cc/paper_files/paper/2023/file/7016d7b7b6e3c05b2128ac5b3aae492d-Paper-Conference.pdf), [arXiv](https://arxiv.org/abs/2305.12467)

**TL,DR:**: This paper estimates the time of early alignment phase in the binary classification problem of effectively two data points, which are separated by small angle.

---

**Theory:** Min, Hancheng; Mallada, Enrique; Vidal, Rene. _Early neuron alignment in two-layer relu networks with small initialization_. [International Conference on Learning Representations, 2024](https://openreview.net/forum?id=QibPzdVrRu), [arXiv](https://arxiv.org/abs/2307.12851)

**TL,DR:** This paper looses the data assumption to that the data are positively correlated when they have the same labels and estimate the timescale of early alignment.

---

**Theory:** Boursier, Etienne; and Flammarion, Nicolas. _Early alignment in two-layer networks training is a two-edged sword_. [Journal of Machine Learning Research, 2025](https://www.jmlr.org/papers/volume26/24-1523/24-1523.pdf), [arXiv](https://arxiv.org/abs/2401.10791)

**TL,DR:** This paper demonstrates a quantitative analysis of the initial condensation of both regression and classification and general datasets in two-layer NNs, and also give an example that the initial condensation will do harm to the final convergence with the initialization that $|a_j | ≥ ||\boldsymbol{w}_j ||$.

---

**Theory:** Kumar, Akshay; Haupt Jarvis. _Directional convergence near small initializations and saddles in two-homogeneous neural networks_. [Transactions on Machine Learning Research, 2024](https://openreview.net/forum?id=hfrPag75Y0), [arXiv](https://arxiv.org/abs/2402.09226)

**TL,DR:** This paper analyzes the alignment near small initializations and saddle points on two-homogeneous neural networks.

---

**Theory:** Kumar, Akshay; Haupt, Jarvis. _Early directional convergence in deep homogeneous neural networks for small initializations_. [Transactions on Machine Learning Research, 2025](https://openreview.net/forum?id=VNM6V1gi3k), [arXiv](https://arxiv.org/abs/2403.08121)

**TL,DR:** This paper analyzes the alignment near small initializations on deep homogeneous neural networks.

---

**Theory:** Zhou, Hanxu, Zhou, Qixuan, Luo, Tao, Zhang, Yaoyu, Xu, Zhi-Qin John, _Towards Understanding the Condensation of Neural Networks at Initial Training_. [Advances in Neural Information Processing Systems, 2022](https://proceedings.neurips.cc/paper_files/paper/2022/file/0f4d1fc085b7504c140e66bb26ed8842-Paper-Conference.pdf), [arXiv](https://arxiv.org/abs/2105.11686)

**TL,DR:** This work investigates the phenomenon of neural network condensation during initial training, characterizing the maximal number of orientations based on the activation function’s multiplicity.

---

**Theory:** Zhou, Hanxu; Zhou, Qixuan; Jin, Zhenyuan; Luo, Tao; Zhang, Yaoyu; Xu, Zhi-Qin John. _Empirical Phase Diagram for Three-layer Neural Networks with Infinite Width._ [Advances in Neural Information Processing Systems, 2022](https://proceedings.neurips.cc/paper_files/paper/2022/file/a71c1931d3fb8ba564f7458d0657d0b1-Paper-Conference.pdf), [arXiv](https://arxiv.org/abs/2205.12101)

**TL,DR:** This work presents an empirical phase diagram (condense, critical and linear regimes) for three-layer neural networks with infinite width, revealing distinct phases of different layers.

---

**Theory:** Chen, Zhengan; Li, Yuqing; Luo, Tao; Zhou, Zhangchen; and Xu, Zhi-Qin John.  _Phase diagram of initial condensation for two-layer neural networks_. [CSIAM Trans. Appl. Math, 2024](https://global-sci.com/article/91025/phase-diagram-of-initial-condensation-for-two-layer-neural-networks), [arXiv](https://arxiv.org/abs/2303.06561)

**TL,DR:** This paper estimates the time of initial condensation in two-layer neural networks with activation functions of multiplicity $p=1$.

---

**Theory:** Zhou, Zhangchen; Zhou, Hanxu; Li, Yuqing; Xu Zhi-Qin John. _Understanding the initial condensation of convolutional neural networks_. [CSIAM Trans. Appl. Math, 2025](https://global-sci.com/article/91885/understanding-the-initial-condensation-of-convolutional-neural-networks), [arXiv](https://arxiv.org/abs/2305.09947)

**TL,DR:** This paper extends the analysis to convolutional neural networks, deriving estimates for the onset time of initial condensation with activation functions of multiplicity $p=1$.

---

**Theory:** Zhang, Zhongwang; Xu, Zhi-Qin John. _Implicit regularization of dropout_. [IEEE Transactions on Pattern Analysis and Machine Intelligence, 2024](https://ieeexplore.ieee.org/document/10412142/), [arXiv](https://arxiv.org/abs/2207.05952)

**TL,DR:** This paper shows that dropout can facilitate condensation even without small initialization.

---

**Algorithm:** Chen, Tianyi; Xu, Zhi-Qin John. _Efficient and flexible method for reducing moderate-size deep neural networks with condensation_. [Entropy, 2024](https://www.mdpi.com/1099-4300/26/7/567), [arXiv](https://arxiv.org/abs/2405.01041)

**TL,DR:**  This paper utilizes reduction method based on condensation for different task.
