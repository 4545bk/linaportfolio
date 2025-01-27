"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Rules");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Rules{" "}/{" "}ህግ ደምብ</SectionHeading>
      <p className="mb-3">
      🔴 በደንብ ይነበብ‼️🔥{" "}<br></br><br></br>
        <span className="font-medium">
          1️⃣. በሰላምታ ጊዚያችንን አትፍጁ ቀጥታ ወደ ገደለው<br></br><br></br>

2️⃣. ስትጠይቁን ለመች እና የት እንደሆነ ንገሩን<br></br><br></br>

3️⃣.ዋጋ ከሷጋ መጨቃጨቅ መከራከር ቀንሺ ምናምን ማለት ያስቦልካል ‼️<br></br><br></br>

4️⃣. ሹገር አናገናኝም ሹገር ሹገር አትበሉን።  
ሹገር የሚጠይቅ ይቦለካል❌<br></br><br></br>

5️⃣. ቺኮቹ ቀን ላይ ከ4500 ጀምሮ አዳር ከሆነ ከ5000 ጀምሮ ነው የሚሰሩት<br></br><br></br> 

❌❌ሀይ ፣ ሰላም ፣ ምናምን የሚሉ 
መልክቶችን አንቀበልም ❌❌ 
ቀጥታ የምትፈልጉትን ንገሩን<br></br><br></br>

🔴 በኣካል = ከ4500 ብር ጀምሮ ቀን <br></br><br></br>
                   = ከ5000 ብር ጀምሮ አዳር <br></br><br></br>

🔴 ቪድዮ ሴክስ = 2000 <br></br><br></br>

🔴 ፎን ሴክስ = 1000<br></br><br></br>

🔴 ቻት ሴክስ = 700<br></br><br></br>

6️⃣. ፎቶ ለመምረጥ ስልክ ቁጥር ለመቀበል 1000 ብር መክፈል ግድ ነው እውነተኛ ፈላጊን የምንለይበት መንገድ ነው።  የሚያሾፍ በዝቷል
<br></br><br></br>
7️⃣. ፎቶ እና ስልክ ከመቀበላቹ በፊት በ Dashen bank account 1000 ብር / ወይም Cbe ቅድሚያ መክፈል እንዳለባቹ አውቃቹ አናግሩን። ይሄን የምናደርገው እውነተኛ ፈላጊን ከሚያሾፍ ለመለየት ነው። 
<br></br><br></br>
8️⃣. የሴቶቹ ክፍያ እንደየቺኮቹ ይለያያል። የመጨረሻው ትንሹ 1500 ብር ነው። ክፍያቸው የሚፈፀመው ከተገናኛቹ በኋላ በእጇ ነው። 
<br></br><br></br>
9️⃣. ለጊዜው ሀዋሳ ሻሸመኔ   አዳማ እና አዲስ አበባ ያላቹ ብቻ አናግሩን። ያ ማለት ሌላ ቦታ ሴቶች የሉንም ለጊዜው ማለት ነው። 
<br></br><br></br>

</span>
        <span className="font-medium">
        🔟 </span>
      </p>

      <p>
        <span className="italic"> ለዛሬ ነው የምፈልጋት ብላቹ  </span>, በቴሌ ብር 1000 ብር ካሽ ከፍላቹ ስልክ ተቀብላቹ። በራሳቹ ምክንያት ሳትደውሉላት ሳታገኟት ብትቀሩ ሌላ ጊዜ ላግኛት ብትሉ እጥፉን ድጋሚ እንደምትከፍሉ እወቁ።  ስለዚህ እርግጠኛ ሆናቹ ጠይቁን። እየቀጠራቹ መጥፋት ነውር ነው።{" "}
        
      </p><br></br><br></br><p
  className="text-xl font-bold border-2 border-yellow-500 p-4 inline-block"
>
  CBE Account Number: <strong className="text-2xl">1000404416198</strong>
</p>


    </motion.section>
  );
}