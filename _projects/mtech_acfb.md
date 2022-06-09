---
layout: page
title: Leaving mel behind
description: A new learnable feature extractor to replace mel filterbank
img:
importance: 4
category: work
---
Authors: **Debottam Dutta**; Purvi Agrawal; Sriram Ganapathy  
Affiliations: Learning and Extraction of Acoustic Patterns (LEAP) Lab, Indian Institute of Science, Bangalore and Microsoft India Development Center, Hyderabad, India

[[Paper]](/assets/pdf/multihead2021.pdf)[[Github]](https://github.com/debottam-dutta7/multiHead_relevanceWeight_audio/tree/master/ASC)


<div class="row">
    <div class="col-sm mt-3 mt-md-0 height=50%">
        {% include figure.html path="assets/img/website_final_multi-head_arch.drawio.png" title="multihead-mtech" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig1: A learnable Gaussian filterbank based multihead relevance weighting framework to learn time-frequency representations from audio.
</div>


### Abstract
 In this work, we propose a multi-head relevance weighting framework to learn audio representations from raw waveforms. The audio waveform, split into windows of short duration, are processed with a 1-D convolutional layer of cosine modulated Gaussian filters acting as a learnable filterbank. The key novelty of the proposed framework is the introduction of multi-head relevance on the learnt filterbank representations. Each head of the relevance network is modelled as a separate sub-network. These heads perform representation enhancement by generating weight masks for different parts of the time-frequency representation learnt by the parametric acoustic filterbank layer. The relevance weighted representations are fed to a neural classifier and the whole system is trained jointly for the audio classification objective. Experiments are performed on the DCASE2020 Task 1A challenge as well as the Urban Sound Classification (USC) tasks. In these experiments, the proposed approach yields relative improvements of 10% and 23% respectively for the DCASE2020 and USC datasets over the mel-spectrogram baseline. Also, the analysis of multi-head relevance weights provides insights on the learned representations. 

### Citation
```
@inproceedings{9632708,
  author = {Dutta, Debottam and Agrawal, Purvi and Ganapathy, Sriram},
  booktitle = {2021 IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)},
  title = {A Multi-Head Relevance Weighting Framework for Learning Raw Waveform Audio Representations},
  year = {2021},
  volume = {},
  number = {},
  pages = {191-195},
  doi = {10.1109/WASPAA52581.2021.9632708},
}
``` 



