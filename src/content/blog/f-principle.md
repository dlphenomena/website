---
description: Deep neural networks tend to learn from low to high frequency
public: true
title: Frequency Principle
pubDate: 2025-10-22
tags:
  - Training
---

# Frequency Principle / Spectral Bias

The **frequency principle / spectral bias** is a phenomenon observed in the study of [artificial neural networks (ANNs)](https://en.wikipedia.org/wiki/Artificial_neural_network), specifically [deep neural networks (DNNs)](https://en.wikipedia.org/wiki/Deep_learning#Deep_neural_networks). It describes the tendency of deep neural networks to fit target functions from low to high frequencies during the training process.

This phenomenon is referred to as the **frequency principle (F-Principle)** by Zhi-Qin John Xu et al. [[1]](#ref1)[[2]](#ref2), or **spectral bias** by Nasim Rahaman et al. [[3]](#ref3).  The F-Principle can be robustly observed in DNNs, regardless of [overparametrization](https://en.wikipedia.org/wiki/Neural_tangent_kernel#Overparametrization,_interpolation,_and_generalization). A key mechanism of the F-Principle is that the regularity of the activation function translates into the decay rate of the loss function in the frequency domain.

The discovery of the frequency principle has inspired the design of DNNs that can quickly learn high-frequency functions. This has applications in [scientific computing](https://en.wikipedia.org/wiki/Computational_science), image classification, and [point cloud](https://en.wikipedia.org/wiki/Point_cloud) fitting problems. Furthermore, it provides a means to comprehend phenomena in practical applications and has inspired numerous studies on deep learning from the frequency perspective [[4]](#ref4).

---

## Main Results (Informal)

### Experimental Results

In one-dimensional problems, the [Discrete Fourier Transform (DFT)](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) of the target function and the output of DNNs can be obtained, and we can observe from Fig.1 that the blue line fits the low-frequency faster than the high-frequency.

![F-Principle_one_dim](https://ins.sjtu.edu.cn/people/xuzhiqin/F-Principle_one_dim.gif)(https://ins.sjtu.edu.cn/people/xuzhiqin/fp.gif)

Fig 1: Frequency principle in one-dimension. The abscissa represents the frequency and the ordinate represents the amplitude to the corresponding frequency. The red dash line is the DFT of the one-dimension target function. The blue solid line is the DFT of the DNN output.

In two-dimensional problems, Fig.2 utilises DNN to fit an image of the camera man. The DNN starts learning from a coarse image and produces a more detailed image as training progresses. This demonstrates learning from low to high frequencies, which is analogous to how the biological brain remembers an image.

![Frequency_experiment_two_dimension](https://cdn.jsdelivr.net/gh/ZhiweiBai/images_for_typora@main/Frequency_experiment_two_dimension.png)

Fig 2: Two-dimensional frequency learning. The first subfigure is the real data of the camera man. The following three subfigures are the outputs of DNNs at step 80, 2000, 58000.

This example shows the 2D frequency principle, which utilises DNNs for image restoration by leveraging preferences for low frequencies, such as in [inpainting](https://en.wikipedia.org/wiki/Inpainting) tasks. However, it is important to account for insufficient learning of high-frequency structures. To address this limitation, certain algorithms have been developed, which are introduced in the Applications section.

In high-dimensional problems, one can use projection methods to visualize the frequency convergence in one particular direction or use a [Gaussian filter](https://en.wikipedia.org/wiki/Gaussian_filter) to roughly see the convergence of the low-frequency part and the high-frequency part [[4]](#ref4).

---

### Theoretical Results

Based on the following assumptions:
i) certain regularity of target function, sample distribution function and activation function;
ii) bounded training trajectory with loss convergence,

Luo et al. [[5]](#ref5) prove that the change of high-frequency loss over the total loss decays with the separated frequency with a certain power, which is determined by the regularity assumption.

A key aspect of the proof is that composite functions maintain a certain regularity, causing decay in the frequency domain. Thus this result can be applied to general network structures with multiple layers.

While this characterization of the F-Principle is very general, it is too coarse-grained to differentiate the effects of network structure or special properties of DNNs. It provides only a qualitative understanding rather than quantitatively characterizing differences.

There is a continuous framework [[6]](#ref6) to study machine learning and suggest gradient flows of neural networks are nice flows and obey the F-Principle. This is because they are [integral equations](https://en.wikipedia.org/wiki/Integral_equation) which have higher regularity. The increased regularity of integral equations leads to faster decay in the Fourier domain.

---

## Applications

### Algorithms Designed to Overcome the Challenge of High-Frequency

**Phase shift DNN (PhaseDNN):** converts high-frequency component of the data downward to a low-frequency spectrum for learning, and then converts the learned one back to the original high frequency [[7]](#ref7).

**Adaptive activation functions:** replace the activation function $\sigma(x)$ by $\sigma(\mu a x)$, where $\mu \geq 1$ is a fixed scale factor and $a$ is a trainable variable shared for all neurons [[8]](#ref8).

![undefined](https://cdn.jsdelivr.net/gh/ZhiweiBai/images_for_typora@main/MscaleDNN.png)

Fig 3: Illustration of two MscaleDNN structures.

**Multi-scale DNN (MscaleDNN):** alleviates the high-frequency difficulty for high-dimensional problems.
The conversion in the frequency space can be done by scaling, which is equivalent to an inverse scaling in the spatial space [[9]](#ref9).

Formally, a MscaleDNN takes the following form:

$$
f(\mathbf{x};\theta) = W^{[L-1]} \, \sigma \circ (\cdots (W^{[1]} \, \sigma \circ (K \odot (W^{[0]} \mathbf{x}) + b^{[0]}) + b^{[1]}) \cdots ) + b^{[L-1]},
$$

where $\mathbf{x}\in \mathbb{R}^d$,  $W^{[l]} \in \mathbb{R}^{m_{l+1} \times m_l}$,  $m_l$ is the neuron number of the $l$-th hidden layer with $m_0=d$,  $b^{[l]} \in \mathbb{R}^{m_{l+1}}$,  $\sigma$ is a scalar function,  $\odot$ is the Hadamard product,  and $K=(a_1,a_1,\dots,a_1,a_2,\dots,a_{N})^T \in \mathbb{R}^{m_1}$, where $a_i=i$ or $a_i=2^{i-1}$.

This structure is called **MscaleDNN-1**.

The second kind of MscaleDNN (MscaleDNN-2) is a sum of $N$ subnetworks, where each scale input goes through a subnetwork. Weight matrices from $W^{[1]}$ to $W^{[L-1]}$ are block diagonal.

---

**Fourier feature network:** maps input $\mathbf{x}$ to

$$
\gamma(\mathbf{x}) = [a_1 \cos(2\pi b_1^T x), \dots, a_m \cos(2\pi b_m^T x)],
$$

for imaging reconstruction tasks [[10]](#ref10).
This idea is extended for PDE problems [[11]](#ref11), and successfully applied to neural radiance fields (NeRF) for view synthesis [[12]](#ref12).

**Multi-stage neural networks (MSNN):** use a superposition of DNNs, where sequential neural networks are optimized to fit the residuals from previous neural networks, boosting approximation accuracy. MSNNs address spectral bias and achieve accuracy close to machine precision [[13]](#ref13).

---

### Frequency Perspective for Understanding Experimental Phenomena

- **Compression phase:** The F-Principle explains the compression phase in the information plane [[14]](#ref14).
- **Increasing complexity:** Explains the increasing complexity oDNN output during training.
- **Strength and limitation:** DNNs are good at learning low-frequency functions but struggle with high-frequency ones.
- **Early stopping trick:** Since noise is often dominated by high-frequency components, early stopping helps avoid learning noise.

---

## References

<a id="ref1">[1]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Xiao, Yanyang. *Training Behavior of Deep Neural Network in Frequency Domain*. Neural Information Processing. Springer, 2019.

<a id="ref2">[2]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Luo, Tao; Xiao, Yanyang; Ma, Zheng. *Frequency Principle: Fourier Analysis Sheds Light on Deep Neural Networks*. Communications in Computational Physics, 2020.

<a id="ref3">[3]</a> Rahaman, Nasim; Baratin, Aristide; Arpit, Devansh; et al. *On the Spectral Bias of Neural Networks*. ICML, 2019. [Link](https://proceedings.mlr.press/v97/rahaman19a.html)

<a id="ref4">[4]</a> Xu, Zhi-Qin John; Zhang, Yaoyu; Luo, Tao. *Overview frequency principle/spectral bias in deep learning*. arXiv:2201.07395, 2022.

<a id="ref5">[5]</a> Luo, Tao; Ma, Zheng; Xu, Zhi-Qin John; Zhang, Yaoyu. *Theory of the Frequency Principle for General Deep Neural Networks*. CSIAM Trans. Appl. Math., 2021.

<a id="ref6">[6]</a> E, Weinan; Ma, Chao; Wu, Lei. *Machine learning from a continuous viewpoint, I*. Science China Mathematics, 2020.

<a id="ref7">[7]</a> Cai, Wei; Li, Xiaoguang; Liu, Lizuo. *A Phase Shift Deep Neural Network for High Frequency Approximation and Wave Problems*. SIAM J. Sci. Comput., 2020.

<a id="ref8">[8]</a> Jagtap, Ameya D.; Kawaguchi, Kenji; Karniadakis, George Em. *Adaptive activation functions accelerate convergence in deep and physics-informed neural networks*. J. Comput. Phys., 2020.

<a id="ref9">[9]</a> Liu, Ziqi; Cai, Wei; Xu, Zhi-Qin John. *Multi-Scale Deep Neural Network (MscaleDNN) for Solving Poisson-Boltzmann Equation in Complex Domains*. Communications in Computational Physics, 2020.

<a id="ref10">[10]</a> Tancik, Matthew; Srinivasan, Pratul P.; et al. *Fourier Features Let Networks Learn High Frequency Functions in Low Dimensional Domains*. arXiv:2006.10739, 2020.

<a id="ref11">[11]</a> Wang, Sifan; Wang, Hanwen; Perdikaris, Paris. *On the eigenvector bias of Fourier feature networks*. Comput. Methods Appl. Mech. Eng., 2021.

<a id="ref12">[12]</a> Mildenhall, Ben; Srinivasan, Pratul P.; et al. *NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis*. arXiv:2003.08934, 2020.

<a id="ref13">[13]</a> Wang, Yongji; Lai, Ching-Yao. *Multi-stage neural networks: Function approximator of machine precision*. J. Comput. Phys., 2024.

<a id="ref14">[14]</a> Shwartz-Ziv, Ravid; Tishby, Naftali. *Opening the Black Box of Deep Neural Networks via Information*. arXiv:1703.00810, 2017.
