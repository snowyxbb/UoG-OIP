---
title: "Introduction to Problem Statement"
meta_title: "Introduction to Problem Statement"
description: "Information on the topic."
date: 2025-07-22T12:10:00Z
categories: ["Project Journey"]
author: "Ryan Oh"
tags: ["Introduction to Problem Statement", "solution"]
draft: false
---


## 🌍 Active Travel CO₂ Offset Tracker
A GALLANT Community Collaboration Project

## 🗂️ About the Project
This project is part of the University of Glasgow’s GALLANT (Glasgow as a Living Lab Accelerating Novel Transformation) initiative, designed to explore innovative climate adaptation strategies through community collaboration.

This project focuses on active travel — walking, cycling, and wheeling — and how it helps reduce carbon emissions. It uses the communiMap platform to log user-submitted movement data across Glasgow. While active travel supports a more sustainable city, there’s currently no easy way for individuals or communities to see the impact of their travel choices. This project explores how we might track and communicate CO₂ savings from active journeys in a way that motivates long-term behaviour change.

While active travel supports a more sustainable city, there’s currently no easy way for individuals or communities to see the impact of their travel choices. This project explores how we might track and communicate CO₂ savings from active journeys in a way that motivates long-term behaviour change by offering meaningful incentives

---

## ❓ Problem Statement
Although many people walk, cycle, or use personal mobility devices, there is no straightforward system that shows users how much carbon they’ve saved compared to taking motorized transport.

* How can we calculate CO₂ savings using travel data?

* How do we motivate users to make more sustainable choices?

* Can gamified systems encourage habitual behaviour change?

* What are the existing data that can be exported and how can they be utilized?

---

## 🗓️ Week 1: Understanding the Problem & Partner Expectations
We began with a meeting with Ms. Sarah Gambell from GALLANT to clarify the scope and constraints of the project. We learned that our work focuses on enhancing communiMap, not building a new app.

🔍 Key Insights
communiMap allows users to upload location-based content and photos.

However, the app doesn't contain existing route data needed to calculate CO₂ savings.

This meant we had to pivot our approach — we began exploring how to work on top of the existing app by identifying relevant data points such as distance travelled, time taken, and mode of transport to enable meaningful CO₂ savings calculations.

Currently, gamification within communiMap is minimal, limited to simple badge rewards. However, there is clear interest in expanding this with more engaging features such as leaderboards and public-facing incentives. In particular, public recognition for organizations—for example, highlighting top CO₂ savers—has been identified as a strong motivator that could encourage wider participation and commitment to active travel.

---

## ⚙️ Technical Challenges and Strategic Decisions 
### 🚫 The Barrier: 

No CO₂ related data means we cannot directly plug in a CO₂ calculator. 

### 🛠️ Our Considered Approaches: 

- **Machine Learning**: Train a model to infer route paths from limited data.   

- **Collaboration with Developers**: Seek backend access to raw GPS routes.   

- **Plugin Approach**: Rejected due to potential security, UX, and performance concerns. 


We ultimately chose to **build an external carbon emissions calculator**, ensuring scalability and independence from the communiMap backend. 

---

## 🎯 Behavioral Design Meets Environmental Action 

We based our solution on two key behavioral psychology frameworks: 


- **Self-Determination Theory (SDT)** 

  - **Autonomy**: Let users choose transport methods and control their impact. 

  - **Competence**: Offer points, badges, and feedback to show progression. 

  - **Relatedness**: Introduce guilds to foster teamwork and shared goals. 

  
- **Octalysis Framework by Yu-kai Chou** 

  - Focused on **core drives** like accomplishment, social influence, and empowerment. 

  
> 💡 Our goal wasn’t just to build a feature — it was to **shape behavior** through clear, meaningful feedback and social motivation. 



---

## 🎬 Week 1 Pitch

{{< video src="videos/week1.mp4" width="100%" height="auto" autoplay="false" loop="false" muted="false" controls="true" class="rounded-lg" >}}





