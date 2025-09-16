# 🌍 Disaster Management System (DMS)  

A **web-based platform** to improve awareness, preparedness, and response during disasters.  

---

## 🚀 Key Features
- 📞 **Verified Emergency Contacts** – National & local helplines (112, 108, 101, etc.)  
- 🛡️ **Safety Measures** – Step-by-step guidelines for floods, earthquakes, cyclones, fire  
- 🏛️ **Agency Awareness** – Details of NDMA, NDRF, NIDM, SDMA, OSDMA  
- 💬 **Interactive Chatbot** – WhatsApp-style bubbles, disaster FAQs, safety tips  
- 📰 **Real-time Updates** – Extendable to show disaster news & alerts  
- 📝 **Query Form** – Store user queries securely in MySQL DB  

---

## ⚙️ Tech Stack
- **Frontend:** HTML5, CSS3, Bootstrap, JavaScript  
- **Backend:** PHP, MySQL  
- **Extras:** Python (for disaster news fetching)  

---

## 📂 Project Structure
DMS/
│-- DMS.html          # Main website
│-- style.css         # Styling
│-- chatbot.js        # Chatbot logic
│-- connect.php       # Database connection
│-- fetch_disaster_news.py  # News fetcher script
│-- /images           # Project images

---

## 🛠️ How to Run
1. Place project in **htdocs** (XAMPP) or run with:  
   ```bash
   php -S localhost:8000
Set up MySQL DB:

2.sql
Copy code
CREATE TABLE query (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  mobile VARCHAR(20),
  email VARCHAR(100),
  query TEXT
);
3.Update connect.php with DB credentials

4.Open in browser:
http://localhost/DMS/DMS.html

5.(Optional) Run Python script:
python fetch_disaster_news.py

## Clone the repository
git clone https://github.com/TahreenKhanam7/Disaster-Management-System.git
cd Disaster-Management-System

## Future Enhancements

🌍 Location-based nearest hospital/police finder
📦 Emergency kit checklist generator
🌐 Multi-language support
🔔 Push alerts for critical warnings
