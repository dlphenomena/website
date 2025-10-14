Multi-scale DNN (MscaleDNN) scales high frequencies to lower ones. MscaleDNN-1 takes:

$$
f(\mathbf{x};\theta) = W^{[L-1]} \, \sigma \circ (\cdots (W^{[1]} \, \sigma \circ (K \odot (W^{[0]} \mathbf{x}) + b^{[0]}) + b^{[1]}) \cdots ) + b^{[L-1]},
$$

where $W^{[l]} \in \mathbb{R}^{m_{l+1} \times m_l}$, $\odot$ is elementwise product, $K=(a_1,a_1,\dots,a_1,a_2,\dots,a_{N})^T \in \mathbb{R}^{m_1}$, $a_i=i$ or $2^{i-1}$.

![mscalednn](https://ins.sjtu.edu.cn/people/xuzhiqin/pub/mscalednn.png "illustration")
