"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React, { useState } from "react";

export default function LetterPage() {
    const [reply, setReply] = useState("");
    const [showDownload, setShowDownload] = useState(false);

    const handleReply = () => {
        if (reply.trim() !== "") {
            alert(`Your reply has been recorded. You can now download it.`);
            setShowDownload(true);
        }
    };

    const downloadMessage = () => {
        const content = `${reply}`;

        const element = document.createElement("a");
        const file = new Blob([content], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "Panda_Letter.txt";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div>
            <PageBreadcrumb pageTitle="Clarification👉👈✨" />
            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[630px] text-left">
                    <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                        Hii 👋, Beautiful Panda 🐼✨
                    </h3>
                    {/* Full Message */}
                    <div className="mt-6 p-4 border rounded-lg bg-gray-100 dark:bg-black/50">
                        <pre className="whitespace-pre-wrap text-gray-800 dark:text-white/90 text-sm sm:text-base">
Ahhh ok so let's clear something... 
<br/><br/>
Ahh yes i tell you something which is unexpected for you 💗💗 ahh for me also too because mani kbhi nhi socha the esa kuch develop hoga because 1 day sy my intentions was clear ki yes your my good friend my favourite person or yes your the one jisko mujhe kabhi nhi khona..<br/><br/>December when ahhh vo moment ahhh ose pehle 2 months ki baat kr the haiii ahh yes we struggle we fight... Ahhh apni kuch decisions ase liye which hurt both.. ahhh then hum fir bhot hurt hoti the 🤞🤌ahh when we are not talking each one ahh our face like ahhh face pr dekh the hai 🤌😔vo pain from day one 😔😔ahh kuch bhi hota the or when we talk we both happy ahh like don't know jaise kya mil gya hoo 🤌💗🤞...
<br/><br/>
Ahhh 2 months ahhh ose pehle jb sholder pain hua ahh I'm anger on you because i feel bad mare sy nhi dekha jata the apka vo pain... Ahh then fever or fever bhi like jisni mare panda ko bhot week kiya 🥺🥺🤌💗but my Sharni is strong 🤌🥺👑💕🤗 because she is very strong... Ahhh vo 2 months like mai everyday wish kr th the for you 🥺🤌💗ahh daily ki bas thik ho jao bhot miss kr th the bhot jada ahhh daily apki voice suni hoti the we talk daily ahh koi apko call kr th the i feel like mat kro please osko rest krni do mai kr doga sare work osko mat tang kro 😖😖😭😭... Ahhh koi jb apki bare mai kuch khthe the mare sy control nhi hota the mai fight krne lgthe the ki mare panda ko koi kuch nhi kh skthe the hai💗🤌🥺😭😖ahhh os pal my day was like mujhe apko sab btana hota the ki morning mani kya kiya how's my day... Ahh apsy puch a ap khud btati the 💕🥺🤞ahhh os pall like 2 months very bad for me because tum mare pass the mare samni nhi 🤞🥺💕bhot roya os pall or miss bhi kiya but os pal yes we know eachother moree ahh os pall mani apko bhot jada ache sy samja hai 💕🥺🤞🤌apke sare moods dekhi hai...
<br/><br/>
Ahh then diwali ahh I buy something for you with a lot of feelings 💗 ahh a lot of feelings 💗 🤞🥺🤌... Ahhh then december ahhh vo pal like very bad for me you... Ahh mare life ka vo din jis m mai bhot jada hurt hua like I'm broken inside ahh mai itna roya itna roya like foot foot ki ahhh my eyes like ahhh my heartbeat life mai first time I get anxiety attack ahhh my breathING like mai ab gya mai ab gya 😔😔🤌🤞vo pall mare liye esa the like ki mai bas aj ki bad kbhi apke samni nhi aoga kabhi nhi 🤞😔🤌...ahh vo moment mare life ka first moment the mare liye kabhi kuch itna hard nhi hua aj bhi vo soch kr ahhhh 🤌😔😔 
<br/><br/>
Don't know os pall mai mujhe utna hurt hua yes I'm jealous type person bhot jada not from today bachpan sy mujhe gussa kabhi nhi ata ahhh bas mujhe gussa tabhi ata hai when I'm jealous or mujhe mare chij na mili 😔🤌😭 don't know that's good or bad.. but ahh i understand everytime mai always samj the hu but sometimes I don't like to Shere my person or my favourite 🧿 person tho birkul nhi 💕🤌💕💕💕😭😭😭...
<br/><br/>
Ahh after 8 december yes i decide ki mai kabhi bhi nhi rhoga ab😔🤌but you still with me🥺🧿💕🤞
Ahh oski bad we see some new faces new things feelings special feelings.. ahh 🤞💕🥺🤌ek spark 🤌😔ahhh mai kise ki sath comfortable bhi nhi hota kise ki sath bhi nhi i hate if somebody come to me talk to me or koi agar mare sy baat kri mujhe nhi pasand mujhe apni masti mai own life 🧬 axhe lgthe hai 😔🤌ahh i don't like to talk any girl.. ahh but when I'm taking to you I feel yes here I can trust on this person blind trust ahh i feel ki hn mai kr skthe hu trust is pr.. ahh i feel comfortable I feel secure 🔐 i feel happy my real version always come when you around mee... Your control me my patience ahh yes...
Ahh vo ek dar mujhe honi lga phli bas ek favourite person the because something is .. unique but right now don't know feelings is different ahh dar or vo ki nhi ab share nhi Krna ab nhi jaana khi nhi jani dega bas mera hai😔💕🥺🤌type...
<br/><br/>
Ahhh feelings auto develop hoti hai ahh don't know apko kb aiye ya na aiye don't know but 🤞🫰❣seee...
Ahh for me like you means not relationship ahh not call love yes like means I want but not right now ahhh I'm goo with the flow.. that's my feelings ❤ not your or your like but we don't know the future shyd a jaiye shyd na aiye... We don't know but yes i will try like always nothing is change nothing is down mai bas vhi kroga jo kr the ara hu like dhere dhere krki permission ahh basic, premium,super premium ahhh i try but my help means you need to me show me the interest ❤ like agar mai efforts dalra hu so I also expected the return means if i put the effort then meko bas return mai ye dekhni ko mil jaiye ki yes I'm going to right direction or my efforts are not waste that's help I want...ahh in the Evey step you have yhe option to stop me.. 
<br/><br/>
Ahh dont know you will be my one not.. 🫰🥺 ahhh thats true humara bachpan humare favourite person ki samni hi ata hai jaise like me.. or i want to see your bachpn to...
<br/><br/>
Ahh so nothing is change everything like same bas ab itna hai apko kuch ek + point pta hai now depends on you respect my feelings or give me the all things which you want to give your person you boy or (like here my point is like dad jo kabhi bol the nhi ki hn mera bachha axhe kra but vo always sab date hai like back bone) or just forget which i tell you or behave like you don't know anything...
<br/><br/>

Ahhh yesterday you tell I dont know how you means axhe sy abe nhi jaan the right I have a list jo sab mujhe jaan na hai or thats why I'm going with the step by step taki mai kuch miss na kro or sab jaan lo!!!❤❣🫰🤌see your all monds face everything taki kabhi bhi tumhi sad na honi do... 
<br/><br/>
My target show you how important your ahh ek life hai km hai to show you but i try ki you feel yes your real word princess ❤ ❤ 🥺 🤌 💗...
<br/><br/>
Ahhh the server effort nothing 🤌🤞it's just a example 🤞🤌🫰..
<br/><br/>
Ahh yes apka huq hai mare pr bhot jada tum kuch kh skthe ho bol skthe yes or no tum kuch bhi krne ko include tum mujhe shi galt bhi bta skthe ho like you correct me always but tum or sab bhi kr skthe ho...
<br/><br/>
Ahhh yes mai demand kr the hu kabhi kabhi zid bhi kr the hu 🥺ahh i try ki kam kro demand or zid dono 🥺but biggest problem was agar mai tumko kuch na kho tum kabhi khud sy kabhi bhi nhi bol the li shubham ab krli 🤌🥺😭ahh agar kr the so mai nhi kr the zid 🥺🥺🤌🫰ahh but i try ki mai absy bas zid kam kro 😔😔..
<br/><br/>

Ahhh panda don't know in future kya honi wala hai ahhh kl kya honi wala mujhe vo miliga ya nhi tum kabhi mare hogi ya nhi hum kabhi sath aige ya nhi mai kabhi apko vo feel kra paoga ga ya nhi kya ahhh jo dar hai khoni ka vo door hoga ya nhi mai tumhi khoo gya hi nhi doga ahh humra dar to lose our bond mai apko axhe sy rakh skthe hu ya don't know yr.. we don't know yrr..
<br/><br/>
ahh yes i trust on you or i know kabhi bhi kuch bhi situation ho you never break my trust or kabhi bhi your never share anything with anyone..
<br/><br/>
Ahh but i know today I have today soo mai kl ka soch kr aj kuch km nhi kroga 🥺🤌❤
<br/><br/>
Ah tumko kabhi lage mera over hora hai ya mai jada ap sy zid kra hu ya mai ap pr presher type bnara ho so please 🥺 🥺 🤌 let me know...
<br/><br/>

I hope now you clear or my this message is important you us or what is meaning of my line🤌🥺❤I hope you understand my point or haian i always understand you ok na🥺... 
<br/><br/>
Note:- dear panda that's request raise for super admin want some attention of the server the cute panda 🐼 🥺❤🤌super admin effort lga rha hai but Abe kuch time sy vo thoda tired hai because he need some attention please show some importance and give some time to your admin give some direction or show yr inside magic ✨ ✨ need
<br/><br/>
I hope you enjoye my company 🧿👑
✨🤌❤🥺🐼🧬🧿🧿🐅👑🗝💖💞🎉💞💓💓
                        </pre>
                    </div>

                    {/* Reply Section */}
                    <textarea
                        className="w-full mt-4 p-3 border rounded-lg text-gray-800 dark:text-white/90 dark:bg-black/50"
                        placeholder="Write your honest reply tell everything here...🫰🫰🥺"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                    />

                    <button
                        className="mt-3 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                        onClick={handleReply}
                    >
                        Send Reply
                    </button>

                    {showDownload && (
                        <button
                            className="mt-3 ml-3 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                            onClick={downloadMessage}
                        >
                            Download Reply
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
