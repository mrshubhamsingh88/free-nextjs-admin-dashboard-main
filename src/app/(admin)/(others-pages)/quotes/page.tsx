"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const messages = [
    { id: 1, title: "Focus Time🚨❤️", text: "I need your 30 mins full focus here miss beautiful ❤" },
    { id: 2, title: "Sweet Greeting❣️", text: "Hye ❣ cutie pie 😍" },

    { id: 3, title: "Super Admin Mode🦸‍♂️", text: "I am your super admin 🦸‍♂️" },

    { id: 4, title: "Making You Smile😊", text: "I am here to make you smile 😊" },

    { id: 5, title: "You Matter🌟", text: "I am here to make you feel important 🌟" },
    {
        id: 6,
        title: "A Special Reminder🚀💫",
        text: "All lines are based on feelings. If anything hurts you or feels wrong, please let me know. I'm sorry in advance and will review them three times. If something still bothers you, please tell me."
    },

    { id: 7, title: "A Special Surprise🎁", text: "Are you ready to see some special things for you..." },
    { id: 8, title: "Hurts", text: "You said that knowing everything also hurts, now I have told you everything, now what you think same that knowing everything still hurts..?" },
    { id: 9, title: "A Unique Feeling💖✨", text: "Ahh hye my dear cute (❤️) panda ahh ok so i tell you something know what I'm very frank boy 😉 ahhh open minded ahh moo fat or bhot jada masti chill krni wala 😉❤😄😄tum jaan the ho mujhe how I'm my nature ahhh sometime im very baby type ahh masti Krna or naughty sides.... Ahhh so i wanna tell you something about me ahh ok so as know we in the corporate job so humra school life college coaching or then some social medias we have a lot friends not real one but some like temporary ahh normal freinds ah girl boys both... You also have some friends in your college life or school life ahhh i know ki feelings ati hai or a jati hai but hum bol the nhi yee nhi ki girl dekhi so we like or boy dekha tho we like or hum osko bolre haii no never ok have some feelings or yes it's a normal...Ahh so my point is ahh sometimes our feelings our vibes our excitement lavel or ek sparkle 💖 ✨ always kise unique person sy hi match hota hai ahh spark ✨💖 ahhh.. but here my vibe my extiment ahh ek vo hota haian ki morning mai ready hona to see you to meet you the extiment ahh 🥺💖ahhh mai mare dost the not real one but yes like in the college life school or girl bhi the but ahh i never said this to anyone jo apko kh 💖🥺✨ahh esa nhi ki bas apsy dosti hoi or mani bol diya noo no naver ahh yes i know your my good friend you also same feeling but we don't know kb kya ho jaiye ✨🥺  ahhh m chthe apni feelings nhi share kr the🦋🤌 you know mai kitna jada zidi hu 🤌💖🥺ahh mai nhi kr the but here was i feel like ahh yes your the one who make me excited where my vibe perfect matched or yes here I can trust on this person or ahh yes this is the one who handle me like 💗 baby 🐥 ahh miss perfect one jhaa mujhe kuch nhi chiye bas dena hai ...🤌💖🥺I don't know you feel or not same you feel that's one single thing or not 🤌aahh mai nhi bol the tumhi kabhi nhi bol the sab khud ki pass rakh leta but I take risk because of i hate the guilty ahh agar kabhi i lose you so i hate myself ki ek bar try Krna the 🤌🥺💖ahh which i tell you that's unique i only tell you in the life or ahh it's unique feeling ❤ for only for unique person 💖🦋🤌I don't know about you... But hain mai jo kr the hu mani apko bta diya ahhh yes only who make mee feel comfortable more then everyone everything where i feel happy ahhh i never never wanna lose you never ahh 🤌🤌🦋💖.....abe control kr the hu yha for the future..😉😉🤌" },

    { id: 10, title: "Can I Handle You?🤔💖", text: "Can I handle you?? Yes, I will handle you 😀\n\nIf you don’t know, let me tell you 💖🦋🤌\n\nYes, I will handle you ❣ Like a queen 👑\n\nI will handle you in every situation ❣ 🥺❤🤌 Trust me... I will 🤌🤞" },

    { id: 11, title: "You Mean So Much to Me❤️", text: "You know something about me? Ahh, mai kabhi kise ki liye itna excited nhi hua ahhh... I am a very careless person, bhot jada, itna ki mai khud ka bhi Dhiyan nhi kr the hu. But I take care of you 🤞🤌❤🥺.\n\nI don’t know about the future, but I always want to protect you like my ❤🤞..." },

    { id: 12, title: "Am I Your Type?😉💘", text: "Ahh 🤌❣ I never ask about your type 😉 ❤\n\nAhhh, that’s my question?? 😉🫣\n\nWhat do you think? Am I your type or not? How do I look according to you? 😉💕❣🫣\n\nPlease be honest..." },

    { id: 13, title: "A Heartfelt Promise💖🌈", text: "I promise... 💖\n\nI am going to like you when you are happy 😃, when you're sad 😢, when you're angry 😠 or mad 😤, when you're excited 🤩 or scared 😨, when you're strong 💪 or feel weak 😞, when you're confident 😎 or full of doubt 🤔, when you're quiet 🤫 or loud 🗣️, and when you're at your best 🌟 or worst 🌧️.\n\nThrough every mood 🌈, moment ⏳, and season 🍂❄️🌷☀️, my feeling for you will remain constant ❤️." },

    { id: 14, title: "To the One Who Makes Life Beautiful✨💖", text: "✨💖\n\nYou're not just my favorite person 💕—you're my safe place 🏡, my joy 😄, and the one who holds my heart ❤️.\n\nWith you, everything feels lighter 🌈. The laughs 😂 are louder, the days ☀️ are warmer, and even the simplest moments 🕰️ feel extraordinary ✨.\n\nYou bring calm 🕊️ to my chaos, 💞 to my ordinary, and light 🌟 to every part of my world. Thank you 🙏 for making life feel complete 🏡, meaningful 💫, and bright ☀️." },

    { id: 15, title: "Always Here for You💙✨", text: "💙✨\n\nHaving a bad day? ☁️ Call me 📞.\nFeeling low? 😞 Text me 💬.\nSomeone hurt you? 💔 Pour your heart out.. 📝\nI'm all ears 👂. You don't have to face it alone 🤝.\n\nIt’s unfair to share your laughter 😂 with me but carry your pain alone 😢.\nI’m here for both 💖. Always. 💞\n\nAnd if it all gets too much 😵‍💫, we'll just run away 🏃‍♂️💨 and become pirates 🏴‍☠️! 🏝️⚓" },

    { id: 16, title: "I Need You💖✨", text: "💖✨\n\nI need your attention 👀, I need your presence in my life 🤝, I need your hugs 🤗, I need your ❤️.\n\nSometimes, I can’t say it 🫣, but please understand 🥺. Sometimes, I feel alone 😞, I feel angry 😠, and if you act as if you don’t care 💔, I feel sad 😢.\n\nI can’t always tell you how I feel or what I’m going through 😶. Not because I don’t trust you 🤐, but because I feel like asking for your attention all the time will make you think I’m needy… But yes, I am needy 🫂.\n\nWhen the whole world fails to understand me 🌍💔, I only hope that you hug me 🤗, give me your time ⏳, ❤️, and care 💕.\n\nYou are my only comfort 🏡. Please, don’t be irritated if I’m always disturbing you 😔. Just understand me… because you are my everything 🥰.\n\nPlease, never give up on me. 🤞💖" }
    { id: 17, title: "A Letter To My Bestfriend 💌 I really value our friendship 💖. Out of everyone, you have believed in me the most 🌟 and have always encouraged me to be the best version of myself 💪✨. I appreciate how you have never let me down 🙏 and you are always there for me 🤗. Thank you for loving me despite all my flaws 🥹❤️. I don't know how I ended up with such a lovely friend as you 🥰, but I am so grateful to have you in my life 🌈💫." },
    { id: 18, title: "To My Special Person.. Some bonds are beyond explanations, beyond words, beyond the ordinary definitions of love and friendship. Tum meri zindagi ke woh haseen lamhe ho jo sirf yaadon mein nahi, meri har saans mein base hain. Tumse judi har baat, har hasi, har unsuni baat... sab kuchh mere dil ke kisi gehre kone mein hamesha zinda rahti hai. कभी-कभी कोई अपना इतना अपना लगता है, कि उसकी गैरमौजूदगी भी पास होने का एहसास दिलाती है। Tum meri zindagi ka woh hissa ho jo sirf waqt ke saath nahi badalta, balki har din aur gehra hota chala jata hai. Tum meri har khushi ka sabab ho, meri har udaasi ka sahara ho. Agar kabhi duniya mujhe samajhne mein nakam ho jaaye, toh bhi mujhe pata hai... ek insaan hai jo bina kahe sab kuchh samajh lega. Yeh rishta kisi shabd ka mohtaaj nahi hai, kisi paribhasha mein bandh nahi sakta... bas ek mehsoos hai jo dil ke har dhaadkan ke saath jeeta hai. Tum mere liye sirf ek naam, ek shaks nahi... ek poori kahani ho, jo meri rooh tak utar chuki hai. Meri har dua mein tum ho, meri har kahani mein tum ho. Jo bhi ho, jahan bhi ho... bas itna yaad rakhna-tum meri duniya ka sabse khoobsurat hissa ho..!!" }
];

