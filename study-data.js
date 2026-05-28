// ============================================================
// SHARED STUDY DATA — All exams, topics, full content & tricks
// ============================================================
const EXAMS = {
  ibps: {
    name:"IBPS PO", icon:"🏦", gradient:"linear-gradient(135deg,#0a1628,#1e3a8a)",
    mockConfig:{ prelims:{qs:100,time:60,label:"Prelims — 100 Qs / 60 min"} },
    pyqLinks:[
      {label:"Adda247 — IBPS PO PYQs 2016–2025",url:"https://www.adda247.com/jobs/ibps-po-previous-year-question-paper/"},
      {label:"Testbook — Online CBT Practice",url:"https://testbook.com/ibps-po/previous-year-papers"},
      {label:"Mockers — Shift-wise Tests",url:"https://www.mockers.in/exam/ibps-po-pyqs"},
      {label:"IBPS Official Site",url:"https://ibps.in/"}
    ],
    topics:[
      {
        id:"ibps-reasoning", name:"Reasoning Ability", icon:"🧠",
        subtopics:["Puzzles & Seating Arrangement","Coding-Decoding","Blood Relations","Syllogism","Inequalities","Directions & Distance","Input-Output","Data Sufficiency","Series & Analogy"],
        content:`<h2>Reasoning Ability — Overview</h2>
<p>Reasoning tests your logical thinking. In IBPS PO Prelims you get <strong>35 questions, 35 marks, 20 minutes</strong>. It is the most important section as it carries maximum marks and separates toppers from the rest.</p>

<h3>📌 1. Puzzles & Seating Arrangement (10–15 marks)</h3>
<p>The biggest topic in reasoning. Usually 2–3 sets come in the exam, each worth 4–5 marks.</p>
<p><strong>Types:</strong></p>
<ul>
<li><strong>Linear Arrangement:</strong> People sitting in a row, facing North or South. Key: note the direction before solving.</li>
<li><strong>Circular Arrangement:</strong> People sitting around a round table, facing centre or outward.</li>
<li><strong>Floor-based Puzzles:</strong> People on different floors (Ground = 1st). Usually 7–8 floors.</li>
<li><strong>Box / Month / Day Puzzles:</strong> Objects placed in boxes, or events on specific days/months.</li>
</ul>
<p><strong>How to solve:</strong> Read ALL conditions first. Mark definite positions first, then use elimination for uncertain ones. Always check all conditions again at the end.</p>

<h3>📌 2. Coding-Decoding</h3>
<p>A word/letter/number is coded using a pattern. You must identify the pattern and decode.</p>
<p><strong>Common patterns:</strong></p>
<ul>
<li>Letter shifting: A→B (+1), A→Z (-1). Example: PLAY = QMBZ (each letter +1)</li>
<li>Reverse alphabet: A↔Z, B↔Y, C↔X etc.</li>
<li>Number-to-letter: A=1, B=2 ... Z=26</li>
<li>New pattern (SBI/IBPS): Code based on position of letters in the word</li>
</ul>

<h3>📌 3. Blood Relations</h3>
<p>Questions about family relationships. Always draw a family tree to avoid confusion.</p>
<p><strong>Key terms to know:</strong></p>
<ul>
<li>Maternal uncle = Mother's brother</li>
<li>Paternal aunt = Father's sister</li>
<li>In-laws = related through marriage</li>
</ul>
<p><strong>Golden rule:</strong> Always draw a tree. Use △ for male, ○ for female. Connect with = for couples and | for parent-child.</p>

<h3>📌 4. Syllogism</h3>
<p>Two statements are given, and you must determine which conclusions follow.</p>
<p><strong>Basic valid patterns:</strong></p>
<ul>
<li>All A are B + All B are C → All A are C ✓</li>
<li>Some A are B + All B are C → Some A are C ✓</li>
<li>No A are B + All C are B → No C are A ✓</li>
<li>All A are B + Some B are C → Some A are C ✗ (WRONG — the B that are C may not be A)</li>
</ul>
<p><strong>Exam tip:</strong> In new pattern questions, "Some A are not B" type conclusions are also tested. Use Venn diagrams.</p>

<h3>📌 5. Inequalities</h3>
<p>Chain comparisons like A > B ≥ C = D < E. Find which conclusions are definitely true.</p>
<p><strong>Rules:</strong></p>
<ul>
<li>If A > B > C, then A > C is definitely true</li>
<li>If A > B and B ≥ C, then A > C is true</li>
<li>If A > B and B < C, then A vs C CANNOT be determined</li>
</ul>

<h3>📌 6. Directions & Distance</h3>
<p>Navigation-based questions. Always draw a diagram on paper.</p>
<p><strong>Right angle shortcut:</strong> After solving all movements, draw the final triangle. Use Pythagoras theorem if diagonal distance is asked: Distance = √(x² + y²)</p>

<h3>📌 7. Input-Output Machine</h3>
<p>A machine processes words/numbers step by step. You must identify the pattern from Step 1 → Step 2.</p>
<p><strong>Common patterns:</strong></p>
<ul>
<li>Smallest/Largest number moves to extreme left/right alternately</li>
<li>Words arranged alphabetically from left</li>
<li>Numbers arranged descending, words alphabetically (alternate steps)</li>
</ul>`,
        tricks:[
          {title:"VIPER Method for Puzzles",tip:"V=Variables, I=Information, P=Place definite ones, E=Eliminate, R=Re-check. List ALL conditions before placing anyone. Always verify all conditions at the end."},
          {title:"Syllogism — Only/All/Some Rule",tip:"If 'All A are B' is given → 'Some A are B' is automatically TRUE. 'Some A are not B' is FALSE. If 'Some A are B' → 'Some B are A' is TRUE."},
          {title:"Blood Relation — Gender Symbol Trick",tip:"Use △ for male, ○ for female. Connect = for couples, | for parent-child. '+ means' male, '−' means female in older questions."},
          {title:"Direction — Compass Rose Trick",tip:"Draw a full compass: N(up), S(down), E(right), W(left). For turns: Right = clockwise 90°, Left = anticlockwise 90°. U-turn = 180°."},
          {title:"Input-Output — Step Counting",tip:"Count total elements (numbers + words). In sorting-type: each step places ONE element at its correct position. For n elements → maximum n-1 steps."},
          {title:"Inequality — Combined Chain",tip:"Always convert to a chain before judging. A>B, B≥C, C>D → A>B≥C>D. Now A>D is definitely true. If chain breaks (A>B, B<C), A vs C is uncertain."}
        ],
        prevYrQs:[
          {q:"Pointing to a photo, Ram says 'She is the daughter of my grandfather's only son'. How is the girl related to Ram?",a:"Grandfather's only son = Ram's father. Father's daughter = Ram's SISTER. Answer: Sister.",year:"IBPS PO 2023"},
          {q:"In a row of 40 students, Riya is 16th from left, Priya is 20th from right. How many students sit between them?",a:"Priya from left = 40 − 20 + 1 = 21st. Students between = 21 − 16 − 1 = 4 students.",year:"IBPS PO 2022"},
          {q:"All pens are pencils. No pencil is an eraser. Does 'No pen is an eraser' follow?",a:"YES — valid conclusion. All pens are pencils + No pencil is an eraser → By universal negative syllogism, No pen is an eraser.",year:"IBPS PO 2024"}
        ]
      },
      {
        id:"ibps-quant", name:"Quantitative Aptitude", icon:"🔢",
        subtopics:["Simplification","Number Series","Data Interpretation","Percentage","Profit & Loss","Time Speed Distance","SI & CI","Quadratic Equations","Permutation & Combination"],
        content:`<h2>Quantitative Aptitude — Overview</h2>
<p>Tests speed and accuracy with numbers. IBPS PO Prelims: <strong>35 questions, 35 marks, 20 minutes</strong>. This section separates averages from toppers through practice.</p>

<h3>📌 1. Simplification & Approximation</h3>
<p>Use BODMAS: Brackets → Orders (powers) → Division → Multiplication → Addition → Subtraction.</p>
<p><strong>Approximation trick:</strong> Round numbers to nearest 5 or 10 for MCQs. The correct answer will be closest to your approximation.</p>
<p>Example: 497 × 19 ≈ 500 × 20 = 10,000. Actual = 9,443. Closest option = 9,443.</p>

<h3>📌 2. Number Series</h3>
<p>Find the missing number by identifying the pattern.</p>
<p><strong>Common patterns:</strong></p>
<ul>
<li><strong>Arithmetic:</strong> Constant difference. 3, 7, 11, 15 (diff = 4)</li>
<li><strong>Geometric:</strong> Constant ratio. 2, 6, 18, 54 (×3)</li>
<li><strong>Squares/Cubes:</strong> 1, 4, 9, 16 (n²) or 1, 8, 27, 64 (n³)</li>
<li><strong>Mixed:</strong> ×2+1: 2→5→11→23→47</li>
<li><strong>Difference of differences:</strong> 1, 3, 7, 13, 21 (diff: 2,4,6,8 — increasing by 2)</li>
</ul>

<h3>📌 3. Percentage — Most Tested!</h3>
<p><strong>Key formulas:</strong></p>
<ul>
<li>x% of y = y% of x (Very useful shortcut!)</li>
<li>% increase = (New − Old) / Old × 100</li>
<li>If price increases by R%, consumption must decrease by R/(100+R) × 100 to keep expenditure same</li>
<li>If price decreases by R%, consumption must increase by R/(100−R) × 100</li>
</ul>
<p><strong>Quick examples:</strong> 12% of 50 = 50% of 12 = 6. Always use the easier direction!</p>

<h3>📌 4. Profit & Loss</h3>
<p><strong>Formulas:</strong></p>
<ul>
<li>Profit% = Profit / CP × 100</li>
<li>SP = CP × (100 + P%) / 100</li>
<li>CP = SP × 100 / (100 + P%)</li>
<li>Marked Price (MP) → after Discount (D%) → SP = MP × (100 − D%) / 100</li>
<li><strong>Two items at same SP, one at P% profit and one at P% loss → Always LOSS = (P/10)²%</strong></li>
</ul>
<p>Example: Two items at ₹500, one at 20% profit, one at 20% loss → Net loss = (20)²/100 = 4%</p>

<h3>📌 5. Simple Interest & Compound Interest</h3>
<p><strong>SI:</strong> SI = P × R × T / 100 | Amount = P + SI</p>
<p><strong>CI:</strong> Amount = P × (1 + R/100)ⁿ | CI = Amount − P</p>
<p><strong>Key difference:</strong> For 2 years at R%: CI − SI = P × (R/100)²</p>
<p>Example: P=₹10,000, R=10%, T=2 yr: SI=₹2000, CI=₹2100. Difference=₹100 = 10,000 × (0.1)²</p>

<h3>📌 6. Time, Speed & Distance</h3>
<p><strong>Core formula:</strong> Speed = Distance / Time | Time = D/S | Distance = S × T</p>
<p><strong>Unit conversion:</strong> km/h × 5/18 = m/s | m/s × 18/5 = km/h</p>
<p><strong>Relative speed:</strong></p>
<ul>
<li>Same direction: S₁ − S₂ (slower from faster)</li>
<li>Opposite direction: S₁ + S₂</li>
</ul>
<p><strong>Trains:</strong> When crossing a pole: distance = length of train. When crossing another train: distance = sum of lengths.</p>

<h3>📌 7. Data Interpretation</h3>
<p>Bar chart, pie chart, line graph, table, or caselet. Read the title and units carefully before attempting.</p>
<p><strong>Strategy:</strong> Do only what is asked. Never calculate more. Use approximation for all MCQs in DI.</p>`,
        tricks:[
          {title:"Percentage Swap Trick",tip:"12% of 50 = 50% of 12 = 6. Always calculate the easier one! 17% of 200 = 200% of 17 / 2... actually 17×2 = 34. Very useful for mental math."},
          {title:"Squaring Numbers Ending in 5",tip:"35² = 3×4 | 25 = 1225. Multiply first digit by next number, write 25. Examples: 45²=2025, 65²=4225, 85²=7225, 95²=9025."},
          {title:"CI 2-Year Shortcut",tip:"For 2 years at R%: CI = SI + (SI × R/100). Example: P=5000, R=10%, SI=1000. CI = 1000 + 1000×10/100 = 1000+100 = ₹1100."},
          {title:"Equal Price Profit-Loss",tip:"Two items at same SP, P% profit and P% loss: Always a loss of P²/100 %. At 20%: loss = 400/100 = 4%. No exceptions!"},
          {title:"Train Crossing Formula",tip:"Train crosses: (1) Pole = train length only. (2) Platform = train + platform length. (3) Another train same direction = (L₁+L₂)/(S₁−S₂). (4) Another train opposite = (L₁+L₂)/(S₁+S₂)."},
          {title:"Number Series — Start with Differences",tip:"Always subtract consecutive terms first. If differences are constant = Arithmetic. If differences form a pattern = 2nd-order series. If ratios are constant = Geometric."}
        ],
        prevYrQs:[
          {q:"A shopkeeper marks goods 40% above cost price and gives 20% discount. Find profit%.",a:"Let CP=100. MP=140. SP=140×(80/100)=112. Profit=12%. Formula shortcut: P% = M% − D% − (M%×D%/100) = 40−20−8 = 12%.",year:"IBPS PO 2024"},
          {q:"Find the next term: 2, 3, 6, 11, 18, 27, ___",a:"Differences: 1, 3, 5, 7, 9 (odd numbers increasing). Next difference = 11. Answer = 27 + 11 = 38.",year:"IBPS PO 2023"},
          {q:"CI on ₹8000 for 2 years at 10% pa = ?",a:"Amount = 8000 × (1.1)² = 8000 × 1.21 = ₹9680. CI = 9680 − 8000 = ₹1680.",year:"IBPS PO 2022"}
        ]
      },
      {
        id:"ibps-english", name:"English Language", icon:"📖",
        subtopics:["Reading Comprehension","Cloze Test","Para Jumbles","Sentence Correction","Error Detection","Vocabulary"],
        content:`<h2>English Language — Overview</h2>
<p>IBPS PO Prelims: <strong>30 questions, 30 marks, 20 minutes</strong>. Most students find this the most time-saving section if prepared well.</p>

<h3>📌 1. Reading Comprehension (RC)</h3>
<p>Usually 1–2 passages with 5–10 questions. Topics: economics, banking, environment, social issues.</p>
<p><strong>Strategy:</strong></p>
<ul>
<li>Read the QUESTIONS first, then the passage. This helps you know what to look for.</li>
<li>Answer factual questions directly. For inference questions, look for the closest match.</li>
<li>Tone questions: Look for emotional words — critical (negative), appreciative (positive), neutral, humorous.</li>
<li>Vocabulary questions: Use context clues from the sentence — don't rely on memorized meanings alone.</li>
</ul>

<h3>📌 2. Cloze Test</h3>
<p>A paragraph with blanks. Choose the correct word from options.</p>
<p><strong>Steps:</strong></p>
<ul>
<li>Step 1: Read the ENTIRE paragraph for context/theme.</li>
<li>Step 2: For each blank, identify: Does it need a noun, verb, adjective, or adverb?</li>
<li>Step 3: Eliminate 2 clearly wrong options. Choose between remaining 2 based on meaning.</li>
</ul>

<h3>📌 3. Para Jumbles</h3>
<p>Rearrange 5–6 sentences to form a coherent paragraph.</p>
<p><strong>Rules for the FIRST sentence:</strong></p>
<ul>
<li>Introduces topic without using pronouns (he/she/they/it) that refer to previous text</li>
<li>Does NOT start with conjunctions: But, However, Also, Therefore, Thus</li>
<li>Often starts with "The" + noun, or a proper noun</li>
</ul>
<p><strong>Rules for LAST sentence:</strong></p>
<ul>
<li>Contains conclusion words: therefore, thus, hence, finally, in conclusion</li>
<li>May refer to future implications</li>
</ul>
<p><strong>Linking technique:</strong> Find pairs of sentences — sentence A introduces something, sentence B elaborates it using "this", "it", "these", "such".</p>

<h3>📌 4. Error Detection & Sentence Correction</h3>
<p><strong>Most common errors tested:</strong></p>
<ul>
<li><strong>Subject-Verb Agreement:</strong> "The team ARE playing" ✗ → "IS playing" ✓ (team is singular)</li>
<li><strong>Neither/Either...nor/or:</strong> Verb agrees with the NEARER subject. "Neither the manager nor the employees WERE present."</li>
<li><strong>Articles:</strong> Use "an" before vowel sounds: an hour, an MBA, an honest man.</li>
<li><strong>Tense Consistency:</strong> Don't mix past and present in the same sentence without reason.</li>
<li><strong>Prepositions:</strong> Discuss (not "discuss about"), Suggest (not "suggest for"), Similar to (not "similar with")</li>
</ul>

<h3>📌 5. Vocabulary</h3>
<p><strong>Most asked word pairs:</strong></p>
<ul>
<li>Loquacious = Talkative | Taciturn = Silent</li>
<li>Frugal = Economical | Extravagant = Spendthrift</li>
<li>Resilient = Bouncing back | Fragile = Easily broken</li>
<li>Ameliorate = Improve | Deteriorate = Worsen</li>
<li>Verbose = Using too many words | Concise = Brief and clear</li>
</ul>
<p><strong>Root word shortcut:</strong> BENE=good (benefit, benevolent) | MAL=bad (malice, malfunction) | VER=true (verify, verdict) | CRED=believe (credible)</p>`,
        tricks:[
          {title:"RC — 5-Minute Strategy",tip:"1 min: Skim for main idea. Read questions (2 min). Answer specific detail questions by scanning passage. Inference/tone last. Max 30 sec per question."},
          {title:"Para Jumble — Find the Mandatory First",tip:"First sentence: (1) No pronouns referring back, (2) Doesn't start with But/However/Also/Therefore, (3) Often 'The [topic]...' or 'In recent years...' or a general statement."},
          {title:"Error Detection — Read Aloud",tip:"If it 'sounds wrong' grammatically, trust your instinct — especially for Subject-Verb agreement. The sentence with the error will usually break the natural flow."},
          {title:"Vocabulary — Root Words",tip:"Learn roots: BENE=good, MAL=bad, PORT=carry, DICT=say, FER=carry, JECT=throw, VIS=see. One root = 10+ words. E.g., VIS: visible, vision, revise, visual, visionary."},
          {title:"Cloze — Elimination Method",tip:"Always eliminate 2 options first. Never guess randomly among 4. If stuck between 2, choose the more formal/neutral one in formal passages, more emotional in informal ones."}
        ],
        prevYrQs:[
          {q:"Error detection: 'Each of the students have submitted their assignments on time.'",a:"'Each of' is singular → verb should be 'HAS' (not 'have'). Correct: 'Each of the students HAS submitted their assignments on time.'",year:"IBPS PO 2024"},
          {q:"Choose the word most similar to LOQUACIOUS:",a:"LOQUACIOUS = Talkative (from Latin 'loqui' = to speak). So the answer is Talkative.",year:"IBPS PO 2023"}
        ]
      },
      {
        id:"ibps-gk", name:"General & Banking Awareness", icon:"🌏",
        subtopics:["RBI & Monetary Policy","Banking Terms","Government Schemes","Current Affairs","Static GK","International Bodies"],
        content:`<h2>General & Banking Awareness — Overview</h2>
<p>IBPS PO Mains: <strong>40 questions, 40 marks, 35 minutes</strong>. This is the most important differentiating section in Mains. Good preparation here can boost your overall rank significantly.</p>

<h3>📌 1. Reserve Bank of India (RBI)</h3>
<p><strong>Key facts:</strong> Established April 1, 1935 | Nationalized: 1949 | HQ: Mumbai</p>
<p><strong>Critical Rates (verify latest before exam!):</strong></p>
<ul>
<li><strong>Repo Rate:</strong> Rate at which RBI LENDS to commercial banks (short-term, against securities)</li>
<li><strong>Reverse Repo Rate:</strong> Rate at which RBI BORROWS from commercial banks (absorbs excess liquidity)</li>
<li><strong>CRR (Cash Reserve Ratio):</strong> % of deposits banks must keep as CASH with RBI</li>
<li><strong>SLR (Statutory Liquidity Ratio):</strong> % of deposits banks must keep in liquid assets (gold, cash, govt securities)</li>
<li><strong>Bank Rate:</strong> Rate for long-term credit to banks | <strong>MSF:</strong> Emergency overnight borrowing rate</li>
</ul>
<p><strong>Monetary Policy Committee (MPC):</strong> 6 members — 3 from RBI (Governor chairs) + 3 from Government. Meets every 2 months to decide repo rate.</p>

<h3>📌 2. Important Banking Terms</h3>
<ul>
<li><strong>CASA Ratio:</strong> Current Account + Savings Account deposits / Total deposits. Higher CASA = cheaper cost of funds.</li>
<li><strong>NPA:</strong> Non-Performing Asset — loan unpaid for 90+ days</li>
<li><strong>NEFT:</strong> National Electronic Funds Transfer — works 24×7 in batches</li>
<li><strong>RTGS:</strong> Real Time Gross Settlement — minimum ₹2 lakh, instant settlement</li>
<li><strong>IMPS:</strong> Immediate Payment Service — 24×7, up to ₹5 lakh</li>
<li><strong>UPI:</strong> Unified Payments Interface — mobile-based instant transfers</li>
<li><strong>KYC:</strong> Know Your Customer — identity verification mandatory for all accounts</li>
<li><strong>MCLR:</strong> Marginal Cost of funds-based Lending Rate — replaced Base Rate in April 2016</li>
</ul>

<h3>📌 3. Government Schemes (High Priority!)</h3>
<ul>
<li><strong>PMJDY:</strong> Jan Dhan Yojana — zero-balance accounts, financial inclusion. Launched August 2014.</li>
<li><strong>MUDRA:</strong> Micro Units Development & Refinance Agency. Loans: Shishu (≤₹50k), Kishore (₹50k–5L), Tarun (₹5L–10L)</li>
<li><strong>Stand Up India:</strong> Loans ₹10L–₹1Cr to SC/ST and women entrepreneurs</li>
<li><strong>PMSBY:</strong> Suraksha Bima Yojana — accident insurance ₹2L at ₹20/year</li>
<li><strong>PMJJBY:</strong> Jeevan Jyoti Bima Yojana — life insurance ₹2L at ₹436/year</li>
<li><strong>APY:</strong> Atal Pension Yojana — pension for unorganized sector workers</li>
</ul>

<h3>📌 4. Regulatory Bodies in India</h3>
<ul>
<li><strong>RBI:</strong> Banking & NBFCs</li>
<li><strong>SEBI:</strong> Capital markets (stocks, bonds, mutual funds) — HQ: Mumbai</li>
<li><strong>IRDAI:</strong> Insurance — HQ: Hyderabad</li>
<li><strong>PFRDA:</strong> Pension funds — HQ: New Delhi</li>
<li><strong>NABARD:</strong> Agriculture & rural development finance</li>
</ul>`,
        tricks:[
          {title:"RBI Rates Memory — RRCSMB",tip:"Repo > Reverse Repo (always). CRR is cash with RBI. SLR is broader liquid assets. MSF > Repo Rate always. Bank Rate > Repo Rate. Remember: RBI sets these to control inflation and liquidity."},
          {title:"MUDRA Loan Amounts — SST",tip:"Shishu=Small=₹50,000 max. Kishore=Kid growing=₹50k to ₹5L. Tarun=Teen/Tall=₹5L to ₹10L. SST = Small, Stretching, Thriving. Also: Shishu(baby), Kishore(teenager), Tarun(young adult)."},
          {title:"Regulator Trick",tip:"Banking=RBI, Capital=SEBI, Insurance=IRDAI, Pension=PFRDA. Mnemonic: 'Banks Catch Intelligent People' = B(anking)→RBI, C(apital)→SEBI, I(nsurance)→IRDAI, P(ension)→PFRDA."},
          {title:"Payment Systems Comparison",tip:"NEFT: No minimum, batch, 24×7. RTGS: Min ₹2L, real-time, 24×7. IMPS: No minimum (max ₹5L), instant, 24×7. UPI: No minimum (max ₹1L per transaction). Remember: Real-Time = RTGS."}
        ],
        prevYrQs:[
          {q:"RTGS transactions have a minimum amount of:",a:"₹2,00,000 (₹2 Lakh). NEFT has no minimum. IMPS can be as low as ₹1. RTGS is meant for large high-value transactions.",year:"IBPS PO 2023"},
          {q:"Which body regulates Non-Banking Financial Companies (NBFCs) in India?",a:"Reserve Bank of India (RBI). All NBFCs with assets above certain threshold must register with and are regulated by RBI.",year:"IBPS PO 2022"}
        ]
      },
      {
        id:"ibps-computer", name:"Computer Aptitude", icon:"💻",
        subtopics:["Hardware & Software","Operating Systems","MS Office Shortcuts","Networking","DBMS","Number Systems","Cybersecurity"],
        content:`<h2>Computer Aptitude — Overview</h2>
<p>IBPS PO Mains: Part of Reasoning & Computer Aptitude section. Usually <strong>10–15 questions</strong> are computer-based. Easy marks if you know the basics well.</p>

<h3>📌 1. Hardware vs Software</h3>
<p><strong>Hardware</strong> = Physical parts you can touch: CPU, RAM, Hard Disk, Monitor, Keyboard, Mouse, Printer</p>
<p><strong>Software</strong> = Programs/instructions:</p>
<ul>
<li><strong>System Software:</strong> Operating System (Windows, Linux, Mac, Android)</li>
<li><strong>Application Software:</strong> MS Office, browser, media player</li>
<li><strong>Utility Software:</strong> Antivirus, disk cleaner, zip tools</li>
</ul>
<p><strong>Memory types:</strong></p>
<ul>
<li><strong>RAM:</strong> Random Access Memory — Volatile (data lost when power off) — Temporary working memory</li>
<li><strong>ROM:</strong> Read Only Memory — Non-volatile — Stores BIOS/firmware permanently</li>
<li><strong>Hard Disk/SSD:</strong> Non-volatile permanent storage</li>
<li><strong>Cache:</strong> Fastest memory, between CPU and RAM, very small</li>
</ul>

<h3>📌 2. MS Office Shortcuts (Most Asked!)</h3>
<ul>
<li>Ctrl+C = Copy | Ctrl+V = Paste | Ctrl+X = Cut</li>
<li>Ctrl+Z = Undo | Ctrl+Y = Redo</li>
<li>Ctrl+S = Save | Ctrl+P = Print | Ctrl+A = Select All</li>
<li>Ctrl+F = Find | Ctrl+H = Find & Replace</li>
<li>F12 = Save As | Alt+F4 = Close Window</li>
<li>Ctrl+B = Bold | Ctrl+I = Italic | Ctrl+U = Underline</li>
</ul>
<p><strong>File extensions:</strong> .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf (Adobe)</p>

<h3>📌 3. Networking</h3>
<ul>
<li><strong>LAN:</strong> Local Area Network — small area (office, building)</li>
<li><strong>WAN:</strong> Wide Area Network — large area (internet)</li>
<li><strong>MAN:</strong> Metropolitan Area Network — city-wide</li>
<li><strong>IP Address:</strong> Unique identifier of device on network. IPv4 = 32 bits (e.g., 192.168.1.1)</li>
<li><strong>HTTP/HTTPS:</strong> Web browsing protocol (S = Secure, uses SSL/TLS encryption)</li>
<li><strong>SMTP:</strong> Sending emails | <strong>POP3/IMAP:</strong> Receiving emails</li>
</ul>

<h3>📌 4. Number Systems</h3>
<ul>
<li><strong>Binary (Base 2):</strong> 0, 1 — used by computers internally</li>
<li><strong>Decimal (Base 10):</strong> 0–9 — used by humans</li>
<li><strong>Hexadecimal (Base 16):</strong> 0–9, A–F — used in programming</li>
</ul>
<p><strong>Binary to Decimal:</strong> Powers of 2 from right: 1, 2, 4, 8, 16, 32...</p>
<p>Example: 1101 = 1×8 + 1×4 + 0×2 + 1×1 = 13 in decimal</p>
<p><strong>Decimal to Binary:</strong> Divide by 2 repeatedly, read remainders bottom to top.</p>`,
        tricks:[
          {title:"RAM vs ROM Memory Aid",tip:"RAM = 'Runs Active Memory' (temporary, volatile, like your desk — cleared when you leave). ROM = 'Read Only Memory' (permanent, non-volatile, like a printed book). Think: RAM runs programs, ROM holds BIOS."},
          {title:"Binary Conversion Shortcut",tip:"Memorize powers of 2: 1,2,4,8,16,32,64,128. For 1-byte (8-bit) numbers: 11111111 = 255 (all 1s). 10000000 = 128. 00001111 = 15. Practice 10 conversions daily."},
          {title:"Network Size Memory",tip:"LAN < MAN < WAN. Think: Local(tiny) < Metro(medium) < Wide(world). Or: L=Local office, M=Metro city, W=Worldwide. Also: LAN is fastest, WAN is slowest."},
          {title:"MS Office Shortcuts Pattern",tip:"Ctrl + first letter of action: C=Copy, X=cut(scissors), V=paste(below X), Z=undo, S=save, P=print, A=all, F=find, B=bold, I=italic, U=underline. F12=Save As (function key)."}
        ],
        prevYrQs:[
          {q:"Which memory is volatile?",a:"RAM (Random Access Memory) is volatile — all data is permanently lost when power is switched off. ROM, HDD, and SSD are all non-volatile storage.",year:"IBPS PO 2023"},
          {q:"Decimal 13 in binary is:",a:"13 = 8+4+1 = 1×8 + 1×4 + 0×2 + 1×1 = 1101 in binary.",year:"IBPS PO 2022"}
        ]
      }
    ]
  },

  ugchrm: {
    name:"UGC NET HRM Code 55", icon:"👥", gradient:"linear-gradient(135deg,#3b0764,#7c3aed)",
    mockConfig:{ paper2:{qs:100,time:120,label:"Paper 2 — 100 Qs / 120 min"} },
    pyqLinks:[
      {label:"Human Peritus — Code 55 PYQs 2009–2024",url:"https://humanperitus.in/ugc-net-hrm-syllabus/"},
      {label:"Testbook — HRM Practice Tests",url:"https://testbook.com/ugc-net/labour-welfare-syllabus"},
      {label:"NTA Official Portal",url:"https://ugcnet.nta.ac.in/"},
      {label:"JRFAdda — HRM Analysis",url:"https://www.jrfadda.com/exams/ugc-net/ugc-net-labour-welfare-personnel-management-industrial-relations-labour-and-social-welfare-human-resource-management/"}
    ],
    topics:[
      {
        id:"hrm-ob", name:"Organisational Behaviour", icon:"🧠",
        subtopics:["Motivation Theories","Leadership Styles","Perception & Attitude","Group Dynamics","Organisational Culture","Conflict & Stress"],
        content:`<h2>Organisational Behaviour — Overview</h2>
<p>OB is the most asked unit in Code 55 — expect <strong>8–12 questions</strong>. Mastering motivation theories alone can get you 4–5 marks.</p>

<h3>📌 1. Maslow's Hierarchy of Needs (1943)</h3>
<p>5 levels from bottom to top (lower needs must be satisfied before higher):</p>
<ul>
<li><strong>Level 1 — Physiological:</strong> Food, water, sleep, shelter, clothing (biological survival)</li>
<li><strong>Level 2 — Safety:</strong> Security, stability, freedom from fear, health insurance</li>
<li><strong>Level 3 — Social/Love/Belonging:</strong> Friendships, intimacy, family, sense of connection</li>
<li><strong>Level 4 — Esteem:</strong> Self-esteem, recognition, status, achievement, respect from others</li>
<li><strong>Level 5 — Self-Actualization:</strong> Realizing full potential, creativity, problem-solving, peak experiences</li>
</ul>
<p><strong>Key exam point:</strong> Once a need is satisfied, it no longer motivates. The person moves to the next level.</p>

<h3>📌 2. Herzberg's Two-Factor Theory (1959)</h3>
<p>Also called: <strong>Motivation-Hygiene Theory</strong></p>
<p><strong>Hygiene Factors</strong> (prevent dissatisfaction — do NOT motivate):</p>
<ul>
<li>Salary, job security, working conditions, company policies, supervision, interpersonal relations</li>
<li>If ABSENT → workers are dissatisfied. If PRESENT → workers are NOT dissatisfied (but not motivated either)</li>
</ul>
<p><strong>Motivator Factors</strong> (create satisfaction — DO motivate):</p>
<ul>
<li>Achievement, recognition, the work itself, responsibility, advancement, growth</li>
<li>If PRESENT → workers are motivated and satisfied</li>
</ul>
<p><strong>Memory trick:</strong> H for Hygiene = like hygiene habits — prevents disease (dissatisfaction) but doesn't make you an athlete (motivated). Medicine (Motivators) makes you perform!</p>

<h3>📌 3. McGregor's Theory X and Theory Y (1960)</h3>
<p><strong>Theory X (Negative assumptions):</strong></p>
<ul>
<li>People are lazy, dislike work, avoid responsibility</li>
<li>Need external control, threats, and close supervision</li>
<li>Leads to: Autocratic/authoritarian management style</li>
</ul>
<p><strong>Theory Y (Positive assumptions):</strong></p>
<ul>
<li>People are self-motivated, creative, seek responsibility</li>
<li>Work can be as natural as rest; people exercise self-direction</li>
<li>Leads to: Participative/democratic management style</li>
</ul>

<h3>📌 4. Vroom's Expectancy Theory (1964)</h3>
<p><strong>Motivation = Expectancy (E) × Instrumentality (I) × Valence (V)</strong></p>
<ul>
<li><strong>Expectancy:</strong> "If I work hard, will I perform well?" (effort → performance)</li>
<li><strong>Instrumentality:</strong> "If I perform well, will I get the reward?" (performance → reward)</li>
<li><strong>Valence:</strong> "Do I value the reward?" (desirability of outcome)</li>
</ul>
<p>If ANY of E, I, or V is ZERO → Motivation = 0. All three must be positive for motivation.</p>

<h3>📌 5. McClelland's Achievement Motivation Theory (1961)</h3>
<p>Three key needs:</p>
<ul>
<li><strong>nAch (Need for Achievement):</strong> Drive to excel, solve difficult problems, get feedback. Entrepreneurs have high nAch.</li>
<li><strong>nPow (Need for Power):</strong> Desire to influence and control others. Good managers/leaders.</li>
<li><strong>nAff (Need for Affiliation):</strong> Desire for warm, friendly relationships. HR professionals!</li>
</ul>

<h3>📌 6. Leadership Theories</h3>
<p><strong>Fiedler's Contingency Model:</strong> Effectiveness depends on fit between style and 3 situational factors: Leader-member relations, Task structure, Position power.</p>
<p><strong>Transformational vs Transactional:</strong></p>
<ul>
<li>Transformational: Inspires with vision, promotes change, emotional appeal, 4 Is: Idealized influence, Inspirational motivation, Intellectual stimulation, Individualized consideration</li>
<li>Transactional: Exchange-based, reward for performance, maintains status quo</li>
</ul>
<p><strong>Laissez-faire:</strong> Hands-off, maximum freedom to subordinates — least effective when group needs direction.</p>`,
        tricks:[
          {title:"Maslow 5 Levels — PSSEA",tip:"Physiological→Safety→Social→Esteem→Actualization. 'Please Send Some Extra Almonds' (PSSEA). Bottom to top. Remember: Physical body needs → Safety → People → Pride → Potential."},
          {title:"Herzberg HM Split",tip:"H-factors (Hygiene) = work ENVIRONMENT (outside the job itself): salary, canteen, parking, policies. M-factors (Motivators) = the JOB ITSELF: achievement, recognition, growth. Job vs Environment!"},
          {title:"Theory X vs Y Quick Recall",tip:"X = eXtra strict, negative view, like Theory eXclusion. Y = Yes you can! positive view. Theory X → Autocratic management. Theory Y → Democratic/Participative management."},
          {title:"Vroom's EVE Formula",tip:"E×I×V. Think EVE: Effort-Expectancy, V-alence, I-nstrumentality. 'EVE holds the key to motivation'. If manager rewards wrong people = Instrumentality is 0 = Motivation = 0."},
          {title:"McClelland nAch Characteristics",tip:"High nAch people: prefer moderate difficulty (not too easy, not too hard), need personal feedback, take calculated risks, become entrepreneurs. Low nAch: prefer easy tasks or very hard ones (excuse for failure)."}
        ],
        prevYrQs:[
          {q:"According to Herzberg, which of the following is a hygiene factor?",a:"SALARY is a hygiene factor. Hygiene factors (salary, working conditions, job security, policies) prevent dissatisfaction but do NOT motivate. Motivators (achievement, recognition, growth) create satisfaction.",year:"UGC NET 2023"},
          {q:"Vroom's Expectancy Theory suggests motivation depends on:",a:"The product of Expectancy (E) × Instrumentality (I) × Valence (V). M = E×I×V. All three must be positive for motivation to occur. If any one is zero, motivation becomes zero.",year:"UGC NET 2024"}
        ]
      },
      {
        id:"hrm-hrm", name:"Human Resource Management", icon:"👥",
        subtopics:["HR Planning","Recruitment & Selection","Training & Development","Performance Management","Compensation Management","Career Management"],
        content:`<h2>HRM — Complete Cycle</h2>
<p>This unit covers 8–10 questions. Every subtopic is important. Think of HRM as managing the employee journey: Attract → Select → Develop → Evaluate → Reward → Retain.</p>

<h3>📌 1. HR Planning</h3>
<p><strong>Definition:</strong> Ensuring the right number of right people with right skills at the right place at the right time.</p>
<p><strong>Steps:</strong> Analyze objectives → Current HR inventory → Forecast demand → Forecast supply → Identify gap → Action plan (recruit/train/redeploy)</p>
<p><strong>Forecasting methods:</strong></p>
<ul>
<li>Trend Analysis: Using historical data to predict future needs</li>
<li>Ratio Analysis: Ratio of employees to some activity level (e.g., 1 manager per 10 employees)</li>
<li>Delphi Technique: Iterative expert consensus method — done anonymously to avoid group pressure</li>
<li>Work Study: Time and motion study to determine optimum workforce size</li>
</ul>

<h3>📌 2. Recruitment & Selection</h3>
<p><strong>Recruitment</strong> = Generating a pool of candidates</p>
<p><strong>Selection</strong> = Choosing the best from that pool</p>
<p><strong>Recruitment sources:</strong></p>
<ul>
<li>Internal: Promotion, transfer, employee referrals (cheaper, faster, boosts morale)</li>
<li>External: Job portals, campus recruitment, headhunting, walk-ins (fresh perspective, larger pool)</li>
</ul>
<p><strong>Selection process:</strong> Application form → Written test → GD → Interview → Medical exam → Reference check → Offer letter</p>
<p><strong>Interview types:</strong></p>
<ul>
<li>Structured: Pre-set questions for all (objective comparison)</li>
<li>Unstructured: Free-flowing conversation (flexible but less reliable)</li>
<li>Stress interview: Test behavior under pressure</li>
<li>Behavioral interview: "Tell me about a time when..." (past behavior predicts future)</li>
</ul>

<h3>📌 3. Training & Development</h3>
<p><strong>Training</strong> = Job-specific, short-term, current role | <strong>Development</strong> = Broad, long-term, future roles</p>
<p><strong>On-the-Job methods:</strong> Job rotation, apprenticeship, coaching, mentoring, job instruction training (JIT)</p>
<p><strong>Off-the-Job methods:</strong> Classroom lectures, case study, role play, simulation, vestibule training (replica of workplace)</p>

<p><strong>Kirkpatrick's 4-Level Training Evaluation Model:</strong></p>
<ul>
<li><strong>Level 1 — Reaction:</strong> How did trainees FEEL about training? (smile sheet / feedback form)</li>
<li><strong>Level 2 — Learning:</strong> What did they LEARN? (pre-test vs post-test)</li>
<li><strong>Level 3 — Behavior:</strong> Did they CHANGE behavior on the job? (supervisor observation after 3 months)</li>
<li><strong>Level 4 — Results:</strong> What was the IMPACT on the organization? (ROI, productivity, quality, costs)</li>
</ul>

<h3>📌 4. Performance Management</h3>
<p><strong>360° Feedback:</strong> Input from boss, peers, subordinates, customers, AND self. Complete picture from all directions.</p>
<p><strong>MBO (Management by Objectives):</strong> Proposed by Peter Drucker (1954). Manager and employee jointly set SMART goals; performance measured against those goals.</p>
<p><strong>Balanced Scorecard (Kaplan & Norton):</strong> 4 perspectives: Financial + Customer + Internal Business Process + Learning & Growth</p>
<p><strong>Common Appraisal Errors:</strong></p>
<ul>
<li>Halo Effect: One outstanding trait influences all ratings</li>
<li>Central Tendency: Rater gives average ratings to avoid conflict</li>
<li>Recency Bias: Only recent events influence appraisal</li>
<li>Leniency/Strictness: Consistently giving high or low ratings</li>
</ul>`,
        tricks:[
          {title:"Kirkpatrick 4 Levels — RLBR",tip:"Reaction→Learning→Behavior→Results. 'Raju Learned Bhangra Rapidly' (RLBR). Level 1 = immediate smile sheet. Level 4 = long-term ROI. Goes from soft (feelings) to hard (business impact)."},
          {title:"Job Evaluation Methods Difficulty Order",tip:"Ranking (Simplest: just rank) → Classification (group into grades) → Factor Comparison (complex) → Point Rating (Most scientific: assign points to factors). Exam Q: 'Most scientific method?' = Point Rating."},
          {title:"MBO Key Features",tip:"Peter Drucker (1954). Key features: (1) Joint goal-setting between boss and employee, (2) SMART goals, (3) Regular review, (4) Self-control by employee (not micromanagement). Goals are agreed, not imposed!"},
          {title:"360° vs 180° vs 90° Feedback",tip:"90° = only boss rates you. 180° = boss + self. 270° = boss + peers + self. 360° = boss + peers + subordinates + customers + self (ALL directions). Higher degree = more comprehensive view."}
        ],
        prevYrQs:[
          {q:"Kirkpatrick's model at the 'Results' level measures:",a:"Ultimate organizational impact: productivity, quality improvement, cost reduction, sales increase, ROI. This is the hardest level to measure but most important for justifying training investment.",year:"UGC NET 2023"},
          {q:"Management By Objectives (MBO) was popularized by:",a:"Peter Drucker — introduced MBO in 'The Practice of Management' (1954). Key feature: joint goal-setting between manager and subordinate, followed by self-appraisal.",year:"UGC NET 2022"}
        ]
      },
      {
        id:"hrm-labour", name:"Labour Laws & Industrial Relations", icon:"⚖️",
        subtopics:["Industrial Disputes Act 1947","Trade Unions Act 1926","Factories Act 1948","Payment of Wages Act 1936","Minimum Wages Act 1948","Standing Orders Act 1946"],
        content:`<h2>Labour Laws — High Scoring, Easy Marks!</h2>
<p>Labour legislation questions are <strong>purely factual</strong> — learn the years, thresholds, and key provisions. This is free marks if you memorize them properly.</p>

<h3>📌 1. Industrial Disputes Act, 1947</h3>
<p><strong>Purpose:</strong> Prevention and settlement of industrial disputes in India.</p>
<p><strong>Key definitions:</strong></p>
<ul>
<li><strong>Strike:</strong> Concerted (collective) refusal to work by workers</li>
<li><strong>Lock-out:</strong> Employer's temporary closing of workplace or suspension of work</li>
<li><strong>Layoff:</strong> Temporary separation of worker due to lack of work/power/material (worker gets 50% basic+DA as compensation)</li>
<li><strong>Retrenchment:</strong> Permanent termination of surplus workers (not punishment, not superannuation)</li>
<li><strong>Closure:</strong> Permanent shutting down of the whole establishment</li>
</ul>
<p><strong>Dispute Settlement Mechanisms:</strong></p>
<ul>
<li>Conciliation: Third party helps parties reach agreement (Conciliation Officer)</li>
<li>Arbitration: Parties agree to refer dispute to neutral arbitrator</li>
<li>Adjudication: Compulsory — Labour Court (individual rights), Industrial Tribunal (collective), National Tribunal (national importance)</li>
</ul>

<h3>📌 2. Trade Unions Act, 1926</h3>
<p><strong>Purpose:</strong> First legislation giving legal status to trade unions in India</p>
<p><strong>Key provisions:</strong></p>
<ul>
<li>Minimum <strong>7 members</strong> required to register a trade union</li>
<li>Certificate of registration gives it legal entity status</li>
<li>Immunity from civil suits for legitimate trade union activities</li>
</ul>

<h3>📌 3. Factories Act, 1948</h3>
<p><strong>Applicability:</strong> Factories employing 10+ workers (using power) or 20+ workers (without power)</p>
<p><strong>Key provisions:</strong></p>
<ul>
<li>Working hours: Maximum <strong>9 hours/day, 48 hours/week</strong></li>
<li>Overtime: 2× normal wages if working beyond 9 hours/day</li>
<li>Annual leave: 1 day for every 20 days worked</li>
<li><strong>Canteen:</strong> Mandatory for 500+ workers</li>
<li><strong>Crèche:</strong> Mandatory for 30+ women workers</li>
<li>Weekly rest: At least 1 day off per week</li>
</ul>

<h3>📌 4. Payment of Wages Act, 1936</h3>
<p><strong>Purpose:</strong> Ensure timely payment; prevent unauthorized deductions</p>
<ul>
<li>Wage period: Maximum 1 month</li>
<li>Payment deadline: Within <strong>7 days</strong> (up to 1000 workers) or <strong>10 days</strong> (above 1000 workers)</li>
<li>Only authorized deductions allowed (fines, damage to property, absence)</li>
</ul>

<h3>📌 5. Minimum Wages Act, 1948</h3>
<ul>
<li>Fixes minimum wages for scheduled employment (agriculture, construction, etc.)</li>
<li>Wages revised every <strong>5 years</strong></li>
<li>Components: Basic wage + allowances</li>
</ul>

<h3>📌 6. Standing Orders Act, 1946</h3>
<p>Applies to establishments with <strong>100+ workers</strong></p>
<p>Defines terms of employment: classification of workers, attendance, leave, misconduct, disciplinary procedures</p>`,
        tricks:[
          {title:"Labour Acts Years — Timeline",tip:"1926(TU Act)→1936(PW Act)→1946(Standing Orders)→1947(ID Act)→1948(Factories+MW Act). Think: 1926=before independence, 1936=1930s worker rights, 1946/47/48=post-independence reforms all at once."},
          {title:"Factories Act Key Numbers",tip:"10+ workers(with power) OR 20+(without)=Factory. 9hr/day, 48hr/week max. Leave=1 per 20 days. CANTEEN at 500+. CRÈCHE at 30+ WOMEN workers. Annual bonus: 500+ workers."},
          {title:"Strike vs Lock-out vs Layoff",tip:"STRIKE=Workers stop (S=Staff/Servants). LOCKOUT=Employer stops/locks (L=Lock/Landlord). LAYOFF=Temporary no work available (L=Lack of work). RETRENCHMENT=Permanent surplus removal (R=Remove permanently)."},
          {title:"Payment Timeline",tip:"≤1000 workers: pay within 7 days of wage period. >1000 workers: pay within 10 days. Both must follow maximum wage period of 1 month. Fine for late payment."}
        ],
        prevYrQs:[
          {q:"Under Factories Act 1948, a canteen is compulsory when workers are:",a:"500 or more workers. Remember: Crèche is mandatory at 30+ WOMEN workers (different threshold). Canteen=500, Crèche=30 women.",year:"UGC NET 2023"},
          {q:"Minimum registration requirement for trade union under Trade Unions Act, 1926:",a:"A minimum of 7 members (workers/employees) are needed to apply for registration of a trade union.",year:"UGC NET 2024"}
        ]
      }
    ]
  },

  ugcmgmt: {
    name:"UGC NET Management Code 17", icon:"📊", gradient:"linear-gradient(135deg,#0c4a6e,#0369a1)",
    mockConfig:{ paper2:{qs:100,time:120,label:"Paper 2 — 100 Qs / 120 min"} },
    pyqLinks:[
      {label:"Human Peritus — Code 17 PYQs 2009–2024",url:"https://humanperitus.in/ugc-net-management-syllabus/"},
      {label:"Testbook — Management Tests",url:"https://testbook.com/ugc-net/management-syllabus"},
      {label:"JRFAdda — Trends & Analysis",url:"https://www.jrfadda.com/exams/ugc-net/ugc-net-management/"},
      {label:"NTA Official Portal",url:"https://ugcnet.nta.ac.in/"}
    ],
    topics:[
      {
        id:"mgmt-strategic", name:"Strategic Management", icon:"♟️",
        subtopics:["SWOT Analysis","PESTLE Analysis","Porter's Five Forces","BCG Matrix","Balanced Scorecard","Porter's Generic Strategies","Ansoff Matrix"],
        content:`<h2>Strategic Management — Overview</h2>
<p>8–10 questions in Code 17. Framework-based identification questions are most common. Know who developed each framework.</p>

<h3>📌 1. SWOT Analysis</h3>
<p>Framework to evaluate a company's competitive position.</p>
<ul>
<li><strong>Strengths (Internal+):</strong> What the company does well (e.g., strong brand, low costs)</li>
<li><strong>Weaknesses (Internal−):</strong> Where the company lacks (e.g., high debt, poor distribution)</li>
<li><strong>Opportunities (External+):</strong> Favorable trends in the environment (e.g., new markets, technology)</li>
<li><strong>Threats (External−):</strong> External risks (e.g., new competitors, regulation changes)</li>
</ul>
<p><strong>Key exam rule:</strong> S & W = INTERNAL factors (within the organization). O & T = EXTERNAL (environment).</p>
<p>Attributed to Kenneth Andrews (1970s, Harvard Business School).</p>

<h3>📌 2. PESTLE Analysis (Macro Environment)</h3>
<ul>
<li><strong>P</strong>olitical: Government policies, political stability, taxation, trade restrictions</li>
<li><strong>E</strong>conomic: GDP growth, inflation, interest rates, exchange rates, unemployment</li>
<li><strong>S</strong>ocial: Demographics, culture, lifestyle trends, education levels, consumer attitudes</li>
<li><strong>T</strong>echnological: R&D, automation, AI, digital disruption, technology adoption rates</li>
<li><strong>L</strong>egal: Employment law, consumer protection, health & safety regulations, IP laws</li>
<li><strong>E</strong>nvironmental: Climate change, carbon footprint, sustainability requirements, green laws</li>
</ul>

<h3>📌 3. Porter's Five Forces (Michael Porter, 1979)</h3>
<p>Determines industry attractiveness and competitive intensity.</p>
<ul>
<li><strong>Threat of New Entrants:</strong> High entry barriers = low threat (favorable). Barriers: economies of scale, capital requirements, brand loyalty, patents.</li>
<li><strong>Bargaining Power of Suppliers:</strong> Few suppliers = high power = unfavorable. Many suppliers = low power = favorable.</li>
<li><strong>Bargaining Power of Buyers:</strong> Few buyers buying in bulk = high power = unfavorable.</li>
<li><strong>Threat of Substitutes:</strong> Products that can replace yours. Higher threat = lower pricing power.</li>
<li><strong>Competitive Rivalry:</strong> Number and strength of existing competitors. High rivalry = lower profits.</li>
</ul>
<p><strong>General rule:</strong> High forces = unattractive industry. Low forces = attractive industry.</p>

<h3>📌 4. BCG Matrix (Bruce Henderson, Boston Consulting Group, 1970)</h3>
<p>Portfolio analysis tool. 2×2 matrix based on Market Growth Rate (Y-axis) and Relative Market Share (X-axis).</p>
<ul>
<li><strong>⭐ Stars (High Growth + High Share):</strong> Growing rapidly, need heavy investment to maintain position. Future Cash Cows.</li>
<li><strong>🐄 Cash Cows (Low Growth + High Share):</strong> Established, profitable, generate more cash than needed. "Milk" them to fund Stars and Question Marks.</li>
<li><strong>❓ Question Marks (High Growth + Low Share):</strong> Growing market but weak position. Either invest heavily to become Stars OR divest.</li>
<li><strong>🐕 Dogs (Low Growth + Low Share):</strong> Weak in declining market. Divest or harvest remaining cash. Avoid over-investment.</li>
</ul>

<h3>📌 5. Balanced Scorecard (Kaplan & Norton, 1992)</h3>
<p>Strategic management tool with 4 perspectives:</p>
<ul>
<li><strong>Financial:</strong> Revenue, profit, ROI, EVA, shareholder value</li>
<li><strong>Customer:</strong> Satisfaction, retention, market share, brand perception</li>
<li><strong>Internal Business Process:</strong> Efficiency, quality, innovation, cycle time</li>
<li><strong>Learning & Growth:</strong> Employee skills, knowledge management, culture, IT infrastructure</li>
</ul>
<p>Logic: Learning drives internal processes → drives customer satisfaction → drives financial results.</p>

<h3>📌 6. Porter's Generic Strategies (Michael Porter, 1980)</h3>
<ul>
<li><strong>Cost Leadership:</strong> Be the lowest-cost producer in the industry for broad market. (Walmart, Decathlon)</li>
<li><strong>Differentiation:</strong> Offer unique product/service for broad market. (Apple, BMW)</li>
<li><strong>Focus — Cost:</strong> Low cost for a specific narrow segment</li>
<li><strong>Focus — Differentiation:</strong> Unique product for a specific narrow segment</li>
</ul>
<p><strong>"Stuck in the Middle":</strong> Company that fails to choose any strategy clearly — performs poorly.</p>`,
        tricks:[
          {title:"BCG Matrix — Animal Mnemonics",tip:"Stars=shining (invest!). Cash Cows=dairy farm (milk for cash). Question Marks=uncertain (?). Dogs=eliminate. Product lifecycle: Star→Cash Cow→Dog as market growth slows. Question Mark can become Star with investment."},
          {title:"Porter's 5 Forces — Cross Diagram",tip:"Draw a + sign. Center=Rivalry. Top=New Entrants. Bottom=Substitutes. Left=Suppliers. Right=Buyers. All 5 'attack' the center. More force = less profit for center industry."},
          {title:"BSC Perspectives — FCIL",tip:"Financial→Customer→Internal→Learning. 'Fat Cats In London' (FCIL). Reading bottom-up: Learning enables Internal processes, which creates Customer value, which produces Financial results."},
          {title:"SWOT Categories — IN vs OUT",tip:"S and W are INternal (inside the company — management CAN control). O and T are OUTside/external (market forces — management CANNOT fully control, only respond to)."}
        ],
        prevYrQs:[
          {q:"In BCG Matrix, a business with high relative market share in slow-growing market is called:",a:"CASH COW. It generates more cash than needed. Strategy: Milk/harvest the profits to fund Stars and Question Marks. Do not over-invest in it.",year:"UGC NET 2023"},
          {q:"Balanced Scorecard was developed by:",a:"Robert S. Kaplan and David P. Norton, published in Harvard Business Review in 1992. 4 perspectives: Financial, Customer, Internal Business Process, Learning & Growth.",year:"UGC NET 2024"}
        ]
      },
      {
        id:"mgmt-ba", name:"Business Statistics & Analytics", icon:"📊",
        subtopics:["Descriptive Statistics","Probability & Distributions","Regression Analysis","Hypothesis Testing","Big Data & Analytics Types","Decision Theory","Business Intelligence Tools"],
        content:`<h2>Business Statistics & Analytics — Your MBA Strength!</h2>
<p>Since you're studying Business Analytics, this unit is your competitive advantage. Expect <strong>8–10 questions</strong> — mix of conceptual and calculation-based.</p>

<h3>📌 1. Descriptive Statistics</h3>
<p><strong>Measures of Central Tendency:</strong></p>
<ul>
<li><strong>Mean:</strong> Sum ÷ Count. Affected by extreme values (outliers).</li>
<li><strong>Median:</strong> Middle value when sorted. Not affected by outliers. Use for skewed data.</li>
<li><strong>Mode:</strong> Most frequent value. Only measure for nominal data.</li>
<li><strong>When to use what:</strong> Normal distribution → Mean. Skewed data → Median. Categorical data → Mode.</li>
</ul>
<p><strong>Measures of Dispersion:</strong></p>
<ul>
<li>Range = Max − Min (crude, affected by outliers)</li>
<li>Variance = Average of squared deviations from mean</li>
<li>Standard Deviation (σ) = √Variance (same units as data)</li>
<li>Coefficient of Variation (CV) = (σ/Mean) × 100 — used to compare variability across different scales</li>
</ul>

<h3>📌 2. Probability</h3>
<ul>
<li>P(A or B) = P(A) + P(B) − P(A and B) [Addition Rule]</li>
<li>P(A and B) = P(A) × P(B|A) [Multiplication Rule for dependent events]</li>
<li>P(A and B) = P(A) × P(B) [If A and B are INDEPENDENT]</li>
<li>P(Not A) = 1 − P(A)</li>
<li><strong>Bayes' Theorem:</strong> P(A|B) = P(B|A) × P(A) / P(B)</li>
</ul>
<p><strong>Key distributions:</strong></p>
<ul>
<li>Binomial: Fixed trials, 2 outcomes (success/failure), each independent</li>
<li>Poisson: Count of events in fixed time/space (call center arrivals, accidents per month)</li>
<li>Normal: Bell curve, symmetric, mean=median=mode. 68-95-99.7 rule.</li>
</ul>

<h3>📌 3. Regression Analysis</h3>
<ul>
<li>Simple Regression: Y = a + bX (1 independent variable)</li>
<li>Multiple Regression: Y = a + b₁X₁ + b₂X₂ + ... (multiple IVs)</li>
<li><strong>b (slope):</strong> For 1-unit increase in X, Y changes by b units</li>
<li><strong>R² (Coefficient of Determination):</strong> % of variance in Y explained by X. Range: 0 to 1. Higher = better fit.</li>
</ul>

<h3>📌 4. Hypothesis Testing</h3>
<ul>
<li><strong>Null Hypothesis (H₀):</strong> No difference/effect exists</li>
<li><strong>Alternative Hypothesis (H₁):</strong> Difference/effect exists</li>
<li><strong>p-value < α (0.05):</strong> Reject H₀ = statistically significant result</li>
<li><strong>p-value ≥ 0.05:</strong> Fail to reject H₀ = not significant</li>
<li>t-test: Compare means of 2 groups | ANOVA: Compare means of 3+ groups | Chi-Square: Test of independence for categorical data</li>
</ul>

<h3>📌 5. Business Analytics Types (MOST IMPORTANT!)</h3>
<ul>
<li><strong>Descriptive Analytics:</strong> "What happened?" — Dashboards, reports, historical data. Backward-looking.</li>
<li><strong>Diagnostic Analytics:</strong> "Why did it happen?" — Drill-down analysis, root cause analysis. Backward-looking.</li>
<li><strong>Predictive Analytics:</strong> "What will happen?" — Statistical models, machine learning, forecasting. Forward-looking.</li>
<li><strong>Prescriptive Analytics:</strong> "What should we do?" — Optimization, simulation, recommendations. Forward-looking + actionable.</li>
</ul>
<p><strong>Value ladder:</strong> Descriptive → Diagnostic → Predictive → Prescriptive (each level more valuable and complex)</p>

<h3>📌 6. Big Data — 5 Vs</h3>
<ul>
<li><strong>Volume:</strong> Huge amounts of data (terabytes, petabytes)</li>
<li><strong>Velocity:</strong> Generated at high speed (real-time streaming)</li>
<li><strong>Variety:</strong> Structured (tables) + Unstructured (text, images, video) + Semi-structured</li>
<li><strong>Veracity:</strong> Accuracy, reliability, quality — "garbage in, garbage out"</li>
<li><strong>Value:</strong> Business insights and ROI extracted from data</li>
</ul>
<p>Original 3 Vs by Gartner: Volume, Velocity, Variety. Veracity and Value added later.</p>`,
        tricks:[
          {title:"Analytics Ladder — DDPP",tip:"Descriptive(What?)→Diagnostic(Why?)→Predictive(What will?)→Prescriptive(What to do?). Each level is more advanced. 'Data Drives Powerful Prescriptions'. Think of a doctor: describe symptoms → diagnose → predict outcome → prescribe treatment."},
          {title:"5 Vs of Big Data — VVVVV",tip:"Volume-Velocity-Variety-Veracity-Value. Remember: A big data project needs all 5 Vs to be successful. Original Gartner 3 Vs: Volume, Velocity, Variety. Veracity(accuracy) + Value(business ROI) added later."},
          {title:"p-value Rule Simplified",tip:"p < 0.05 → Reject H₀ (significant). p ≥ 0.05 → Fail to reject H₀ (not significant). 'p is small = problem for H₀ = reject it.' You never ACCEPT H₀ — you only 'fail to reject' it."},
          {title:"Mean vs Median — Which to Use?",tip:"Salary/Income data → MEDIAN (one billionaire skews the mean upward). Test scores (normal distribution) → MEAN. Any skewed data → MEDIAN. Categorical data (colors, brands) → MODE. Always ask: Are there outliers?"}
        ],
        prevYrQs:[
          {q:"Which type of analytics answers 'What will happen in the future?'",a:"PREDICTIVE Analytics — uses historical data, statistical models, and machine learning algorithms to forecast future outcomes. Examples: sales forecasting, customer churn prediction.",year:"UGC NET 2024"},
          {q:"R² value in regression analysis represents:",a:"The coefficient of determination — proportion of variance in the dependent variable (Y) explained by the independent variable(s) (X). Range: 0 to 1. Higher R² = better model fit.",year:"UGC NET 2023"}
        ]
      }
    ]
  },

  sbi: {
    name:"SBI PO", icon:"🏛️", gradient:"linear-gradient(135deg,#052e16,#166534)",
    mockConfig:{ prelims:{qs:100,time:60,label:"Prelims — 100 Qs / 60 min"} },
    pyqLinks:[
      {label:"Adda247 — SBI PO PYQs 2016–2025",url:"https://www.adda247.com/jobs/sbi-po-previous-year-question-papers/"},
      {label:"Testbook — SBI PO Online Tests",url:"https://testbook.com/sbi-po/previous-year-papers"},
      {label:"CareerPower — Section-wise PDF",url:"https://www.careerpower.in/sbi-po-previous-year-question-paper.html"},
      {label:"SBI Official Careers",url:"https://sbi.co.in/web/careers"},
      {label:"Oliveboard — SBI PO Free Mock Test",url:"https://www.oliveboard.in/sbi-po-mock-test/"},
      {label:"Cracku — SBI PO Practice Sets",url:"https://cracku.in/sbi-po-previous-papers"}
    ],
    topics:[
      {
        id:"sbi-di", name:"Data Analysis & Interpretation", icon:"📊",
        subtopics:["Bar Charts","Pie Charts","Line Graphs","Tabular DI","Caselet DI","Mixed DI","Data Sufficiency"],
        content:`<h2>Data Interpretation — The Heart of SBI PO Mains</h2>
<p>SBI PO Mains has a dedicated <strong>Data Analysis & Interpretation</strong> section worth 60 marks (30 questions × 2 marks). This is the biggest differentiating section. Mastering DI can make or break your selection.</p>

<h3>📌 1. Bar Chart DI</h3>
<p>Vertical or horizontal bars represent values for different categories or time periods.</p>
<p><strong>How to read:</strong> Always check the Y-axis scale first — if it says "in thousands", every value must be multiplied. Look at the title to understand what is being measured.</p>
<p><strong>Common question types:</strong></p>
<ul>
<li>Percentage increase/decrease from one year to another</li>
<li>Ratio between two bars</li>
<li>Which bar is highest/lowest and by how much</li>
<li>Average of all bars</li>
</ul>

<h3>📌 2. Pie Chart DI</h3>
<p>Circle divided into sectors. Each sector = a percentage of the total.</p>
<p><strong>Key formulas:</strong></p>
<ul>
<li>Sector % = (Degree of sector / 360) × 100</li>
<li>Value of sector = (% / 100) × Total value</li>
<li>1% = 3.6° | 25% = 90° | 50% = 180° | 33.3% = 120°</li>
</ul>
<p><strong>Trick:</strong> Memorize common percentage-degree conversions to save time in the exam.</p>

<h3>📌 3. Line Graph DI</h3>
<p>Shows trends over time. Each point connected by a line.</p>
<ul>
<li>Upward slope = increasing trend</li>
<li>Downward slope = decreasing trend</li>
<li>Steepest slope = maximum rate of change</li>
<li>Flat line = no change</li>
</ul>
<p>Questions often ask for the year of maximum growth, minimum value, or average across years.</p>

<h3>📌 4. Tabular DI</h3>
<p>Data given in rows and columns. Most straightforward but can involve complex calculations.</p>
<p><strong>Strategy:</strong> First scan ALL the data in the table. Identify what each row and column represents. Then answer questions one at a time — don't calculate everything at once.</p>

<h3>📌 5. Caselet DI (Most Difficult!)</h3>
<p>Data given in paragraph/story form — no chart! You must extract the numbers yourself.</p>
<p><strong>Step-by-step approach:</strong></p>
<ul>
<li>Step 1: Read the paragraph once fully without solving</li>
<li>Step 2: Draw a blank table on rough paper (rows = entities, columns = attributes)</li>
<li>Step 3: Fill the table as you re-read slowly</li>
<li>Step 4: Check every number fits logically (totals, percentages add up)</li>
<li>Step 5: Now answer the questions</li>
</ul>
<p>Practice caselet DI daily — it's the most asked type in SBI PO Mains.</p>

<h3>📌 6. Mixed/Combined DI</h3>
<p>Two charts together — e.g., a bar chart + pie chart — and questions combine data from both.</p>
<p><strong>Approach:</strong> Read both charts first. Mark the connection between them (usually the same entity viewed from two angles).</p>

<h3>📌 7. Data Sufficiency</h3>
<p>A question is given with two statements. You must decide if the data is sufficient to answer — without actually solving.</p>
<p><strong>Answer choices typically:</strong></p>
<ul>
<li>A — Statement 1 alone sufficient</li>
<li>B — Statement 2 alone sufficient</li>
<li>C — Both together sufficient</li>
<li>D — Either alone sufficient</li>
<li>E — Neither sufficient even together</li>
</ul>
<p><strong>Key:</strong> You only need to check sufficiency, not actually calculate the answer.</p>`,
        tricks:[
          {title:"Pie Chart Degree Shortcut",tip:"Memorize: 10%=36°, 20%=72°, 25%=90°, 33.3%=120°, 50%=180°. For any degree: % = degree ÷ 3.6. For any %: degree = % × 3.6. Saves 20 seconds per question!"},
          {title:"Caselet Table Method",tip:"Always make a table BEFORE reading the caselet data. Draw rows (people/companies/items) and columns (attributes like salary, marks, percentage). Fill as you read. Never try to hold all numbers in your head."},
          {title:"Approximation in DI",tip:"In MCQ DI, never calculate exact answers. Round values to nearest 5 or 10. The correct option will be closest to your approximation. This saves 30-40 seconds per question set."},
          {title:"% Change Formula",tip:"% change = (New − Old) / Old × 100. If value goes 200→250: (250-200)/200×100 = 25% increase. Quick check: if new/old > 1, it's an increase; less than 1, a decrease."},
          {title:"SBI DI Strategy",tip:"In 45 minutes for DI section: attempt 2 complete sets (10 Qs) perfectly rather than 3 sets partially. Bar charts and line graphs first (5 min each). Caselet last (10 min). Never attempt a set you can't finish."}
        ],
        prevYrQs:[
          {q:"A pie chart shows expenses: Food=30%, Rent=25%, Transport=15%, Savings=20%, Other=10%. Total income=₹50,000. Amount saved?",a:"Savings = 20% of ₹50,000 = ₹10,000.",year:"SBI PO 2024"},
          {q:"Bar chart shows sales (₹ crore): 2020=40, 2021=50, 2022=60, 2023=55, 2024=70. Percentage increase from 2020 to 2024?",a:"Increase = (70-40)/40 × 100 = 30/40 × 100 = 75%.",year:"SBI PO 2023"},
          {q:"Caselet: A company has 60 employees. 40% are in Sales, 35% in HR, rest in Finance. How many in Finance?",a:"Sales=24, HR=21, Finance=60-(24+21)=15 employees.",year:"SBI PO 2024"}
        ]
      },
      {
        id:"sbi-english", name:"English + Descriptive Paper", icon:"📖",
        subtopics:["Advanced Reading Comprehension","Para Jumbles","Error Detection","Essay Writing","Formal Letter Writing","Email Writing","Precis Writing"],
        content:`<h2>English + Descriptive — SBI PO's Unique Feature</h2>
<p>SBI PO has <strong>two English tests</strong>: an Objective section (like IBPS) + a unique <strong>30-minute Descriptive Paper</strong> (Essay + Letter/Email) worth 50 marks. The descriptive paper is typed on a computer and evaluated manually.</p>

<h3>📌 1. Advanced RC Patterns in SBI</h3>
<p>SBI RC passages are longer (500-700 words) and more complex than IBPS. Topics include economics, social policy, global affairs, technology.</p>
<p><strong>SBI-specific question types:</strong></p>
<ul>
<li><strong>Inference questions:</strong> What can be concluded from paragraph 3?</li>
<li><strong>Tone/attitude questions:</strong> The author's tone is best described as...</li>
<li><strong>Theme questions:</strong> The central idea of the passage is...</li>
<li><strong>Vocabulary in context:</strong> The word "XYZ" in line 12 most nearly means...</li>
</ul>
<p><strong>Strategy:</strong> For SBI RC, always identify the author's main argument in the first and last paragraph. These contain the thesis and conclusion.</p>

<h3>📌 2. Essay Writing (250 words, 25 marks)</h3>
<p><strong>Always follow this 5-paragraph structure:</strong></p>
<ul>
<li><strong>Introduction (40 words):</strong> Define the topic. Give one striking fact or context. End with what the essay will cover.</li>
<li><strong>Paragraph 1 (60 words):</strong> First main point + one specific example or data.</li>
<li><strong>Paragraph 2 (60 words):</strong> Second main point + example.</li>
<li><strong>Counter-argument (40 words):</strong> Acknowledge opposing view briefly. This shows balanced thinking and impresses evaluators.</li>
<li><strong>Conclusion (40 words):</strong> Summarize, give a way forward or future outlook. Never end abruptly.</li>
</ul>
<p><strong>Common SBI PO Essay Topics (must prepare all):</strong></p>
<ul>
<li>Digital India & Financial Inclusion</li>
<li>Artificial Intelligence in Banking</li>
<li>Climate Change & the Indian Economy</li>
<li>Financial Literacy in Rural India</li>
<li>India's GDP Growth Story</li>
<li>Startup Ecosystem in India</li>
<li>Women Empowerment & Banking</li>
<li>UPI & Cashless Economy</li>
</ul>

<h3>📌 3. Formal Letter Writing (150 words, 25 marks)</h3>
<p><strong>Standard formal letter format:</strong></p>
<ul>
<li>Sender's address (top right)</li>
<li>Date below address</li>
<li>Receiver's designation and address</li>
<li>Subject line (bold, specific)</li>
<li>Salutation: Dear Sir/Madam</li>
<li>Body: Opening sentence (state purpose) + Details + Request/Action</li>
<li>Closing: Yours faithfully / Yours sincerely</li>
<li>Signature + Name</li>
</ul>
<p><strong>Common letter topics:</strong> Complaint about fraudulent transaction, Request for loan, Grievance about bank service, Nomination update request, Address change request.</p>
<p><strong>Yours faithfully</strong> = when you don't know the person's name (Dear Sir/Madam). <strong>Yours sincerely</strong> = when you know their name (Dear Mr. Sharma).</p>

<h3>📌 4. Precis Writing</h3>
<p>Reduce a passage to exactly 1/3 of its original length while retaining ALL key points.</p>
<p><strong>Rules:</strong></p>
<ul>
<li>Write in your own words — never copy sentences</li>
<li>Remove all examples, repetitions, and elaborations</li>
<li>Maintain the logical flow of the original</li>
<li>Give a suitable title to your precis</li>
<li>Count words: Original 300 words → Precis = 100 words</li>
</ul>`,
        tricks:[
          {title:"Essay Introduction Formula",tip:"'In the [adjective] era of [topic], [one striking fact/statistic]. This essay examines [what you'll cover] and proposes [solution/outlook].' Never start with 'I think' or 'In my opinion' — these sound informal in formal essays."},
          {title:"Letter Closing Rules",tip:"Yours faithfully = unknown recipient (Dear Sir/Madam). Yours sincerely = known name (Dear Mr./Ms. Name). NEVER use: Yours lovingly, Yours affectionately, Thanks and regards in formal bank letters."},
          {title:"Precis — Underline Method",tip:"Read passage once. On second reading, underline ONLY the topic sentence of each paragraph (usually first sentence). Your precis = linking these underlined sentences in your own words. Total length = 1/3 of original."},
          {title:"Formal Vocabulary for Essays",tip:"Use these words to score higher: 'consequently, furthermore, notwithstanding, albeit, henceforth, judiciously, imperatively, substantiate, proliferation, paradigm shift'. Avoid: very, really, nice, good, bad, big."},
          {title:"SBI Descriptive Time Plan",tip:"30 minutes total: Spend 2 min planning essay (bullet points). Write essay in 13 min. Spend 2 min planning letter. Write letter in 10 min. Keep 3 min for review. Never write without planning first!"}
        ],
        prevYrQs:[
          {q:"Write a letter to the branch manager about a fraudulent transaction in your account.",a:"Use formal format. Mention: date of fraud, amount, transaction ID, that you didn't authorize it. Request: immediate investigation, reversal of amount, and blocking of card.",year:"SBI PO 2024"},
          {q:"Write an essay on 'Role of Digital Payments in India's Economic Growth' (250 words).",a:"Structure: Intro (UPI stats/context) → Point 1 (financial inclusion) → Point 2 (economic efficiency) → Counter (cybersecurity risks) → Conclusion (government push, future scope).",year:"SBI PO 2023"}
        ]
      },
      {
        id:"sbi-banking", name:"Banking & Economy Awareness", icon:"🌏",
        subtopics:["SBI History & Facts","RBI Advanced Concepts","Types of Banks","Financial Markets","Government Schemes","Economic Indicators"],
        content:`<h2>Banking & Economy Awareness — SBI Mains Differentiator</h2>
<p>SBI PO Mains has 50 Banking/Economy questions (2 marks each = 100 marks), 45 minutes. Questions are more advanced than IBPS — they test economic concepts, not just basic banking facts.</p>

<h3>📌 1. SBI — Key Facts</h3>
<ul>
<li><strong>Founded:</strong> 1955 (as SBI). Parent: Imperial Bank of India (1921) → Bank of Calcutta (1806)</li>
<li><strong>Headquarters:</strong> Mumbai | <strong>MD & CEO:</strong> Check current from SBI website</li>
<li><strong>Tagline:</strong> "The Banker to Every Indian" | "With you all the way"</li>
<li><strong>Largest bank in India</strong> by assets, deposits, branches, and employees</li>
<li><strong>Associate banks merged:</strong> 2017 — 5 associate banks + Bharatiya Mahila Bank merged into SBI</li>
</ul>

<h3>📌 2. RBI Advanced Concepts</h3>
<ul>
<li><strong>Monetary Policy Committee (MPC):</strong> 6 members (3 RBI + 3 Govt). Meets every 2 months. Governor has casting vote.</li>
<li><strong>Open Market Operations (OMO):</strong> RBI buys/sells govt securities to inject/absorb liquidity</li>
<li><strong>Liquidity Adjustment Facility (LAF):</strong> Repo + Reverse Repo combined mechanism</li>
<li><strong>Standing Deposit Facility (SDF):</strong> Banks park excess money with RBI at rate slightly below repo (no collateral needed)</li>
<li><strong>Inflation Targeting:</strong> RBI targets CPI inflation at 4% ± 2% band (2%-6%)</li>
<li><strong>Priority Sector Lending:</strong> Banks must lend 40% of ANBC to priority sectors (agriculture, MSME, education, housing)</li>
</ul>

<h3>📌 3. Types of Banks in India</h3>
<ul>
<li><strong>Public Sector Banks:</strong> SBI, PNB, BOB, Canara Bank, UCO Bank (Govt owns majority)</li>
<li><strong>Private Sector Banks:</strong> HDFC, ICICI, Axis, Kotak, IndusInd</li>
<li><strong>Foreign Banks:</strong> Citibank, HSBC, Standard Chartered, DBS</li>
<li><strong>Regional Rural Banks (RRBs):</strong> Rural area focus, sponsored by PSBs</li>
<li><strong>Small Finance Banks:</strong> Jana, AU, Ujjivan, Equitas — for underserved segments</li>
<li><strong>Payment Banks:</strong> Airtel, Jio, India Post — limited banking services (no loans)</li>
</ul>

<h3>📌 4. Key Economic Indicators</h3>
<ul>
<li><strong>GDP:</strong> Gross Domestic Product — total value of goods and services produced in India</li>
<li><strong>GVA:</strong> Gross Value Added = GDP - Taxes + Subsidies</li>
<li><strong>Repo Rate:</strong> Controls money supply and inflation (higher repo = costlier loans = less spending = less inflation)</li>
<li><strong>CPI vs WPI:</strong> CPI = Consumer Price Index (retail prices, used for monetary policy). WPI = Wholesale Price Index (wholesale prices, older measure)</li>
<li><strong>Fiscal Deficit:</strong> Govt expenditure exceeds revenue. Funded by borrowing.</li>
<li><strong>Current Account Deficit (CAD):</strong> Imports exceed exports</li>
</ul>

<h3>📌 5. Important Financial Regulators</h3>
<ul>
<li>Banking → RBI | Capital Markets → SEBI | Insurance → IRDAI | Pensions → PFRDA</li>
<li>Competition → CCI | Commodity Markets → SEBI (absorbed FMC in 2015)</li>
<li>GST → GST Council | Income Tax → CBDT | Customs → CBIC</li>
</ul>`,
        tricks:[
          {title:"SBI vs IBPS GK Difference",tip:"IBPS asks: What is Repo Rate? SBI asks: How does RBI use OMO to manage liquidity during inflationary pressures? Always prepare for conceptual depth, not just definitions, for SBI PO."},
          {title:"Regulators Memory Aid",tip:"Banking=RBI, Capital=SEBI, Insurance=IRDAI, Pension=PFRDA. 'Big Cats Should Insure Pension Funds' = B(anking)→RBI, C(apital)→SEBI, S(elf)→IRDAI(insurance), P(ension)→PFRDA."},
          {title:"MPC Composition Easy Recall",tip:"6=3+3. Three from RBI side: Governor(chair)+2 officers. Three from Govt side: external experts appointed by Ministry. Voting: unanimous preferred; if tie, Governor gets casting vote."},
          {title:"Types of Bank Rates",tip:"Repo(lend short-term to banks) > Reverse Repo(borrow from banks) > SDF(new: banks park funds, below repo) > MSF(emergency overnight, above repo) > Bank Rate(long-term, highest). Think: borrowing costs ladder."}
        ],
        prevYrQs:[
          {q:"Which committee recommended the formation of Small Finance Banks?",a:"Nachiket Mor Committee (2013) recommended differentiated banking licences including Small Finance Banks and Payment Banks for financial inclusion.",year:"SBI PO 2023"},
          {q:"SBI was formed in 1955 from which bank?",a:"Imperial Bank of India (established 1921). Imperial Bank itself was formed from three presidency banks: Bank of Bengal (1806), Bank of Bombay (1840), Bank of Madras (1843).",year:"SBI PO 2022"}
        ]
      },
      {
        id:"sbi-reasoning", name:"Reasoning & Computer Aptitude", icon:"🧠",
        subtopics:["Advanced Puzzles","Critical Reasoning","Argument Evaluation","Statement & Assumption","Input-Output Machine","Computer Concepts"],
        content:`<h2>Reasoning & Computer Aptitude — SBI PO Mains</h2>
<p>SBI Mains: <strong>45 questions, 60 marks, 60 minutes</strong>. SBI reasoning is significantly harder than IBPS — puzzles are more complex, and there are critical reasoning questions unique to SBI.</p>

<h3>📌 1. Advanced Puzzles (SBI-Level)</h3>
<p>SBI puzzles typically have 4-5 constraints simultaneously. Common types:</p>
<ul>
<li><strong>Double-Row Arrangement:</strong> Row 1 faces South, Row 2 faces North — facing each other</li>
<li><strong>Month-Year Puzzle:</strong> Events in different months/years with inter-conditions</li>
<li><strong>Complex Floor+Flat:</strong> People in flats on different floors of a building</li>
<li><strong>Circular + Blood Relation Combined:</strong> People sitting in circle + family relations</li>
</ul>
<p><strong>SBI puzzle approach:</strong> Always list ALL conditions first. Mark definite clues (exact positions) first. Use elimination for relative clues. Re-verify all conditions after solving.</p>

<h3>📌 2. Critical Reasoning (SBI-Specific!)</h3>
<p>These question types don't appear in IBPS. They test logical thinking.</p>
<p><strong>Strengthen the Argument:</strong> Which option provides additional support for the conclusion?</p>
<p><strong>Weaken the Argument:</strong> Which option undermines the logic or evidence?</p>
<p><strong>Assumption:</strong> What unstated premise must be TRUE for the argument to hold?</p>
<p><strong>Inference:</strong> What can be logically CONCLUDED from the given statements?</p>
<p><strong>Golden Rule:</strong> The correct answer must stay within the SCOPE of the argument. Answers that go beyond or introduce new topics are almost always wrong.</p>

<h3>📌 3. Statement & Assumption</h3>
<p>A statement is given. You must identify which assumption is implicit (hidden, taken for granted).</p>
<p><strong>Implicit assumption test:</strong></p>
<ul>
<li>If the assumption is FALSE, does the statement fall apart? → Then it IS implicit.</li>
<li>If the assumption is already stated in the statement → NOT implicit (already explicit).</li>
<li>If the assumption is too extreme or universal → NOT implicit.</li>
</ul>

<h3>📌 4. Course of Action</h3>
<p>A problem is given. You evaluate which course of action is practical and follows logically.</p>
<p><strong>A course of action is valid if:</strong></p>
<ul>
<li>It directly addresses the problem stated</li>
<li>It is practically feasible</li>
<li>It doesn't introduce a new problem</li>
</ul>

<h3>📌 5. Computer Aptitude (SBI-Specific)</h3>
<p>SBI tests computer aptitude (not just awareness). Includes coding concepts, number systems, and logical operations.</p>
<ul>
<li>Binary arithmetic: addition, subtraction in binary</li>
<li>Logic gates: AND, OR, NOT, NAND, NOR — truth tables</li>
<li>Database concepts: SQL basics, tables, queries</li>
<li>Networking: OSI model layers, IP addressing</li>
</ul>`,
        tricks:[
          {title:"Critical Reasoning Scope Rule",tip:"Always ask: 'Is this answer within the topic of the argument?' If the passage is about 'bank employees' and an option says 'all employees everywhere', it's outside scope = WRONG. Correct answers stay laser-focused on the specific argument."},
          {title:"Weaken vs Strengthen Quick Test",tip:"Strengthen: provides evidence that supports the conclusion OR attacks an objection to the conclusion. Weaken: provides evidence against the conclusion OR supports an alternative cause. The strongest weakener directly attacks the MAIN PREMISE."},
          {title:"Double-Row Puzzle Setup",tip:"Draw two parallel rows. Row A: persons facing ↓ South. Row B: persons facing ↑ North. Person at position 3 in Row A faces person at position 3 in Row B (directly opposite). Label positions 1-5 from LEFT for each row."},
          {title:"Assumption Detection Trick",tip:"Negate the assumption. If negating it makes the argument collapse/fail → it IS an implicit assumption. Example: 'All students should study daily.' Assumption: 'Students want to improve their grades.' Negate: 'Students don't want to improve' → argument collapses → it IS implicit."}
        ],
        prevYrQs:[
          {q:"Statement: 'Banks should give loans only to salaried individuals.' Which weakens this?",a:"'Many self-employed individuals have better loan repayment track records than salaried persons.' This directly undermines the premise that salaried = safer borrowers.",year:"SBI PO 2023"},
          {q:"What is the output of: AND gate with inputs A=1, B=0?",a:"Output = 0. AND gate output is 1 ONLY when ALL inputs are 1. Since B=0, output = 0.",year:"SBI PO 2022"}
        ]
      },
      {
        id:"sbi-quant", name:"Quantitative Aptitude", icon:"🔢",
        subtopics:["Arithmetic","Number Series","Quadratic Equations","Mensuration","Time & Work","Probability","Permutation & Combination"],
        content:`<h2>Quantitative Aptitude — SBI PO</h2>
<p>SBI PO Prelims: <strong>35 questions, 35 marks, 20 minutes</strong>. Same syllabus as IBPS but SBI Mains DI is harder (covered separately). Focus on speed and accuracy in Prelims.</p>

<h3>📌 1. Probability</h3>
<p><strong>P(event) = Favourable outcomes / Total outcomes</strong></p>
<ul>
<li>P(A or B) = P(A) + P(B) − P(A and B)</li>
<li>P(A and B) = P(A) × P(B) [if independent]</li>
<li>P(not A) = 1 − P(A)</li>
<li><strong>P(at least one) = 1 − P(none)</strong> — Always use this shortcut!</li>
</ul>
<p><strong>Coin problems:</strong> P(head) = 1/2. P(n heads in n tosses) = (1/2)ⁿ</p>
<p><strong>Dice problems:</strong> Total outcomes for 1 die = 6. For 2 dice = 36.</p>
<p><strong>Card problems:</strong> Total = 52. Hearts/Diamonds/Clubs/Spades = 13 each. Face cards = 3 per suit × 4 = 12. Aces = 4.</p>

<h3>📌 2. Permutation & Combination</h3>
<p><strong>nPr</strong> = n! / (n−r)! → Used when ORDER matters (arrangements, passwords, queues)</p>
<p><strong>nCr</strong> = n! / (r! × (n−r)!) → Used when order DOESN'T matter (selections, committees, teams)</p>
<p><strong>Quick memory test:</strong> "How many ways to arrange 5 books?" = ORDER matters = Permutation = 5P5 = 120</p>
<p>"How many ways to choose 3 from 5 books?" = order doesn't matter = Combination = 5C3 = 10</p>
<p><strong>Special cases:</strong></p>
<ul>
<li>Circular arrangement: (n−1)! ways</li>
<li>Identical items: n! / (p! × q! × r!) where p, q, r are repeated items</li>
</ul>

<h3>📌 3. Mensuration</h3>
<p><strong>2D Shapes:</strong></p>
<ul>
<li>Rectangle: Area = l×b | Perimeter = 2(l+b)</li>
<li>Circle: Area = πr² | Circumference = 2πr</li>
<li>Triangle: Area = ½×base×height</li>
<li>Trapezium: Area = ½×(sum of parallel sides)×height</li>
</ul>
<p><strong>3D Shapes:</strong></p>
<ul>
<li>Cube: Volume = a³ | Surface Area = 6a²</li>
<li>Cylinder: Volume = πr²h | CSA = 2πrh | TSA = 2πr(r+h)</li>
<li>Cone: Volume = ⅓πr²h | CSA = πrl (l = slant height)</li>
<li>Sphere: Volume = ⁴⁄₃πr³ | Surface Area = 4πr²</li>
</ul>

<h3>📌 4. Mixture & Alligation</h3>
<p>Find ratio in which two items (at different costs) should be mixed to get a mean cost.</p>
<p><strong>Rule:</strong> (Higher − Mean) : (Mean − Lower) = Quantity of Lower : Quantity of Higher</p>
<p><strong>Example:</strong> Mix milk at ₹40/L and ₹25/L to get ₹30/L. Ratio = (40-30):(30-25) = 10:5 = 2:1. Use 2 parts ₹25 milk and 1 part ₹40 milk.</p>`,
        tricks:[
          {title:"P(at least one) Magic Formula",tip:"P(at least one) = 1 − P(none). ALWAYS use this. P(at least one head in 4 tosses) = 1 − (1/2)⁴ = 1 − 1/16 = 15/16. Calculating directly is 4x harder!"},
          {title:"Combination vs Permutation — PCA Rule",tip:"Passwords/Queues/Arrangements → Permutation (order matters). Committees/Teams/Selections → Combination (order doesn't). Handshakes between n people = nC2 = n(n-1)/2."},
          {title:"Alligation X-Method",tip:"Draw an X shape. Top-left = higher price, Top-right = lower price, Center = mean price. Cross-subtract: Bottom-left = higher minus mean. Bottom-right = mean minus lower. This gives the ratio of lower:higher."},
          {title:"Mensuration Formula Grouping",tip:"For ALL 3D shapes, Volume involves the base area × height logic. Cube = a² × a = a³. Cylinder = πr² × h. Cone = (1/3) × πr² × h. Sphere = (4/3) × πr² × r = (4/3)πr³."}
        ],
        prevYrQs:[
          {q:"A bag has 4 red, 3 blue, 2 green balls. One ball drawn randomly. P(not blue) = ?",a:"P(not blue) = (4+2)/9 = 6/9 = 2/3. Or: P(not blue) = 1 − P(blue) = 1 − 3/9 = 1 − 1/3 = 2/3.",year:"SBI PO 2024"},
          {q:"In how many ways can 5 people be seated in a circular arrangement?",a:"Circular arrangements = (n−1)! = (5-1)! = 4! = 24 ways.",year:"SBI PO 2023"}
        ]
      }
    ]
  },

  ugcp1: {
    name:"UGC NET Paper 1", icon:"🎓", gradient:"linear-gradient(135deg,#1c0533,#6d28d9)",
    mockConfig:{ paper1:{qs:50,time:60,label:"Paper 1 — 50 Qs / 60 min (No Negative Marking)"} },
    pyqLinks:[
      {label:"NTA Official UGC NET Portal",url:"https://ugcnet.nta.ac.in/"},
      {label:"Scholarify — Free Paper 1 Study Material PDF",url:"https://www.scholarify.in/ugc-net-study-materials-for-paper-1/"},
      {label:"Anuj Jindal — Free Paper 1 Notes & Videos",url:"https://anujjindal.in/ugc-net-jrf-paper-1-free-material/"},
      {label:"Testbook — UGC NET Paper 1 Practice Tests",url:"https://testbook.com/ugc-net/previous-year-papers"},
      {label:"JRFAdda — Paper 1 PYQs & Mock Tests",url:"https://www.jrfadda.com/exams/ugc-net/"},
      {label:"Eduncle — UGC NET Paper 1 Coaching",url:"https://scoop.eduncle.com/ugc-net-coaching"}
    ],
    topics:[
      {
        id:"ugcp1-teaching", name:"Teaching Aptitude", icon:"🏫",
        subtopics:["Concept & Nature of Teaching","Levels of Teaching","Teaching Methods","Learner Characteristics","Teaching Aids","Evaluation Systems"],
        content:`<h2>Teaching Aptitude — Most Scoring Unit in Paper 1</h2>
<p>Usually <strong>5-7 questions</strong> from this unit. Questions are mostly conceptual and scenario-based — they describe a classroom situation and ask which method/approach is appropriate.</p>

<h3>📌 1. Nature and Characteristics of Teaching</h3>
<p>Teaching is a <strong>planned, purposeful interaction</strong> between teacher and learner aimed at bringing about desirable changes in behaviour, knowledge, skills, and attitude.</p>
<p><strong>Key characteristics:</strong></p>
<ul>
<li>Teaching is both an art AND a science — creativity + systematic approach</li>
<li>Teaching ≠ Telling (telling is one-way). Teaching involves interaction.</li>
<li>Teaching is tri-polar: Teacher ↔ Learner ↔ Curriculum</li>
<li>Teaching is a profession requiring specialized knowledge and ethics</li>
</ul>

<h3>📌 2. Levels of Teaching (Most Asked!)</h3>
<p>Three levels, from lowest to highest:</p>
<ul>
<li><strong>Memory Level (Herbartian):</strong> Rote learning, recall of facts. Teacher-centered. No critical thinking involved. Example: "What is the capital of France?" → Paris.</li>
<li><strong>Understanding Level:</strong> Comprehension and application of principles. Student understands WHY. Example: Explaining why Paris became the capital.</li>
<li><strong>Reflective Level (Morrison's):</strong> HIGHEST level. Critical thinking, problem-solving, creativity, evaluation. Student questions, analyzes, and creates new knowledge.</li>
</ul>
<p><strong>Exam question type:</strong> "Which level emphasizes problem-solving?" → Reflective Level. "Which is the lowest?" → Memory Level.</p>

<h3>📌 3. Teaching Methods</h3>
<ul>
<li><strong>Lecture Method:</strong> Teacher speaks, students listen. Suitable for large groups, introducing new concepts. Limitation: passive learning.</li>
<li><strong>Discussion Method:</strong> Two-way interaction. Best for critical thinking, attitude formation, controversial topics.</li>
<li><strong>Demonstration Method:</strong> Teacher shows while explaining. Best for practical/laboratory skills.</li>
<li><strong>Project Method:</strong> Students work on real-world projects over time. Best for creativity, application, problem-solving.</li>
<li><strong>Simulation/Role Play:</strong> Students enact real-life scenarios. Best for professional training (teacher training, medical, management).</li>
<li><strong>Programmed Learning:</strong> Self-paced, step-by-step. Immediate feedback. Based on B.F. Skinner's behaviorism.</li>
<li><strong>Team Teaching:</strong> Two or more teachers co-plan and co-teach the same group. Combines expertise.</li>
<li><strong>Flipped Classroom:</strong> Content at home (videos), activities in class. Reverses traditional homework model.</li>
</ul>

<h3>📌 4. Evaluation Systems</h3>
<ul>
<li><strong>Formative Evaluation:</strong> During learning. Continuous feedback. Improves learning. (Unit tests, quizzes)</li>
<li><strong>Summative Evaluation:</strong> End of course. Certifies achievement. (Final exams)</li>
<li><strong>Diagnostic Evaluation:</strong> Before teaching begins. Identifies existing knowledge and weaknesses.</li>
<li><strong>Criterion-Referenced:</strong> Compares against a fixed standard (pass/fail threshold).</li>
<li><strong>Norm-Referenced:</strong> Compares against peer group performance (rank, percentile).</li>
</ul>

<h3>📌 5. Bloom's Taxonomy (Cognitive Domain)</h3>
<p>Original (1956) from lowest to highest: Knowledge → Comprehension → Application → Analysis → Synthesis → <strong>Evaluation</strong></p>
<p>Revised (2001) from lowest to highest: Remember → Understand → Apply → Analyze → Evaluate → <strong>Create</strong></p>
<p>UGC NET asks about BOTH versions — specify which you're using when answering.</p>`,
        tricks:[
          {title:"3 Levels of Teaching — MUR",tip:"Memory→Understanding→Reflective = MUR. 'MUR-mur softly then REFLECT loudly'. Memory=Herbartian (lowest, old-style), Reflective=Morrison (highest, most valuable). Exams often ask 'highest level' = always Reflective."},
          {title:"Evaluation Type — FOR-SUM-DIAG",tip:"FORmative=FOR improvement (during learning). SUMmative=SUM total (at end, certifies). DIAGnostic=DIAGnose before (find prior knowledge). Easy: FOR(during), SUM(after), DIAG(before). Time sequence: Diagnostic→Formative→Summative."},
          {title:"Teaching Method Recognition",tip:"'Students enact a scenario' = Simulation/Role Play. 'Students work on a real problem over weeks' = Project Method. 'Teacher shows while explaining' = Demonstration. 'Pre-recorded videos at home, activities in class' = Flipped Classroom."},
          {title:"Bloom's Taxonomy — Create is Highest (Revised)",tip:"Original: Knowledge/Recall is lowest, Evaluation is highest. Revised (2001): Remember is lowest, CREATE is highest. If question asks 'revised taxonomy highest level' → CREATE. If original → EVALUATION."}
        ],
        prevYrQs:[
          {q:"Which level of teaching emphasizes problem-solving and critical thinking?",a:"Reflective Level (Morrison's Level) — highest level of teaching. Involves critical analysis, evaluation, and creative problem-solving. Memory Level is lowest.",year:"UGC NET 2023"},
          {q:"Formative evaluation is carried out to:",a:"Monitor student learning progress during instruction and provide continuous feedback to improve both teaching and learning. It is ongoing, not a final judgment.",year:"UGC NET 2024"},
          {q:"The Flipped Classroom model means students:",a:"Watch lecture videos/study content at home, and use class time for interactive activities, discussions, and problem-solving with the teacher.",year:"UGC NET 2023"}
        ]
      },
      {
        id:"ugcp1-research", name:"Research Aptitude", icon:"🔬",
        subtopics:["Types of Research","Research Methods","Research Process","Sampling Methods","Hypothesis","Research Ethics","Data Collection Tools"],
        content:`<h2>Research Aptitude — High Weightage Unit</h2>
<p>Usually <strong>5-7 questions</strong>. Mix of conceptual and application-based (scenario-type) questions.</p>

<h3>📌 1. Types of Research</h3>
<p><strong>By Purpose:</strong></p>
<ul>
<li><strong>Basic/Fundamental/Pure Research:</strong> Aimed at expanding knowledge. No immediate practical application. Example: Newton's laws of motion were pure research.</li>
<li><strong>Applied Research:</strong> Solving specific practical problems. Example: developing a drug for a disease.</li>
<li><strong>Action Research:</strong> Conducted by practitioners to solve immediate problems in their own setting. Example: teacher studies why her students fail mathematics.</li>
</ul>
<p><strong>By Method:</strong></p>
<ul>
<li><strong>Experimental Research:</strong> Manipulates independent variable, measures effect on dependent variable. Involves control and experimental groups. Best for establishing cause-and-effect.</li>
<li><strong>Descriptive Research:</strong> Describes existing conditions without manipulation. Surveys, case studies, observations.</li>
<li><strong>Historical Research:</strong> Studies past events using archives, documents, artefacts.</li>
<li><strong>Qualitative Research:</strong> Non-numerical data. Focuses on meanings, experiences, perceptions. Uses interviews, focus groups.</li>
<li><strong>Quantitative Research:</strong> Numerical data, statistical analysis, surveys with measurable outcomes.</li>
</ul>

<h3>📌 2. Research Process (Steps in Order)</h3>
<ul>
<li>1. Identify and define the research problem</li>
<li>2. Review existing literature</li>
<li>3. Formulate hypothesis</li>
<li>4. Design research methodology</li>
<li>5. Collect data</li>
<li>6. Analyze and interpret data</li>
<li>7. Draw conclusions and write report</li>
</ul>

<h3>📌 3. Sampling Methods</h3>
<ul>
<li><strong>Simple Random Sampling:</strong> Every member has equal probability of selection. Like a lottery.</li>
<li><strong>Stratified Sampling:</strong> Population divided into strata (groups). Random sample from each stratum. Ensures proportional representation.</li>
<li><strong>Cluster Sampling:</strong> Natural groups (clusters) randomly selected. All members of chosen clusters included. Cost-effective for large populations.</li>
<li><strong>Systematic Sampling:</strong> Every nth element selected from a list (e.g., every 10th person).</li>
<li><strong>Purposive/Judgmental Sampling:</strong> Researcher deliberately selects subjects based on judgment. Not random.</li>
<li><strong>Snowball Sampling:</strong> Existing subjects recruit new subjects. Used for hard-to-reach populations.</li>
<li><strong>Convenience Sampling:</strong> Whoever is easily available. Least reliable but quickest.</li>
</ul>

<h3>📌 4. Hypothesis</h3>
<ul>
<li><strong>Null Hypothesis (H₀):</strong> States no relationship/effect exists between variables.</li>
<li><strong>Alternative Hypothesis (H₁):</strong> States a relationship/effect exists.</li>
<li><strong>Type I Error (α):</strong> Rejecting a TRUE null hypothesis. False positive.</li>
<li><strong>Type II Error (β):</strong> Accepting a FALSE null hypothesis. False negative.</li>
</ul>

<h3>📌 5. Research Ethics</h3>
<ul>
<li>Informed consent — participants must know and agree to participate</li>
<li>Confidentiality — participant data must be kept private</li>
<li>No plagiarism — proper attribution of all sources</li>
<li>No data fabrication or falsification</li>
<li>Right to withdraw — participants can leave at any time</li>
</ul>`,
        tricks:[
          {title:"Research Types — BAA",tip:"Basic=Big theories (expand knowledge, no immediate use). Applied=Application (solve real problem). Action=Act NOW (immediate setting). BAA = 'Baaa' like a sheep — sounds different = different research goals!"},
          {title:"Type I vs Type II — Cry Wolf",tip:"Type I = 'Crying Wolf' (false alarm — you rejected true H₀, said effect exists when it doesn't). Type II = 'Missing the Wolf' (you didn't detect the real wolf — accepted false H₀, said no effect when there is one). Alpha(α)=Type I. Beta(β)=Type II."},
          {title:"Sampling Visual Memory",tip:"Random=lottery. Stratified=layered cake (sample each layer proportionally). Cluster=randomly pick cities, then study EVERYONE in those cities. Snowball=chain referral. Systematic=every 10th person. Purposive=researcher's choice."},
          {title:"Qualitative vs Quantitative Quick Check",tip:"QUAL: words, meanings, experiences, 'why/how', interviews, focus groups. QUANT: numbers, statistics, 'how many/how much', surveys with scales. Scenario: 'in-depth interviews about experiences' = QUALITATIVE always."}
        ],
        prevYrQs:[
          {q:"A researcher studies cancer survivors through in-depth interviews. This type of research is:",a:"Qualitative Research — uses non-numerical, experiential data collected through in-depth interviews. Focuses on meanings and perceptions.",year:"UGC NET 2024"},
          {q:"Accepting a false null hypothesis is called:",a:"Type II Error (Beta error) — you conclude there's no effect when one actually exists. Type I Error = rejecting a true null hypothesis.",year:"UGC NET 2023"},
          {q:"Snowball sampling is most appropriate for studying:",a:"Hard-to-reach or hidden populations (e.g., drug users, undocumented immigrants, rare disease patients) where existing subjects refer new participants.",year:"UGC NET 2024"}
        ]
      },
      {
        id:"ugcp1-ict", name:"ICT & Digital Education", icon:"💻",
        subtopics:["ICT Basics","Internet & Web","India's Digital Initiatives","E-Learning Concepts","SWAYAM & NPTEL","LMS Platforms"],
        content:`<h2>ICT in Education — India-Specific Focus</h2>
<p>Usually <strong>3-5 questions</strong>. UGC NET focuses heavily on India's digital education initiatives. Update yourself on new schemes before the exam.</p>

<h3>📌 1. ICT Basics</h3>
<p>ICT = Information and Communication Technology. Includes hardware, software, networks, and digital content used in teaching and learning.</p>
<p><strong>Input devices:</strong> Keyboard, mouse, scanner, microphone, webcam, interactive whiteboard</p>
<p><strong>Output devices:</strong> Monitor, printer, projector, speakers</p>
<p><strong>Storage:</strong> HDD, SSD, USB drive, CD/DVD, Cloud storage</p>

<h3>📌 2. Internet & Communication</h3>
<ul>
<li><strong>Internet ≠ WWW:</strong> Internet is the global network infrastructure. WWW is a service (websites) running on the internet.</li>
<li><strong>Browser:</strong> Software to access WWW (Chrome, Firefox, Safari, Edge)</li>
<li><strong>Email protocols:</strong> SMTP (send) | POP3/IMAP (receive)</li>
<li><strong>File types:</strong> .pdf (Adobe), .docx (Word), .pptx (PowerPoint), .mp4 (Video)</li>
</ul>

<h3>📌 3. India's Digital Education Initiatives (MOST ASKED!)</h3>
<ul>
<li><strong>SWAYAM:</strong> Study Webs of Active Learning for Young Aspiring Minds. Free online courses for all levels. Launched by Ministry of Education. India's national MOOC platform.</li>
<li><strong>NPTEL:</strong> National Programme on Technology Enhanced Learning. Joint venture of IITs + IISc. Focuses on technical/science subjects. Courses lead to certification with optional paid proctored exams.</li>
<li><strong>DIKSHA:</strong> Digital Infrastructure for Knowledge Sharing. Platform for school-level digital content (K-12).</li>
<li><strong>e-PG Pathshala:</strong> e-content for postgraduate students. High-quality content across subjects.</li>
<li><strong>INFLIBNET:</strong> Information and Library Network. Provides digital library services to universities. Manages N-LIST (books/journals for colleges).</li>
<li><strong>Shodhganga:</strong> Repository of Indian PhD theses and dissertations. Managed by INFLIBNET.</li>
<li><strong>VIDYA-DAAN:</strong> Crowdsourcing digital content contributions from educators.</li>
<li><strong>Virtual Labs:</strong> Remote access to laboratory experiments through simulation.</li>
</ul>

<h3>📌 4. E-Learning Concepts</h3>
<ul>
<li><strong>Synchronous e-learning:</strong> Real-time (same time). Live classes, Zoom, video calls.</li>
<li><strong>Asynchronous e-learning:</strong> Not real-time (different times). Recorded lectures, email, discussion forums.</li>
<li><strong>Blended Learning:</strong> Combination of online digital content + face-to-face instruction.</li>
<li><strong>Flipped Classroom:</strong> Content delivery at home, activities in class (opposite of traditional).</li>
<li><strong>MOOC:</strong> Massive Open Online Course. Large scale, open to anyone. No seat limit.</li>
<li><strong>LMS (Learning Management System):</strong> Software platform for creating, delivering, managing e-learning. Examples: Moodle, Blackboard, Canvas.</li>
</ul>`,
        tricks:[
          {title:"SWAYAM vs NPTEL — Quick Difference",tip:"SWAYAM=ALL subjects + ALL levels + FREE certification (govt scheme, Ministry of Education). NPTEL=technical subjects + IIT/IISc backed + stronger brand for engineering. SWAYAM is BROADER. NPTEL is more specialized/technical. Both offer MOOCs."},
          {title:"Sync vs Async Memory",tip:"SYNChronized = clock synced = SAME TIME = live class. ASYNChronized = NOT same time = any time = recorded video. Think: Synchronized swimming = everyone does it at the same time!"},
          {title:"India's Digital Ed Platforms — SHINE",tip:"S=SWAYAM(all MOOCs), H=sHodhganga(PhD thesis), I=INFLIBNET(library), N=NPTEL(tech IIT), E=e-PG(postgrad content). DIKSHA=school. Virtual Labs=simulation experiments. All are under NTA/UGC/Ministry of Education umbrella."},
          {title:"Flipped Classroom vs Traditional",tip:"Traditional: Teacher lectures in class, homework at home. Flipped: Video lecture at home, 'homework' (activities/discussions) done IN class with teacher's help. Key: it's FLIPPED — what was done at home is now in class and vice versa."}
        ],
        prevYrQs:[
          {q:"SWAYAM platform was launched by which ministry?",a:"Ministry of Education (formerly Human Resource Development Ministry), Government of India. It is India's national MOOC platform for free online education.",year:"UGC NET 2023"},
          {q:"INFLIBNET is associated with which type of service?",a:"INFLIBNET (Information and Library Network) provides networked information and library services to universities and colleges in India under UGC.",year:"UGC NET 2024"},
          {q:"Shodhganga is a repository of:",a:"Indian PhD theses and dissertations. It is managed by INFLIBNET and provides open access to research conducted in Indian universities.",year:"UGC NET 2023"}
        ]
      },
      {
        id:"ugcp1-logic", name:"Logical Reasoning", icon:"🧩",
        subtopics:["Classical Syllogisms","Venn Diagrams","Indian Logic (Nyaya)","Pramana Theory","Analogies","Logical Fallacies"],
        content:`<h2>Logical Reasoning — Western + Indian Logic</h2>
<p>Usually <strong>4-6 questions</strong>. UGC NET is unique in testing BOTH Western classical logic AND Indian Nyaya logic. Learn both!</p>

<h3>📌 1. Classical Syllogisms (Western Logic)</h3>
<p>Two premises → One conclusion. Test whether the conclusion necessarily follows.</p>
<p><strong>Valid patterns:</strong></p>
<ul>
<li>All M are P. All S are M. → All S are P. ✓ (AAA)</li>
<li>No M are P. All S are M. → No S are P. ✓ (EAE)</li>
<li>All M are P. Some S are M. → Some S are P. ✓ (AII)</li>
<li>All M are P. Some S are not M. → CANNOT CONCLUDE anything about S and P ✗</li>
</ul>
<p><strong>Venn Diagram Method:</strong> Draw the Venn diagram for the premises. Check if the conclusion is necessarily true in ALL possible diagrams.</p>

<h3>📌 2. Indian Logic — Nyaya School (Very Important for UGC NET!)</h3>
<p>The Nyaya school of Indian philosophy (founded by Gautama) has a 5-step syllogism called <strong>Pañcāvayava</strong>:</p>
<ul>
<li><strong>1. Pratijña (Proposition):</strong> "The hill has fire." — stating what is to be proved</li>
<li><strong>2. Hetu (Reason/Sign):</strong> "Because it has smoke." — the evidence/sign</li>
<li><strong>3. Udāharana (Universal Example):</strong> "Wherever there is smoke, there is fire, like a kitchen." — the universal relationship with an example</li>
<li><strong>4. Upanaya (Application):</strong> "This hill has smoke." — applying the universal to the current case</li>
<li><strong>5. Nigamana (Conclusion):</strong> "Therefore, this hill has fire." — restating the proposition as proved</li>
</ul>

<h3>📌 3. Pramāna Theory (Sources of Valid Knowledge)</h3>
<p>Nyaya school recognizes <strong>4 Pramānas (valid sources of knowledge):</strong></p>
<ul>
<li><strong>Pratyaksha (Perception):</strong> Direct knowledge through the senses. Most basic source.</li>
<li><strong>Anumāna (Inference):</strong> Knowledge through reasoning from signs. The 5-step syllogism above is Anumāna.</li>
<li><strong>Upamāna (Comparison/Analogy):</strong> Knowledge through comparison with something known.</li>
<li><strong>Shabda/Āgama (Verbal Testimony):</strong> Knowledge from a reliable, trustworthy source/authority.</li>
</ul>
<p><strong>Vyāpti:</strong> The universal concomitance (invariable relationship). "Wherever smoke, there fire" = the Vyāpti relationship. It is the FOUNDATION of Anumāna (inference).</p>

<h3>📌 4. Key Terms in Indian Logic</h3>
<ul>
<li><strong>Paksha:</strong> The subject/locus where the property is being inferred (the hill)</li>
<li><strong>Sādhya:</strong> The property to be proved (fire)</li>
<li><strong>Hetu:</strong> The reason/evidence/mark (smoke)</li>
<li><strong>Dṛiṣtānta:</strong> The example that establishes Vyāpti (the kitchen)</li>
</ul>`,
        tricks:[
          {title:"5-Step Nyaya Syllogism — PHUUN",tip:"Pratijña(P)-Hetu(H)-Udāharana(U)-Upanaya(U)-Nigamana(N). 'PHUUN' sounds like 'phoon' (blow). P=Proposition(claim), H=reason(Hetu), U=Universal example, U=Application(Upanaya), N=coNclusion. Same structure every time!"},
          {title:"4 Pramānas — PAUS",tip:"Pratyaksha(Perception)-Anumāna(inference)-Upamāna(comparison)-Shabda(testimony). 'PAUS' like 'pause' — pause and think about your source of knowledge. Is it from senses? reasoning? comparison? authority?"},
          {title:"Vyāpti Simple Explanation",tip:"Vyāpti = 'wherever A, there is always B' — universal invariable concomitance. Smoke-Fire Vyāpti: 'Wherever there is smoke, there is fire (always).' This is the backbone of Anumāna. Without Vyāpti, there is no valid inference."},
          {title:"Western vs Indian Syllogism Difference",tip:"Western (Aristotle): 3 steps. Indian (Nyaya): 5 steps. Western major premise comes first. Indian conclusion (Pratijña) stated FIRST, then proved. Western uses formal abstract symbols. Indian uses concrete natural examples."}
        ],
        prevYrQs:[
          {q:"In Nyaya inference, 'Vyāpti' refers to:",a:"Universal concomitance — the invariable relationship between the hetu (sign/reason) and the sādhya (what is proved). Example: wherever there is smoke, there is fire. Vyāpti is the foundation of Anumāna.",year:"UGC NET 2023"},
          {q:"The first step in Nyaya's 5-step syllogism (Pañcāvayava) is:",a:"Pratijña — the proposition stating what is to be proved. Example: 'The hill has fire.' It states the conclusion that will be established through the argument.",year:"UGC NET 2024"},
          {q:"Which Pramāna is based on verbal testimony from a reliable source?",a:"Shabda Pramāna (also called Āgama) — knowledge obtained from the words of a trustworthy and authoritative person.",year:"UGC NET 2023"}
        ]
      },
      {
        id:"ugcp1-highered", name:"Higher Education System", icon:"🏛️",
        subtopics:["UGC & Functions","NAAC Accreditation","NEP 2020 Key Points","Types of Universities","AICTE & Regulations","Distance Education"],
        content:`<h2>Higher Education System in India — Policy Heavy!</h2>
<p>Usually <strong>4-6 questions</strong>. NEP 2020 questions are increasing every year. Know all the key numbers and bodies.</p>

<h3>📌 1. UGC — University Grants Commission</h3>
<ul>
<li><strong>Established:</strong> 1956 under UGC Act, 1956</li>
<li><strong>Headquarters:</strong> New Delhi</li>
<li><strong>Functions:</strong> Coordinate and maintain standards in university education, provide grants, recognize universities, advise government on higher education</li>
<li><strong>Types of Universities:</strong> Central (funded by Centre), State (funded by State), Deemed (recognized by Centre on UGC recommendation), Private, Open</li>
</ul>

<h3>📌 2. NAAC — National Assessment and Accreditation Council</h3>
<ul>
<li><strong>Established:</strong> 1994 (under UGC)</li>
<li><strong>Headquarters:</strong> Bengaluru</li>
<li><strong>Purpose:</strong> Assess and accredit higher education institutions for quality</li>
<li><strong>Grading:</strong> A++ (highest) → A+ → A → B++ → B+ → B → C → D (not accredited)</li>
<li><strong>Cycle:</strong> 5-7 years between accreditation cycles</li>
</ul>

<h3>📌 3. NEP 2020 — National Education Policy 2020 (MOST ASKED!)</h3>
<p><strong>Key features to memorize:</strong></p>
<ul>
<li><strong>5+3+3+4 school structure:</strong> 5 years Foundational (ages 3-8) + 3 years Preparatory (8-11) + 3 years Middle (11-14) + 4 years Secondary (14-18). Replaces old 10+2.</li>
<li><strong>Multidisciplinary education:</strong> Students can choose combinations of arts + science + commerce. No rigid streams.</li>
<li><strong>Mother tongue/local language:</strong> Medium of instruction up to at least Grade 5, preferably Grade 8.</li>
<li><strong>4-year undergraduate programmes</strong> with multiple exit options: certificate after 1 year, diploma after 2 years, degree after 3 years, honours/research degree after 4 years.</li>
<li><strong>Academic Bank of Credits (ABC):</strong> Students can store, accumulate, and transfer credits earned from various institutions.</li>
<li><strong>GER target:</strong> 50% Gross Enrollment Ratio in higher education by 2035 (currently ~28%).</li>
<li><strong>No hard separation</strong> of vocational and academic education from early schooling.</li>
</ul>

<h3>📌 4. AICTE</h3>
<ul>
<li>All India Council for Technical Education</li>
<li>Regulates technical education: Engineering, MBA, MCA, Pharmacy, Architecture</li>
<li>Approval required for starting or running technical institutions</li>
</ul>

<h3>📌 5. Types of Education</h3>
<ul>
<li><strong>Formal:</strong> Structured, planned, leads to certificate/degree. Schools, colleges.</li>
<li><strong>Non-formal:</strong> Organized but flexible. Adult education, correspondence courses.</li>
<li><strong>Informal:</strong> Incidental, lifelong. From experience, family, media, internet.</li>
<li><strong>Distance Education:</strong> IGNOU = world's largest open university by enrollment.</li>
</ul>`,
        tricks:[
          {title:"NAAC Grades Easy Memory",tip:"A++ at top (double plus = excellent). Then A+, A (all As = good). Then B++, B+, B (all Bs = acceptable). Then C (needs improvement), D (not accredited). Think: A family and B family. Always want to be in A family!"},
          {title:"NEP 2020 — 5+3+3+4 Age Map",tip:"Foundational: ages 3-8 = 5 years (Anganwadi+Classes 1-2). Preparatory: 8-11 = 3 years (Classes 3-5). Middle: 11-14 = 3 years (Classes 6-8). Secondary: 14-18 = 4 years (Classes 9-12). Total = 5+3+3+4 = 15 years of school."},
          {title:"UGC vs AICTE Quick Split",tip:"UGC = ALL universities and colleges (general education). AICTE = TECHNICAL only (engineering, MBA, pharmacy). If exam question mentions 'engineering college approval' → AICTE. 'University recognition' → UGC. Both under Ministry of Education."},
          {title:"NEP Multiple Exit Options",tip:"4-year UG: Exit after 1yr=Certificate. Exit after 2yr=Diploma. Exit after 3yr=Degree (Bachelor's). Stay 4yr=Bachelor's with Research/Honours. This flexibility is a MAJOR NEP 2020 feature — allows students to leave and re-enter education."}
        ],
        prevYrQs:[
          {q:"NAAC is located at:",a:"Bengaluru (Bangalore), Karnataka. Established in 1994 under UGC. Responsible for assessing and accrediting higher education institutions.",year:"UGC NET 2023"},
          {q:"Which document introduced the 5+3+3+4 school structure in India?",a:"National Education Policy (NEP) 2020, announced by the Government of India. It replaced the earlier 10+2 structure.",year:"UGC NET 2024"},
          {q:"Academic Bank of Credits (ABC) introduced in NEP 2020 allows students to:",a:"Store, accumulate, and transfer academic credits earned from various higher educational institutions across India.",year:"UGC NET 2024"}
        ]
      }
    ]
  }

};

