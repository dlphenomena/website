---
description: Deep neural networks tend to learn from low to high frequency
public: true
title: Frequency Principle/Spectral Bias
pubDate: 2025-10-22
tags:
  - Training
---
Contributor: Zhiwei Bai, Zhi-Qin John Xu, Zhangchen Zhou
## Frequency Principle / Spectral Bias

<!--In this section, only the very initial or very important references. A comprehensive overview is recommended if there is one -->

The **frequency principle / spectral bias** is a phenomenon observed in the study of the training process of [deep neural networks (DNNs)](https://en.wikipedia.org/wiki/Deep_learning#Deep_neural_networks). It describes the tendency of deep neural networks to fit target functions from low to high frequencies during the training process. A comprehensive overview can be found in [[4]](#ref4).

This phenomenon is referred to as the **frequency principle (F-Principle)** by Zhi-Qin John Xu et al. [[1]](#ref1)[[2]](#ref2), or **spectral bias** by Nasim Rahaman et al. [[3]](#ref3).  The F-Principle can be robustly observed in DNNs, regardless of [overparametrization](https://en.wikipedia.org/wiki/Neural_tangent_kernel#Overparametrization,_interpolation,_and_generalization). 

A key mechanism of the F-Principle is that the regularity of the activation function (decay in Fourier domain) translates into the decay rate of the loss function in the frequency domain [[2]](#ref2).

The frequency principle has identified the advantage of deep learning in learning low-frequency functions and the disadvantage in learning high-frequency functions. In light of this, the frequency principle has helped explained a series of phenomena in practical training and inspires a series of more efficient deep learning algorithms in learning high-frequency functions.

<!--The discovery of the frequency principle has inspired the design of DNNs that can quickly learn high-frequency functions. This has applications in [scientific computing](https://en.wikipedia.org/wiki/Computational_science), image classification, and [point cloud](https://en.wikipedia.org/wiki/Point_cloud) fitting problems. Furthermore, it provides a means to comprehend phenomena in practical applications and has inspired numerous studies on deep learning from the frequency perspective [[4]](#ref4).-->

---

## Experimental Results
<!--In this section, explain key experimental results from references in the first section. -->

In one-dimensional problems, the [Discrete Fourier Transform (DFT)](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) of the target function and the output of DNNs can be obtained, and we can observe from Fig.1 that the blue line fits the low-frequency faster than the high-frequency.

<img src="https://ins.sjtu.edu.cn/people/xuzhiqin/fp.gif" alt="F-Principle_one_dim_a" width="45%" style="display: inline-block; margin-right: 5%;"> <img src="https://ins.sjtu.edu.cn/people/xuzhiqin/F-Principle_one_dim.gif" alt="F-Principle_one_dim_b" width="45%" style="display: inline-block;">

Fig 1: Frequency principle in one-dimension. Left: Target function (red) and DNN output (blue). Right: The abscissa represents the frequency and the ordinate represents the amplitude to the corresponding frequency. The red dash line is the DFT of the one-dimension target function. The blue solid line is the DFT of the DNN output.

In two-dimensional problems, Fig.2 utilises DNN to fit an image of the camera man (Input: two-dimensional coordiantes; Output: grey scale). The DNN starts learning from a coarse image and produces a more detailed image as training progresses. This demonstrates learning from low to high frequencies, which is analogous to how the biological brain remembers an image.

![Frequency_experiment_two_dimension](https://cdn.jsdelivr.net/gh/ZhiweiBai/images_for_typora@main/Frequency_experiment_two_dimension.png)

Fig 2: Two-dimensional frequency learning. The first subfigure is the real data of the camera man. The following three subfigures are the outputs of DNNs at step 80, 2000, 58000.

This example shows the 2D frequency principle, which utilises DNNs for image restoration by leveraging preferences for low frequencies, such as in [inpainting](https://en.wikipedia.org/wiki/Inpainting) tasks. However, it is important to account for insufficient learning of high-frequency structures. To address this limitation, certain algorithms have been developed, which are introduced in the Applications section.

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
## Most Key References

<a id="ref1">[1]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Xiao, Yanyang. *Training Behavior of Deep Neural Network in Frequency Domain*, [International Conference on Neural Information Processing, 2019](https://link.springer.com/chapter/10.1007/978-3-030-36708-4_22), [arXiv](https://arxiv.org/abs/1807.01251)

<a id="ref2">[2]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Luo, Tao; Xiao, Yanyang; Ma, Zheng. *Frequency Principle: Fourier Analysis Sheds Light on Deep Neural Networks*, [Communications in Computational Physics, 2020](https://global-sci.com/article/79739/frequency-principle-fourier-analysis-sheds-light-on-deep-neural-networks), [arXiv](https://arxiv.org/abs/1901.06523)

<a id="ref3">[3]</a> Nasim Rahaman\#, Aristide Baratin\#, Devansh Arpit, Felix Draxler, Min Lin, Fred A. Hamprecht, Yoshua Bengio, Aaron Courville. *On the Spectral Bias of Neural Networks*, [International Conference on Machine Learning, 2019](https://proceedings.mlr.press/v97/rahaman19a.html), [arXiv](https://arxiv.org/abs/1806.08734)

<a id="ref4">[4]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Luo, Tao. *Overview frequency principle/spectral bias in deep learning*, [Communications on Applied Mathematics and Computation, 2024](https://link.springer.com/article/10.1007/s42967-024-00398-7), [arXiv](https://arxiv.org/abs/2201.07395)

---
## Related subsequent works
<!-- 1) give a tag, such as theory or algorithm or others. 2) Authors better be completed listed unless there are too many ones. 3) The Journal or Conference name should have a hyperlink to the paper. 4) Provide arxiv page if there is one. -->
---
**Theory:** Luo, Tao; Ma, Zheng; Xu, Zhi-Qin John; Zhang, Yaoyu. *Theory of the Frequency Principle for General Deep Neural Networks*. [CSIAM Trans. Appl. Math.](https://global-sci.org/intro/article_detail/csiam-am/19447.html), 2021.

**TL,DR**: Prove that for general deep neural networks, the change of high-frequency loss over the total loss decays with the separated frequency with a certain power, which is determined by the regularity assumption.

---
**Algorithm:**  Liu, Ziqi; Cai, Wei; Xu, Zhi-Qin John*. *Multi-Scale Deep Neural Network (MscaleDNN) for Solving Poisson-Boltzmann Equation in Complex Domains*. [Communications in Computational Physics, 2020](https://www.global-sci.org/intro/article_detail/cicp/18402.html).

**TL,DR**: **Multi-scale DNN (MscaleDNN):** alleviates the high-frequency difficulty for high-dimensional problems by scaling high frequencies to lower ones. **MscaleDNN-1** takes the following form:

$$
f(\mathbf{x};\theta) = W^{[L-1]} \, \sigma \circ (\cdots (W^{[1]} \, \sigma \circ (K \odot (W^{[0]} \mathbf{x}) + b^{[0]}) + b^{[1]}) \cdots ) + b^{[L-1]},
$$

where $\mathbf{x}\in \mathbb{R}^d$,  $W^{[l]} \in \mathbb{R}^{m_{l+1} \times m_l}$,  $\odot$ is the Hadamard product,  and $K=(a_1,a_1,\dots,a_1,a_2,\dots,a_{N})^T \in \mathbb{R}^{m_1}$, where $a_i=i$ or $a_i=2^{i-1}$.

<img src="https://ins.sjtu.edu.cn/people/xuzhiqin/pub/mscalednn.png" alt="mscalednn" style="width: 50%;">

Fig 3: Illustration of two MscaleDNN structures.

---
**Algorithm:** Cai, Wei; Li, Xiaoguang; Liu, Lizuo. *A Phase Shift Deep Neural Network for High Frequency Approximation and Wave Problems*. SIAM J. Sci. Comput., 2020.

**TL,DR:** Phase shift DNN (PhaseDNN) converts high-frequency component of the data downward to a low-frequency spectrum for learning, and then converts the learned one back to the original high frequency.

---
**Theory:** E, Weinan; Ma, Chao; Wu, Lei. *Machine learning from a continuous viewpoint, I*. Science China Mathematics, 2020.

**TL,DR:** This work provides a continuous framework to study machine learning and suggest gradient flows of neural networks are nice flows and obey the F-Principle. This is because they are [integral equations](https://en.wikipedia.org/wiki/Integral_equation) which have higher regularity. 

---

**Algorithm:** Jagtap, Ameya D.; Kawaguchi, Kenji; Karniadakis, George Em. *Adaptive activation functions accelerate convergence in deep and physics-informed neural networks*. J. Comput. Phys., 2020.

**TL,DR:** This work replaces the activation function $\sigma(x)$ by $\sigma(\mu a x)$, where $\mu \geq 1$ is a fixed scale factor and $a$ is a trainable variable shared for all neurons.

---
**Algorithm:** Tancik, Matthew; Srinivasan, Pratul P.; et al. *Fourier Features Let Networks Learn High Frequency Functions in Low Dimensional Domains*. arXiv:2006.10739, 2020.

**TL,DR:**  Fourier feature network maps input $\mathbf{x}$ to

$$
\gamma(\mathbf{x}) = [a_1 \cos(2\pi b_1^T x), \dots, a_m \cos(2\pi b_m^T x)],
$$

for imaging reconstruction tasks.

---
**Algorithm:** Wang, Sifan; Wang, Hanwen; Perdikaris, Paris. *On the eigenvector bias of Fourier feature networks*. Comput. Methods Appl. Mech. Eng., 2021.

**TL,DR:**  This work extends the Fourier feature method to PDE problems.

---
**Algorithm:** Mildenhall, Ben; Srinivasan, Pratul P.; et al. *NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis*. arXiv:2003.08934, 2020.

**TL,DR:**   This work applies the Fourier feature method to neural radiance fields (NeRF) for view synthesis.

---
