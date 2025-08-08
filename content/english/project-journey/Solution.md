---
title: "Solution"
meta_title: "Solution"
description: "How CO2 calculation and gamification methods are derived"
date: 2025-08-04T12:05:00Z
categories: ["Project Journey"]
author: "Ryan Oh"
tags: ["solution", "co2"]
draft: false
summary: "💨 Solution: integrating CO₂ emissions calculation and gamification to promote sustainable travel choices."
---

## Finalising Solution 

### 💨 CO₂ Emissions Calculation Process 

To promote awareness and encourage sustainable travel choices, we integrated a CO₂ emissions calculator into our system. The calculation methodology is grounded in lifecycle analysis, taking into account not only direct emissions but also upstream factors such as electricity production and vehicle manufacturing.

### 🚗 1. For Fuel-Based Vehicles
We calculate the per-person CO₂ emissions per mile using the following formula:

{{< notice "Emissions (g/person-mile) = (Emission Factor (g CO2e/vehicle-km) / Average Occupancy (persons/vehicle)) * 1.60934 (km/mile)" >}}
{{< /notice >}}

* Emission Factor: Based on vehicle type (e.g. petrol car, diesel bus, etc.)

* Occupancy: Average number of people per vehicle (e.g. 1.5 for cars, 20 for buses)

### 🔋 2. For EV (Electric Vehicles)

{{< notice "Emissions (g/person-mile) = ((Production of electricity generated based on carbon emission + amount of carbon footprint created from manufacturing the EV) / Average Occupancy (persons/vehicle)) * 1.60934 (km/mile)" >}}
{{< /notice >}}

* Electricity Generation Emissions: Based on country-specific grid carbon intensity (g CO₂e/kWh)

* Manufacturing Emissions: Accounts for lifecycle emissions from battery and vehicle production

* Occupancy: Same concept as above

We also illustrate this with a visual showing the estimated lifecycle CO₂ emissions (g/mile) across different modes of transport — from walking and cycling to buses, cars, and trains — to provide users with contextual awareness of their environmental impact.

{{< image src="images/co2_range.jpg" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

--- 

### 🏆 Leaderboard Gamification Strategy
To turn sustainable travel into a habit, we implemented a leaderboard system as part of our gamification strategy. This approach was chosen to motivate behavior change through engagement, competition, and rewards.

#### Why a Leaderboard?
* 🎯 Friendly Competition:
Encourages users to outdo each other in CO₂ savings, making climate action fun and interactive.

* 📢 Public Recognition:
Top contributors get username shoutouts on the app, fostering a sense of pride and accomplishment.

* ⏳ Seasonal Challenges:
The system is divided into seasons, refreshing the leaderboard periodically to give everyone a chance to climb the ranks and to avoid long-term stagnation.

* 💡 Continued Engagement:
By resetting scores and introducing challenges (e.g., "Cycle today", "Run with friends"), users are incentivized to return and participate over time.

This gamified approach leverages psychology-backed methods like progress tracking, peer comparison, and recognition — transforming climate-friendly travel into a rewarding experience.

---

## 🖼️ Poster

{{< image src="images/poster.jpg" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}
