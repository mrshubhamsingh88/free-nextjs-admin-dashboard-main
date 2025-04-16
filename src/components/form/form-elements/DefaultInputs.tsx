"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { ChevronDownIcon } from "../../../icons";

// Define the options for each question
const options = [
  { value: "No", label: "No" },
  { value: "No Naver", label: "No Naver" },
  { value: "Yes", label: "Yes" },
  { value: "May be", label: "May be" },
  { value: "Dont know", label: "Dont know" },
  { value: "Not sure", label: "Not sure" },
];

const options1 = [
  { value: "No", label: "No" },
  { value: "Yes", label: "Yes" },
  { value: "Yes Always", label: "Yes Always" },
  { value: "May be", label: "May be" },
  { value: "Not sure", label: "Not sure" },
  { value: "Thoda", label: "Thoda" },
  { value: "Unlimited", label: "Unlimited" },
];

const options2 = options; // Just an example
const options3 = options1; // Another example
const options4 = options;
const options5 = options1;
const options6 = options;
const options7 = options1;
const options8 = options;
const options9 = options1;
const options10 = options;
const options11 = options1;
const options12 = options;
const options13 = options1;
const options14 = options1;

export default function DefaultInputs() {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    rating2: "",
    feedback: "",
    message: "",
    missing: "",
    favourite: "",
    secret: "",
    describe: "",
    youwant: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save form data as JSON
  const saveToJson = () => {
    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === "") {
        alert("Please fill all fields!");
        return;
      }
    }

    const json = JSON.stringify(formData, null, 2);

    // Create a Blob from the JSON string
    const blob = new Blob([json], { type: "application/json" });

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "formData.json"; // File name
    link.click();

    // Show success message
    setSuccessMessage("Form submitted successfully! ✅");
  };

  return (
    <ComponentCard title="Please give the answer honestly 😊">
      <div className="space-y-6">
        {/* Question 1 */}
        <div>
          <Label>You ever want to lose me..(Not only here always) 😔</Label>
          <Select
            options={options}
            value={formData.question1}
            onChange={(value) => handleSelectChange("question1", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 2 */}
        <div>
          <Label>You happy with me.. 😊</Label>
          <Select
            options={options1}
            value={formData.question2}
            onChange={(value) => handleSelectChange("question2", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 3 */}
        <div>
          <Label>I really lose something.. 😞</Label>
          <Select
            options={options2}
            value={formData.question3}
            onChange={(value) => handleSelectChange("question3", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 4 */}
        <div>
          <Label>You really feel I'm your bachha.. 🧸</Label>
          <Select
            options={options3}
            value={formData.question4}
            onChange={(value) => handleSelectChange("question4", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 5 */}
        <div>
          <Label>I want you.. i want you always stay with me... 💕</Label>
          <Select
            options={options4}
            value={formData.question5}
            onChange={(value) => handleSelectChange("question5", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 6 */}
        <div>
          <Label>You feel secure with me.. 💪</Label>
          <Select
            options={options5}
            value={formData.question6}
            onChange={(value) => handleSelectChange("question6", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 7 */}
        <div>
          <Label>You like to spend time with me.. 🕒</Label>
          <Select
            options={options6}
            value={formData.question7}
            onChange={(value) => handleSelectChange("question7", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 8 */}
        <div>
          <Label>You like my way to treat you, care you.. 💖</Label>
          <Select
            options={options7}
            value={formData.question8}
            onChange={(value) => handleSelectChange("question8", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 9 */}
        <div>
          <Label>Kya mujhe mera panda waps mil skthe.. 🐼</Label>
          <Select
            options={options8}
            value={formData.question9}
            onChange={(value) => handleSelectChange("question9", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 10 */}
        <div>
          <Label>Your real feel that's you're my favorite person 😍</Label>
          <Select
            options={options9}
            value={formData.question10}
            onChange={(value) => handleSelectChange("question10", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 11 */}
        <div>
          <Label>Tumhe mera bacha banda pasand hai front of you 🧸</Label>
          <Select
            options={options10}
            value={formData.question11}
            onChange={(value) => handleSelectChange("question11", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 12 */}
        <div>
          <Label>Kya mare dreams puri hogi 🌟</Label>
          <Select
            options={options11}
            value={formData.question12}
            onChange={(value) => handleSelectChange("question12", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Question 13 */}
        <div>
          <Label>Kya kabhi hum mil paige outside of the offline 🌍</Label>
          <Select
            options={options12}
            value={formData.question13}
            onChange={(value) => handleSelectChange("question13", value)}
            placeholder="Select an option"
            required
          />
        </div>

        {/* Rating questions */}
        <div>
          <Label>Kya panda jaan the hai ki vo kitna jada important hai super admin ki liye 🐼</Label>
          <Select
            options={options14}
            value={formData.question14}
            onChange={(value) => handleSelectChange("question14", value)}
            placeholder="Select an option"
            required
          />
        </div>
        <div>
          <Label>Give the rating from 1 to 10 how much you know the super admin 👑</Label>
          <Input
            type="number"
            name="rating2"
            value={formData.rating2}
            onChange={handleInputChange}
            placeholder="1 to 10"
            required
          />
        </div>

        {/* Feedback and message */}
        <div>
          <Label>Any feedback for super admin ✨</Label>
          <Input
            type="text"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            placeholder="Your feedback"
            required
          />
        </div>
        <div>
          <Label>Some message for admin 💬</Label>
          <Input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            required
          />
        </div>

        {/* Missing field */}
        <div>
          <Label>If I miss anything please let me know..👩🏻‍💼</Label>
          <Input
            type="text"
            name="missing"
            value={formData.missing}
            onChange={handleInputChange}
            placeholder="Let me know"
            required
          />
        </div>

        {/* Missing field */}
        <div>
          <Label>I'm your favourite person🙋Member</Label>
          <Input
            type="text"
            name="favourite"
            value={formData.favourite}
            onChange={handleInputChange}
            placeholder="Let me know"
            required
          />
        </div>

        <div>
          <Label>One secret line you want to tell me💗🎀🌸</Label>
          <Input
            type="text"
            name="secret"
            value={formData.secret}
            onChange={handleInputChange}
            placeholder="Let me know"
            required
          />
        </div>

        <div>
          <Label>Describe our bond in one line🧸ྀི</Label>
          <Input
            type="text"
            name="describe"
            value={formData.describe}
            onChange={handleInputChange}
            placeholder="Let me know"
            required
          />
        </div>
        <div>
          <Label>One thing you want i will do🧸ྀི</Label>
          <Input
            type="text"
            name="youwant"
            value={formData.youwant}
            onChange={handleInputChange}
            placeholder="Let me know"
            required
          />
        </div>
        <div>
          <Label>Super admin ki koi bad habit you want to fix..🧸ྀི</Label>
          <Input
            type="text"
            name="superadminhabit"
            value={formData.superadminhabit}
            onChange={handleInputChange}
            placeholder="Let me know"
            required
          />
        </div>
        {/* Success message */}
        {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}

        {/* Save button */}
        <div className="mt-4">
          <button
            onClick={saveToJson}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save 📝
          </button>
        </div>
      </div>
    </ComponentCard>
  );
}