// ============================================================
// REFERENCE LINKS — Verified, topic-specific study resources
// Added to each topic via TOPIC_REFS[topicId]
// ============================================================
const TOPIC_REFS = {

  "ibps-reasoning": [
    { label:"Adda247 — Reasoning Tricks & Concepts (Free)", url:"https://www.adda247.com/bank-mahapack/reasoning-ability/", icon:"📖", tag:"Concepts" },
    { label:"Testbook — Reasoning Chapter-wise Notes", url:"https://testbook.com/reasoning", icon:"📝", tag:"Notes" },
    { label:"Smartkeeda — Reasoning Practice Sets (Free)", url:"https://www.smartkeeda.com/Reasoning_Questions/Reasoning_Questions_for_Banking_Exams", icon:"🎯", tag:"Practice" },
    { label:"Cracku — IBPS PO Reasoning Sectional Tests", url:"https://cracku.in/banking/ibps-po-reasoning-ability-tests", icon:"⏱️", tag:"Mock Tests" },
    { label:"YouTube: Study Smart — Puzzle Solving Tricks", url:"https://www.youtube.com/@StudySmartBanking", icon:"🎬", tag:"Video" },
    { label:"IndiaBIX — Reasoning Questions & Answers", url:"https://www.indiabix.com/logical-reasoning/questions-and-answers/", icon:"✅", tag:"Practice" }
  ],

  "ibps-quant": [
    { label:"Adda247 — Quant Formulas & Shortcuts PDF", url:"https://www.adda247.com/bank-mahapack/quantitative-aptitude/", icon:"📖", tag:"Concepts" },
    { label:"Testbook — Quantitative Aptitude Notes (Free)", url:"https://testbook.com/quantitative-aptitude", icon:"📝", tag:"Notes" },
    { label:"Smartkeeda — DI & Quant Practice Sets", url:"https://www.smartkeeda.com/Quantitative_Aptitude/Quantitative_Aptitude_Questions_for_Banking_Exams", icon:"🎯", tag:"Practice" },
    { label:"IndiaBIX — Aptitude Questions with Solutions", url:"https://www.indiabix.com/aptitude/questions-and-answers/", icon:"✅", tag:"Practice" },
    { label:"YouTube: Safalta — Maths Shortcuts for IBPS", url:"https://www.youtube.com/@SafaltaOfficial", icon:"🎬", tag:"Video" },
    { label:"Oliveboard — Quant Topic-wise Tests", url:"https://www.oliveboard.in/ibps-po-mock-test/", icon:"⏱️", tag:"Mock Tests" }
  ],

  "ibps-english": [
    { label:"Testbook — English Language Notes for Banking", url:"https://testbook.com/english-language", icon:"📝", tag:"Notes" },
    { label:"Adda247 — English Grammar & Vocab Free PDF", url:"https://www.adda247.com/bank-mahapack/english-language/", icon:"📖", tag:"Concepts" },
    { label:"Grammarly Blog — Grammar Rules (Quick Reference)", url:"https://www.grammarly.com/blog/category/handbook/", icon:"📚", tag:"Grammar" },
    { label:"Smartkeeda — English Sectional Tests Free", url:"https://www.smartkeeda.com/English_Questions/English_Questions_for_Banking_Exams", icon:"🎯", tag:"Practice" },
    { label:"Cracku — Reading Comprehension Practice", url:"https://cracku.in/banking/ibps-po-english-language-tests", icon:"⏱️", tag:"Mock Tests" },
    { label:"The Hindu — Read Daily for Vocabulary & RC", url:"https://www.thehindu.com/", icon:"📰", tag:"Reading" }
  ],

  "ibps-gk": [
    { label:"RBI Official — Monetary Policy & Rates (Always current)", url:"https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx", icon:"🏦", tag:"Official" },
    { label:"Adda247 — Banking Awareness Notes Free", url:"https://www.adda247.com/bank-mahapack/general-awareness/", icon:"📖", tag:"Concepts" },
    { label:"Bankersadda — Daily Current Affairs", url:"https://www.bankersadda.com/category/current-affairs", icon:"📰", tag:"Current Affairs" },
    { label:"Oliveboard — Banking Awareness Capsule PDF", url:"https://www.oliveboard.in/blog/banking-awareness-pdf/", icon:"📝", tag:"Notes" },
    { label:"Smartkeeda — GA & Banking Questions", url:"https://www.smartkeeda.com/General_Awareness/General_Awareness_Questions_for_Banking_Exams", icon:"🎯", tag:"Practice" },
    { label:"GKToday — Banking & Finance GK", url:"https://www.gktoday.in/banking-finance/", icon:"✅", tag:"Practice" },
    { label:"IBPS Official Notification", url:"https://ibps.in/", icon:"🔖", tag:"Official" }
  ],

  "ibps-computer": [
    { label:"Testbook — Computer Awareness for Banking", url:"https://testbook.com/computer-knowledge", icon:"📝", tag:"Notes" },
    { label:"Adda247 — Computer Aptitude Notes & Quiz", url:"https://www.adda247.com/bank-mahapack/computer-aptitude/", icon:"📖", tag:"Concepts" },
    { label:"GCFLearnFree — Computer Basics (Simple & Clear)", url:"https://edu.gcfglobal.org/en/computerbasics/", icon:"🖥️", tag:"Concepts" },
    { label:"Smartkeeda — Computer Awareness Practice", url:"https://www.smartkeeda.com/Computer_Knowledge/Computer_Knowledge_Questions_for_Banking_Exams", icon:"🎯", tag:"Practice" },
    { label:"IndiaBIX — Computer Science Questions", url:"https://www.indiabix.com/computer-science/questions-and-answers/", icon:"✅", tag:"Practice" }
  ],

  "hrm-ob": [
    { label:"Human Peritus — UGC NET HRM OB Notes & PYQs", url:"https://humanperitus.in/ugc-net-hrm-syllabus/", icon:"🏆", tag:"Best for HRM" },
    { label:"Testbook — OB & Motivation Theories Notes", url:"https://testbook.com/ugc-net/human-resource-and-management-notes", icon:"📝", tag:"Notes" },
    { label:"Eduncle — UGC NET HRM Study Material Free", url:"https://scoop.eduncle.com/ugc-net-human-resource-management", icon:"📖", tag:"Study Material" },
    { label:"JRFAdda — UGC NET HRM PYQs & Mock Tests", url:"https://www.jrfadda.com/exams/ugc-net/ugc-net-labour-welfare-personnel-management-industrial-relations-labour-and-social-welfare-human-resource-management/", icon:"🎯", tag:"PYQs" },
    { label:"Management Study Guide — Leadership & OB", url:"https://www.managementstudyguide.com/leadership.htm", icon:"📚", tag:"Reference" },
    { label:"Simply Psychology — Maslow, Herzberg, Theory XY", url:"https://www.simplypsychology.org/maslow.html", icon:"🧠", tag:"Theory" }
  ],

  "hrm-hrm": [
    { label:"Human Peritus — HRM Concepts Code 55 Notes", url:"https://humanperitus.in/", icon:"🏆", tag:"Best for HRM" },
    { label:"Management Study Guide — HRM Complete Guide", url:"https://www.managementstudyguide.com/human-resource-management.htm", icon:"📚", tag:"Reference" },
    { label:"Testbook — HRM Notes for UGC NET", url:"https://testbook.com/ugc-net/human-resource-and-management-notes", icon:"📝", tag:"Notes" },
    { label:"Eduncle — UGC NET HRM Preparation Guide", url:"https://scoop.eduncle.com/ugc-net-human-resource-management", icon:"📖", tag:"Study Material" },
    { label:"HRPreparation — Code 55 Crash Course", url:"https://hrpreparation.com/", icon:"🎯", tag:"Practice" },
    { label:"HR Dive — Real-world HRM Examples & News", url:"https://www.hrdive.com/", icon:"🌐", tag:"Real World" }
  ],

  "hrm-labour": [
    { label:"Human Peritus — Labour Laws for UGC NET HRM", url:"https://humanperitus.in/ugc-net-hrm-syllabus/", icon:"🏆", tag:"Best for Labour Laws" },
    { label:"India Code — Official Text of All Labour Acts", url:"https://www.indiacode.nic.in/handle/123456789/1382", icon:"⚖️", tag:"Official Acts" },
    { label:"Ministry of Labour & Employment — Official", url:"https://labour.gov.in/", icon:"🔖", tag:"Official" },
    { label:"Testbook — Labour Laws Notes & MCQs", url:"https://testbook.com/ugc-net/labour-welfare-syllabus", icon:"📝", tag:"Notes" },
    { label:"JRFAdda — Labour Law PYQs & Analysis", url:"https://www.jrfadda.com/exams/ugc-net/ugc-net-labour-welfare-personnel-management-industrial-relations-labour-and-social-welfare-human-resource-management/", icon:"🎯", tag:"PYQs" },
    { label:"Cleartax — Labour Law Explainers (Simple language)", url:"https://cleartax.in/s/labour-law", icon:"📖", tag:"Easy Explainer" }
  ],

  "mgmt-strategic": [
    { label:"Testbook — Strategic Management Notes UGC NET", url:"https://testbook.com/ugc-net/management-syllabus", icon:"📝", tag:"Notes" },
    { label:"JRFAdda — Management Code 17 PYQs & Analysis", url:"https://www.jrfadda.com/exams/ugc-net/ugc-net-management/", icon:"🏆", tag:"Best for Mgmt" },
    { label:"Eduncle — UGC NET Management Study Material", url:"https://scoop.eduncle.com/ugc-net-coaching", icon:"📖", tag:"Study Material" },
    { label:"Investopedia — BCG Matrix, Porter's Forces (Clear)", url:"https://www.investopedia.com/terms/b/bcg.asp", icon:"📚", tag:"Reference" },
    { label:"MindTools — Strategic Planning Frameworks", url:"https://www.mindtools.com/pages/article/newSTR_56.htm", icon:"🧠", tag:"Concepts" },
    { label:"Harvard Business Review — Strategy Articles", url:"https://hbr.org/topic/subject/strategy", icon:"🎓", tag:"Advanced" }
  ],

  "mgmt-ba": [
    { label:"Testbook — Business Analytics Notes UGC NET", url:"https://testbook.com/ugc-net/management-syllabus", icon:"📝", tag:"Notes" },
    { label:"JRFAdda — Management Code 17 Full Notes", url:"https://www.jrfadda.com/exams/ugc-net/ugc-net-management/", icon:"🏆", tag:"Best for Mgmt" },
    { label:"Khan Academy — Statistics (Free, Clear Explanations)", url:"https://www.khanacademy.org/math/statistics-probability", icon:"🎬", tag:"Video Lessons" },
    { label:"IBM — What is Business Analytics? (Official)", url:"https://www.ibm.com/think/topics/business-analytics", icon:"🌐", tag:"Concepts" },
    { label:"Towards Data Science — Analytics Types Explained", url:"https://towardsdatascience.com/", icon:"📊", tag:"Reference" },
    { label:"NTA UGC NET Official Syllabus — Management", url:"https://ugcnet.nta.ac.in/", icon:"🔖", tag:"Official" }
  ],

  "sbi-di": [
    { label:"Adda247 — DI Practice Sets for SBI PO", url:"https://www.adda247.com/bank-mahapack/quantitative-aptitude/", icon:"📊", tag:"Practice" },
    { label:"Testbook — Data Interpretation Notes Free", url:"https://testbook.com/quantitative-aptitude/data-interpretation", icon:"📝", tag:"Notes" },
    { label:"Smartkeeda — Caselet DI Practice Sets", url:"https://www.smartkeeda.com/Quantitative_Aptitude/Data_Interpretation_for_Banking_Exams", icon:"🎯", tag:"Caselet DI" },
    { label:"Cracku — SBI PO DI Sectional Tests", url:"https://cracku.in/sbi-po-previous-papers", icon:"⏱️", tag:"Mock Tests" },
    { label:"Oliveboard — SBI PO Free Mock Test", url:"https://www.oliveboard.in/sbi-po-mock-test/", icon:"🏦", tag:"Full Mock" }
  ],

  "sbi-english": [
    { label:"Adda247 — SBI PO Descriptive Paper Guide", url:"https://www.adda247.com/bank-mahapack/english-language/", icon:"📖", tag:"Descriptive" },
    { label:"Testbook — Essay Writing for SBI PO", url:"https://testbook.com/english-language/essay-writing", icon:"📝", tag:"Essay Tips" },
    { label:"Oliveboard — SBI PO Descriptive Test Series", url:"https://www.oliveboard.in/sbi-po-mock-test/", icon:"🎯", tag:"Practice" },
    { label:"The Hindu — Daily Reading for RC & Vocab", url:"https://www.thehindu.com/", icon:"📰", tag:"Daily Reading" },
    { label:"Grammarly Blog — Grammar Reference", url:"https://www.grammarly.com/blog/category/handbook/", icon:"📚", tag:"Grammar" }
  ],

  "sbi-banking": [
    { label:"RBI Official — Latest Rates & Policy (Always current)", url:"https://www.rbi.org.in/", icon:"🏦", tag:"Official" },
    { label:"SBI Official Careers Page", url:"https://sbi.co.in/web/careers", icon:"🔖", tag:"Official" },
    { label:"Bankersadda — Banking Awareness for SBI PO", url:"https://www.bankersadda.com/category/current-affairs", icon:"📰", tag:"Current Affairs" },
    { label:"Oliveboard — Banking Awareness PDF Free", url:"https://www.oliveboard.in/blog/banking-awareness-pdf/", icon:"📝", tag:"Notes" },
    { label:"GKToday — Banking & Economy GK", url:"https://www.gktoday.in/banking-finance/", icon:"✅", tag:"Practice" }
  ],

  "sbi-reasoning": [
    { label:"Adda247 — SBI PO Reasoning Tricks & Sets", url:"https://www.adda247.com/bank-mahapack/reasoning-ability/", icon:"📖", tag:"Concepts" },
    { label:"Cracku — SBI PO Reasoning Practice", url:"https://cracku.in/sbi-po-previous-papers", icon:"🎯", tag:"Practice" },
    { label:"Testbook — Critical Reasoning for Banking", url:"https://testbook.com/reasoning/critical-reasoning", icon:"📝", tag:"Critical Reasoning" },
    { label:"Oliveboard — SBI PO Full Mock Tests", url:"https://www.oliveboard.in/sbi-po-mock-test/", icon:"⏱️", tag:"Mock Tests" }
  ],

  "sbi-quant": [
    { label:"Adda247 — Probability & Permutation Notes", url:"https://www.adda247.com/bank-mahapack/quantitative-aptitude/", icon:"📖", tag:"Concepts" },
    { label:"Testbook — Mensuration & Probability Notes", url:"https://testbook.com/quantitative-aptitude", icon:"📝", tag:"Notes" },
    { label:"Khan Academy — Probability (Free Videos)", url:"https://www.khanacademy.org/math/statistics-probability/probability-library", icon:"🎬", tag:"Video Lessons" },
    { label:"IndiaBIX — Aptitude Questions with Solutions", url:"https://www.indiabix.com/aptitude/questions-and-answers/", icon:"✅", tag:"Practice" }
  ],

  "ugcp1-teaching": [
    { label:"Scholarify — Free UGC NET Paper 1 Study Material", url:"https://www.scholarify.in/ugc-net-study-materials-for-paper-1/", icon:"🏆", tag:"Best Free Resource" },
    { label:"Anuj Jindal — Teaching Aptitude Free Notes & Videos", url:"https://anujjindal.in/ugc-net-jrf-paper-1-free-material/", icon:"🎬", tag:"Free Notes" },
    { label:"Testbook — Teaching Aptitude Notes UGC NET", url:"https://testbook.com/ugc-net/teaching-aptitude-notes", icon:"📝", tag:"Notes" },
    { label:"Eduncle — UGC NET Paper 1 Study Material", url:"https://scoop.eduncle.com/ugc-net-coaching", icon:"📖", tag:"Study Material" },
    { label:"NTA Official — Paper 1 Syllabus PDF", url:"https://ugcnet.nta.ac.in/", icon:"🔖", tag:"Official Syllabus" }
  ],

  "ugcp1-research": [
    { label:"Scholarify — Research Aptitude Free Notes", url:"https://www.scholarify.in/ugc-net-study-materials-for-paper-1/", icon:"🏆", tag:"Best Free Resource" },
    { label:"Anuj Jindal — Research Aptitude Free PDF", url:"https://anujjindal.in/ugc-net-jrf-paper-1-free-material/", icon:"📝", tag:"Free Notes" },
    { label:"Testbook — Research Aptitude Notes", url:"https://testbook.com/ugc-net/research-aptitude-notes", icon:"📝", tag:"Notes" },
    { label:"Simply Psychology — Research Methods Overview", url:"https://www.simplypsychology.org/research-methods.html", icon:"🔬", tag:"Reference" },
    { label:"JRFAdda — Paper 1 Research PYQs", url:"https://www.jrfadda.com/exams/ugc-net/", icon:"🎯", tag:"PYQs" }
  ],

  "ugcp1-ict": [
    { label:"Scholarify — ICT Notes Free for Paper 1", url:"https://www.scholarify.in/ugc-net-study-materials-for-paper-1/", icon:"🏆", tag:"Best Free Resource" },
    { label:"SWAYAM Official Platform", url:"https://swayam.gov.in/", icon:"🎓", tag:"Official SWAYAM" },
    { label:"NPTEL Official Platform", url:"https://nptel.ac.in/", icon:"🏛️", tag:"Official NPTEL" },
    { label:"DIKSHA Official Platform", url:"https://diksha.gov.in/", icon:"📱", tag:"Official DIKSHA" },
    { label:"INFLIBNET / Shodhganga", url:"https://shodhganga.inflibnet.ac.in/", icon:"📚", tag:"Shodhganga" },
    { label:"Testbook — ICT Notes for UGC NET", url:"https://testbook.com/ugc-net/information-communication-technology-notes", icon:"📝", tag:"Notes" }
  ],

  "ugcp1-logic": [
    { label:"Scholarify — Logical Reasoning Free Notes", url:"https://www.scholarify.in/ugc-net-study-materials-for-paper-1/", icon:"🏆", tag:"Best Free Resource" },
    { label:"Anuj Jindal — Indian Logic Nyaya Free Material", url:"https://anujjindal.in/ugc-net-jrf-paper-1-free-material/", icon:"🎬", tag:"Free Notes" },
    { label:"Testbook — Logical Reasoning for UGC NET", url:"https://testbook.com/ugc-net/logical-reasoning-notes", icon:"📝", tag:"Notes" },
    { label:"IEP — Indian Logic & Philosophy Overview", url:"https://iep.utm.edu/indian-lo/", icon:"🧩", tag:"Deep Reference" },
    { label:"JRFAdda — Paper 1 Logic PYQs", url:"https://www.jrfadda.com/exams/ugc-net/", icon:"🎯", tag:"PYQs" }
  ],

  "ugcp1-highered": [
    { label:"UGC Official Website — All Regulations", url:"https://www.ugc.gov.in/", icon:"🔖", tag:"Official UGC" },
    { label:"NEP 2020 Full Document — Ministry of Education", url:"https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf", icon:"📄", tag:"NEP 2020 Official" },
    { label:"NAAC Official Website", url:"https://www.naac.gov.in/", icon:"🏆", tag:"Official NAAC" },
    { label:"Scholarify — Higher Education Notes Free", url:"https://www.scholarify.in/ugc-net-study-materials-for-paper-1/", icon:"📝", tag:"Free Notes" },
    { label:"Testbook — Higher Education UGC NET Notes", url:"https://testbook.com/ugc-net/higher-education-notes", icon:"📝", tag:"Notes" }
  ]
};
