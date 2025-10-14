---
description: Deep neural networks tend to learn from low to high frequency
public: true
title: Frequency Principle/Spectral Bias
pubDate: 2025-10-03
tags:
  - Training
author: Zhiwei Bai, Zhi-Qin John Xu, Zhangchen Zhou
relatedWorks: f-principle/related-works
---

## Introduction

<!--In this section, only the very initial or very important references. A comprehensive overview is recommended if there is one -->

The **frequency principle / spectral bias** is a phenomenon observed in the study of the training process of [deep neural networks (DNNs)](https://en.wikipedia.org/wiki/Deep_learning#Deep_neural_networks). It describes the tendency of deep neural networks to fit target functions from low to high frequencies during the training process. A comprehensive overview can be found in [[4]](#ref4).

This phenomenon is referred to as the **frequency principle (F-Principle)** by Zhi-Qin John Xu et al. [[1]](#ref1)[[2]](#ref2), or **spectral bias** by Nasim Rahaman et al. [[3]](#ref3). The F-Principle can be robustly observed in DNNs, regardless of [overparametrization](https://en.wikipedia.org/wiki/Neural_tangent_kernel#Overparametrization,_interpolation,_and_generalization).

A key mechanism of the F-Principle is that the regularity of the activation function (decay in Fourier domain) translates into the decay rate of the loss function in the frequency domain [[2]](#ref2).

The frequency principle has identified the advantage of deep learning in learning low-frequency functions and the disadvantage in learning high-frequency functions. In light of this, the frequency principle has helped explained a series of phenomena in practical training and inspires a series of more efficient deep learning algorithms in learning high-frequency functions.

<!--The discovery of the frequency principle has inspired the design of DNNs that can quickly learn high-frequency functions. This has applications in [scientific computing](https://en.wikipedia.org/wiki/Computational_science), image classification, and [point cloud](https://en.wikipedia.org/wiki/Point_cloud) fitting problems. Furthermore, it provides a means to comprehend phenomena in practical applications and has inspired numerous studies on deep learning from the frequency perspective [[4]](#ref4).-->

---

## Experimental Results

<!--In this section, explain key experimental results from references in the first section. -->

In one-dimensional problems, the [Discrete Fourier Transform (DFT)](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) of the target function and the output of DNNs can be obtained, and we can observe from Fig.1 that the blue line fits the low-frequency faster than the high-frequency.

<img src="https://ins.sjtu.edu.cn/people/xuzhiqin/fp.gif" alt="F-Principle_one_dim_a" width="45%" style="display: inline-block; margin-right: 5%;"> <img src="https://ins.sjtu.edu.cn/people/xuzhiqin/F-Principle_one_dim.gif" alt="F-Principle_one_dim_b" width="45%" style="display: inline-block;">

Fig 1: Frequency principle in one-dimension. Left: Target function (red) and DNN output (blue). Right: The abscissa represents the frequency and the ordinate represents the amplitude to the corresponding frequency. The red dash line is the DFT of the one-dimension target function. The blue solid line is the DFT of the DNN output.

In two-dimensional problems, Fig.2 utilizes DNN to fit an image of the camera man (Input: two-dimensional coordinates; Output: grey scale). The DNN starts learning from a coarse image and produces a more detailed image as training progresses. This demonstrates learning from low to high frequencies, which is analogous to how the biological brain remembers an image.

![Frequency_experiment_two_dimension](https://cdn.jsdelivr.net/gh/ZhiweiBai/images_for_typora@main/Frequency_experiment_two_dimension.png)

Fig 2: Two-dimensional frequency learning. The first subfigure is the real data of the camera man. The following three subfigures are the outputs of DNNs at step 80, 2000, 58000.

This example shows the 2D frequency principle, which utilizes DNNs for image restoration by leveraging preferences for low frequencies, such as in [inpainting](https://en.wikipedia.org/wiki/Inpainting) tasks. However, it is important to account for insufficient learning of high-frequency structures. To address this limitation, certain algorithms have been developed, which are introduced in the Applications section.

In high-dimensional problems, one can use projection methods to visualize the frequency convergence in one particular direction or use a [Gaussian filter](https://en.wikipedia.org/wiki/Gaussian_filter) to roughly see the convergence of the low-frequency part and the high-frequency part [[4]](#ref4).

**A very important note for high-dimensional problems**. In image classification tasks, the "frequency" referenced in the F-Principle corresponds to that of the classification function, rather than the input image. For instance, consider an input image: if adding minimal noise along a specific direction alters the model’s output category, the classification function is deemed to have high frequency in that particular direction. Additionally, it is important to note that the original image and the noise-modified image exhibit almost no visual distinction—this modified image is referred to as an adversarial example.

---

## Theoretical Results

<!--In this section, explain key theoretical results from references in the first section. -->

Here is a very intuitive explanation for the frequency principle. Consider a two-layer fully connected neural network with 1d input $x$, 1d output $h(x)$ and activation function $tanh(x)$:

$$
  h(x)=\sum_{j=1}^{m}a_{j}\sigma(w_{j}x+b_{j}).
$$

The Fourier transform is

$$
\hat{h}(k)=\sum_{j=1}^{m}\frac{2\pi a_{j}\text{i}}{|w_{j}|}\exp\Big(\frac{\text{i} b_{j}k}{w_{j}}\Big)\frac{1}{\exp(-\frac{\pi k}{2w_{j}})-\exp(\frac{\pi k}{2w_{j}})}.
$$

Note: 1) ignore the singularity at $k=0$; 2) there is an exponential decay w.r.t. $|k|$ due to the exponential decay of smooth function in frequency domain, $tanh(x)$ is smooth.

Define the loss at frequency $k$ w.r.t. the target function $f$:

$$
L(k)=\frac{1}{2}\left|D(k)\right|^{2},\quad   D(k)\triangleq\hat{h}(k)-\hat{f}(k).
$$

According to Parseval's theorem, the summation loss of all frequencies equals to the commonly defined mean-squared loss. We can use the loss in frequency domain to perform gradient descent algorithm. The gradient contributed by frquency $k$ for a parameter is

$$
\left|\frac{\partial L(k)}{\partial\theta_{lj}}\right|\approx |\hat{h}(k)-\hat{f}(k)|\exp\left(-|\pi k/2w_{j}|\right)F_{lj}(\theta_{j},k).
$$

The first term is due to the chain rule. The second term is due to the propertiy of smooth activation function and the derivative of exponent function. The third term contains other not so important terms in this analysis (such as $O(1)$ terms).

The gradient derived from low-frequency components dominates that from high-frequency components in an exponential manner. This is particularly prominent when parameters are small, and thus, low-frequency components are assigned higher priority during the learning process.

---

## Key References

<a id="ref1">[1]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Xiao, Yanyang. _[Training Behavior of Deep Neural Network in Frequency Domain](https://link.springer.com/chapter/10.1007/978-3-030-36708-4_22)_, International Conference on Neural Information Processing, 2019, [arXiv](https://arxiv.org/abs/1807.01251)

<a id="ref2">[2]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Luo, Tao; Xiao, Yanyang; Ma, Zheng. _[Frequency Principle: Fourier Analysis Sheds Light on Deep Neural Networks](https://global-sci.com/article/79739/frequency-principle-fourier-analysis-sheds-light-on-deep-neural-networks)_, Communications in Computational Physics, 2020, [arXiv](https://arxiv.org/abs/1901.06523)

<a id="ref3">[3]</a> Nasim Rahaman\#, Aristide Baratin\#, Devansh Arpit, Felix Draxler, Min Lin, Fred A. Hamprecht, Yoshua Bengio, Aaron Courville. _[On the Spectral Bias of Neural Networks](https://proceedings.mlr.press/v97/rahaman19a.html)_, International Conference on Machine Learning, 2019, [arXiv](https://arxiv.org/abs/1806.08734)

<a id="ref4">[4]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Luo, Tao. _[Overview frequency principle/spectral bias in deep learning](https://link.springer.com/article/10.1007/s42967-024-00398-7)_, Communications on Applied Mathematics and Computation, 2024, [arXiv](https://arxiv.org/abs/2201.07395)