const stickyNotes = [
    { id: 1, text: "You are amazing! 💖✨", color: "bg-yellow-300" },
    { id: 2, text: "Believe in yourself! 🌟💪", color: "bg-pink-300" },
    { id: 3, text: "Keep shining! ✨🌞", color: "bg-blue-300" },
    { id: 4, text: "You deserve all the happiness! 😊💛", color: "bg-green-300" },
    { id: 5, text: "You are the missing piece of my puzzle 🧩, and now my world feels complete. ❤️", color: "bg-purple-300" },
    { id: 6, text: "Every day with you is a beautiful adventure 🚀, and I'm so grateful to have you by my side. 🥰", color: "bg-red-300" },
    { id: 7, text: "Your like is the sunshine 🌞 that brightens my world and the rain ☔ that soothes my soul. 💖", color: "bg-orange-300" },
    { id: 8, text: "You are my everything 💖, my reason to smile 😊, and the panda of my life. ❤️", color: "bg-teal-300" },
    { id: 9, text: "Being with you is like a dream ✨, and I never want to wake up. 💭❤️", color: "bg-indigo-300" },
    { id: 10, text: "I like the way you make me feel❤️, the way you make me laugh 😂, and the way you make me fall in ❤️ with you every day. 😍💞", color: "bg-cyan-300" },
    { id: 11, text: "Your kindness, your strength, and your beauty make me fall in ❤️ with you every single day. 💕💪", color: "bg-yellow-400" },
    { id: 12, text: "I can't wait to see what the future holds for us, hand in hand. 🤝", color: "bg-pink-400" },
    { id: 13, text: "As your super admin 🦸‍♂️, I always ask for permission before doing something.. because I respect you and consider your decisions. I will always be the best man ever. 💪👑", color: "bg-blue-400" },
    { id: 14, text: "Please don't be afraid to talk about your problems 😔💬, you won't overshare or annoy me. I will always be there for you. ❤️🤗", color: "bg-green-400" },
    { id: 15, text: "To be honest 🤞: You are more than my favorite person 🥰. You're different from everyone else. You will always have a special place in *my heart*... 💖💖", color: "bg-purple-400" },
    { id: 16, text: "I'll do my every possible effort to make you smile. 😊💛", color: "bg-red-400" },
    { id: 17, text: "I know sometimes I irritate you 🙄, sometimes I hurt you 💔, sometimes I overreact 🤦‍♂️. But that's all because I always feel comfortable with you and safe. 💕", color: "bg-orange-400" },
    { id: 18, text: "I may not tell you this every day 🗓️, but I am really thankful to have you and never wanna lose this bond. 💝", color: "bg-teal-400" },
    { id: 19, text: "*I don't wanna be* your everything. I just want to be your something that cannot *be replaced by anything*. 💞🔗", color: "bg-indigo-400" },
    { id: 20, text: "I'm ready to say sorry a thousand times 😞💔 because I don't want to lose you. 🥺", color: "bg-cyan-400" },
    { id: 21, text: "अगर मेरे लिए कुछ करना है तो अपना ख्याल रखना 🥹💗", color: "bg-yellow-500" },
    { id: 22, text: "Someone: You like her? \nMe: More than my ego. 💖 \nSomeone: You trust her? \nMe: More than my assumptions. 🤞 \nSomeone: You care for her? \nMe: More than my pride. ❤️ \nSomeone: So, you love her? \nMe: More than my life. 🥺💞", color: "bg-pink-500" },
    { id: 23, text: "I'm sorry 😞. \n\nSometimes I feel jealous, thinking someone else might make you happier than I can. I guess it's just my insecurities... 💔", color: "bg-blue-500" },
    { id: 24, text: "I promise to be your biggest cheerleader 📣 and your strongest support. When life gets heavy, lean on me. When life gets beautiful, share it with me. I'm here, always. 🤝💙", color: "bg-green-500" },
    { id: 25, text: "When everything feels heavy 🏋️, don't carry it alone. Come to me, you're safe here. 🤗💖", color: "bg-purple-500" },
    { id: 26, text: "हाल ऐसा है मेरा कि तेरे ही गले लग कर, तेरी ही शिकायत करनी है तुझसे. 🤗💔", color: "bg-red-500" },
    { id: 27, text: "You think I don't care about you?\n\n 😢 I literally cry when I feel like I've upset you, because I'm really afraid of losing you. 💔😭", color: "bg-orange-500" },
    { id: 28, text: "Give me a cute nickname that only you can call me. 🤭🥰", color: "bg-teal-500" },
    { id: 29, text: "In English they say: 'You are special' ✨ But in poetry we say: 'You are the only moon 🌙 in my sky amongst the constellation of stars ✨.'", color: "bg-indigo-500" },
    { id: 30, text: "What's a real bond? A person with whom you can disagree and fight with on every topic, but still be close to the very next moment—that's what a real bond is all about. 🔗❤️", color: "bg-cyan-500" },
    { id: 31, text: "I never compare you with others, because I know you're one in a million. 💎💖", color: "bg-yellow-600" },
    { id: 32, text: "Princess 👑, I just need more and more time to spend with you. 💕", color: "bg-pink-600" },
    { id: 33, text: "Ahh, let's see when you send me your photos without me asking. 📸😉", color: "bg-blue-600" },
    { id: 34, text: "I miss your voice. 🥺💞", color: "bg-green-600" },
    { id: 35, text: "I have the best girl in the world 💖 with the cutest smile 😊, silliest laugh 🤭, prettiest eyes 👀, and the most adorable personality. 💕", color: "bg-purple-600" },
    { id: 36, text: "I don't know what you did to me, but I got so addicted to you. 😍", color: "bg-red-600" },
    { id: 37, text: "I want nothing from you, just one smile on your face is enough to make my day. 😊💖", color: "bg-orange-600" },
    { id: 38, text: "Always for you -- Disturb me, text me, update me, tell me how your day was. i will listen to every single detail about your life and never get tired. 😊💖", color: "bg-orange-600" },
    { id: 39, text: "Thank you princess to give me your time..😊💖", color: "bg-pink-600" }
];

