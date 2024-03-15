import { useState } from "react";
import styles from "../styles/contact.module.css";
import { Facebook, Phone, Instagram } from "lucide-react";

const services = [
  "Botox",
  "Skin Boosters",
  "Dermapen",
  "Cold Peel",
  "Plasmage",
  "Fractional Laser",
  "Fillers",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, sending the data to an API
    console.log("Form submitted:", {
      name,
      email,
      phone,
      date,
      timeSlot,
      selectedService,
    });
    // Reset the form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTimeSlot("");
    setSelectedService("");
  };

  return (
    <div className={styles.contact}>
      <div className={styles.address}>
        <p className={styles.heading}>Where to Find Us</p>
        <p>
          Trivium Business Complex, near FUE, floors one through five Settlement
        </p>
        <a href="tel:01064022402" target="_blank" className={styles.phone}>
          <Phone className={styles.lucide} /> {"  "} 01064022402
        </a>
      </div>
      <div className={styles.formsection}>
        <p className={styles.specialHeading}>Reservation</p>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Time Slot:
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className={styles.select}
              required
            >
              <option value="">Select a time slot</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
            </select>
          </label>
          <label className={styles.label}>
            Select Service:
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className={styles.select}
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