export default function LoveQuotes() {
    const [index, setIndex] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [showMessages, setShowMessages] = useState(true);
    const [showCountdown, setShowCountdown] = useState(false);
    const [count, setCount] = useState(3);
    const [showNotes, setShowNotes] = useState(false);
    const [liked, setLiked] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 200, height: 100 });
    const [reply, setReply] = useState("");
    const [starPositions, setStarPositions] = useState([]);
    const noteRef = useRef(null);

    useEffect(() => {
        if (noteRef.current) {
            const { width, height } = noteRef.current.getBoundingClientRect();
            setDimensions({ width: width + 40, height: height + 40 });
        }
    }, [index, showNotes]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const stars = Array.from({ length: 50 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
        }));
        setStarPositions(stars);
    };

    useEffect(() => {
        if (noteRef.current) {
            const { width, height } = noteRef.current.getBoundingClientRect();
            setDimensions({ width: width + 40, height: height + 40 });
        }
    }, [index, showNotes]);

    const handleNextMessage = () => {
        if (messageIndex < messages.length - 1) {
            setMessageIndex((prev) => prev + 1);
        } else {
            setShowMessages(false);
        }
    };
    const handlePreviousMessage = () => {
        if (messageIndex < messages.length - 1) {
            setMessageIndex((prev) => prev - 1);
        } else {
            setShowMessages(false);
        }
    };

    const startCountdown = () => {
        setShowCountdown(true);
        setCount(3);
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    setShowCountdown(false);
                    setShowNotes(true);
                }
                return prev - 1;
            });
        }, 1000);
    };
    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([reply], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "reply.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        stickyNotes
        // Clear the textarea after download
        setReply("");
    };
    const handleNext = () => setIndex((prev) => (prev + 1) % stickyNotes.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + stickyNotes.length) % stickyNotes.length);
    const handleLike = () => {
        setLiked(true);
        setTimeout(() => setLiked(false), 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
            {liked && <Confetti numberOfPieces={200} gravity={0.3} recycle={false} />}
            {/* Starry Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {starPositions.map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{ left: star.x, top: star.y }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                ))}
            </div>

            {/* Step-by-step Messages Before Countdown */}
            {showMessages && (
                <motion.div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl font-semibold text-purple-600"
                    >
                        {messages[messageIndex].title}
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg font-medium mt-2"
                    >
                        {messages[messageIndex].text}
                    </motion.h1>
                </motion.div>
            )}
            {showMessages && (
                <div className="mt-8 flex gap-6">
                    <motion.button
                        className="px-5 py-3 bg-red-500 rounded-xl shadow-lg text-white hover:bg-red-700 text-lg" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        onClick={handlePreviousMessage}
                    >
                        Previous
                    </motion.button>
                    <motion.button
                        className="px-5 py-3 bg-green-500 rounded-xl shadow-lg text-white hover:bg-green-700 text-lg" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        onClick={handleNextMessage}
                    >
                        Next
                    </motion.button>
                </div>
            )}
            {/* Initial Start Screen */}
            {!showMessages && !showCountdown && !showNotes && (
                <motion.div className="text-center">
                    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold">
                        Ready for a more surprise? ✨
                    </motion.h1>
                    <motion.button
                        onClick={startCountdown}
                        className="mt-6 px-8 py-4 bg-purple-500 text-white rounded-xl text-2xl hover:bg-purple-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Start
                    </motion.button>
                </motion.div>
            )}

            {/* Countdown Effect */}
            {showCountdown && (
                <motion.div
                    key={count}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl font-bold text-white"
                >
                    {count}
                </motion.div>
            )}

            {/* Sticky Notes Section */}
            <AnimatePresence mode="wait">
                {showNotes && stickyNotes[index] && (
                    <motion.div className="relative flex items-center justify-center" style={{ width: dimensions.width, height: dimensions.height }}>
                        <motion.div
                            key={stickyNotes[index].id}
                            className={`absolute p-8 rounded-2xl text-center flex items-center justify-center text-black cursor-pointer shadow-xl ${stickyNotes[index]?.color}`}
                            style={{ fontFamily: "'Indie Flower', cursive", fontSize: "24px", maxWidth: "400px" }}
                            ref={noteRef}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                        >
                            {stickyNotes[index]?.text}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls */}
            {showNotes && (
                <div className="mt-8 flex gap-6">
                    <motion.button className="px-5 py-3 bg-red-500 rounded-xl shadow-lg text-white hover:bg-red-700 text-lg" onClick={handlePrev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        ⬅️ Previous
                    </motion.button>
                    <motion.button className="px-5 py-3 bg-blue-500 rounded-xl shadow-lg text-white hover:bg-blue-700 text-lg" onClick={handleLike} whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                        ❤️ Like
                    </motion.button>
                    <motion.button className="px-5 py-3 bg-green-500 rounded-xl shadow-lg text-white hover:bg-green-700 text-lg" onClick={handleNext} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        Next ➡️
                    </motion.button>
                </div>
            )}
            {/* Reply Textarea (Only for messages 10, 11, 12, and 13) - Hide after last message */}
            {[8, 12].includes(messages[messageIndex]?.id) && messageIndex < messages.length - 1 && (
                <>
                    <textarea
                        className="mt-6 w-80 h-32 p-3 text-black bg-white rounded-lg"
                        placeholder="Write your reply here..."
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                    />
                    <motion.button
                        onClick={() => {
                            handleDownload();
                            setReply(""); // Clear the textarea after download
                        }}
                        className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg text-sm hover:bg-green-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Download Reply 📥
                    </motion.button>
                </>
            )}


        </div>
    );
}
