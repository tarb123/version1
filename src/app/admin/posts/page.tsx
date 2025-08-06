'use client';
import { useEffect, useState } from 'react';

export default function AdminPostsPage() {

  type Answer = {
  id: string;
  optionKey: string;
  text: string;
  scores: { [key: string]: number };
  baseScoreValue: number;
  newSkill?: string;
  newValue?: number | string;
};

type Question = {
  id: string;
  type: string;
  primaryTrait: string;
  text: string;
  formatWeight: number;
  traitWeight: number;
  reverse: boolean;
  skills: string;
  options: { label: string; value: number }[];
  answers: Answer[];
};

const [question, setQuestion] = useState<Question>({
  id: '',
  type: '',
  primaryTrait: '',
  text: '',
  formatWeight: 0,
  traitWeight: 0,
  reverse: false,
  skills: '',
  options: [{ label: '', value: 0 }],
  answers: [],
});


  const [allQuestions, setAllQuestions] = useState([]);

  const fetchQuestions = async () => {
    const res = await fetch('/api/questions');
    const data = await res.json();
    if (data.success) setAllQuestions(data.questions);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedType = e.target.value;

  if (selectedType === "likert") {
    setQuestion({
      ...question,
      type: "likert",
      options: [
        { label: "Strongly Disagree", value: 1 },
        { label: "Disagree", value: 2 },
        { label: "Neutral", value: 3 },
        { label: "Agree", value: 4 },
        { label: "Strongly Agree", value: 5 },
      ],
    });
  } 
else if (selectedType === "forced") {
  setQuestion({
    ...question,
    type: "forced",
    answers: [
      {
        id: "",
        optionKey: "A",
        text: "",
        scores: {},
        baseScoreValue: 0,
      },
      {
        id: "B",
        optionKey: "B",
        text: "",
        scores: {},
        baseScoreValue: 0,
      },
    ],
  });
}

  else {
    setQuestion({ ...question, type: selectedType, options: [{ label: '', value: 0 }] });
  }
};

const handleOptionChange = (index: number, key: 'label' | 'value', value: string | number) => {
  const updatedOptions = [...question.options];
  // updatedOptions[index][key] = key === 'value' ? Number(value) : value;
  setQuestion({ ...question, options: updatedOptions });
};

  const addOption = () => {
    setQuestion({ ...question, options: [...question.options, { label: '', value: 0 }] });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      ...question,
      skills: question.skills.split(',').map((s) => s.trim()),
    };

    const res = await fetch('/api/add-questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questions: [payload] }),
    });

    const data = await res.json();
    alert(data.message);
    if (data.success) {
      setQuestion({
        id: '',
        type: '',
        primaryTrait: '',
        text: '',
        formatWeight: 0,
        traitWeight: 0,
        reverse: false,
        skills: '',
        options: [{ label: '', value: 0 }],
        answers: [
          {
            id: '',
            optionKey: '',
            text: '',
            scores: {},
            baseScoreValue: 0,
          },
        ],
      });
      fetchQuestions();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">➕ Add Question</h1>

      <form onSubmit={handleSubmit} className="bg-white grid rounded px-3 py-5 gap-4 max-w-2xl mb-10">
      
      <div className="relative w-full">
      <input type="text" id="id" className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-bold placeholder-transparent focus:outline-none focus:ring-customBlue"
      required value={question.id} onChange={e => setQuestion({ ...question, id: e.target.value })}/>
      
      <label htmlFor="id" className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-customBlue peer-focus:top-1 peer-focus:text-xs peer-focus:text-customBlue">ID</label>
     </div>
       
<div className="relative w-full">
  <input type="text" id="text"
    className="peer px-3 pt-5 pb-1 w-[450px] border-2 border-customBlue rounded  
    text-xs font-bold placeholder-transparent focus:outline-none focus:ring-customBlue"
    required value={question.text} onChange={e => setQuestion({ ...question, text: e.target.value })}/>
  <label htmlFor="text"
  className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs"
  >
    Text
  </label>
</div>  

<div className="relative w-full">
  <input type="text" id="primaryTrait"
    className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-bold placeholder-transparent focus:outline-none focus:ring-customBlue"
     required value={question.primaryTrait} onChange={e => setQuestion({ ...question, primaryTrait: e.target.value })}
  />
  <label
    htmlFor="primaryTrait"
    className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs"
  >
    Primary Trait
  </label>
</div>
<div className="relative w-full">
  <input
    type="number"
    id="formatWeight"
    className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-bold placeholder-transparent focus:outline-none focus:ring-customBlue"
     required
    value={question.formatWeight}
    onChange={e => setQuestion({ ...question, formatWeight: +e.target.value })}
  />
  <label
    htmlFor="formatWeight"
    className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs"
  >
    Format Weight
  </label>
</div>
<div className="relative w-full">
  <input
    type="number"
    id="traitWeight"
    className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-bold placeholder-transparent focus:outline-none focus:ring-customBlue"
    placeholder="Trait Weight"
    required
    value={question.traitWeight}
    onChange={e => setQuestion({ ...question, traitWeight: +e.target.value })}
  />
  <label
    htmlFor="traitWeight"
    className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs"
  >
    Trait Weight
  </label>
</div>  

<div className="relative w-full">
  <input
    type="text"
    id="skills"
    className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-bold placeholder-transparent focus:outline-none focus:ring-customBlue"
    value={question.skills}
    onChange={e => setQuestion({ ...question, skills: e.target.value })}
  />
  <label
    htmlFor="skills"
    className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs"
  >
    Skills (comma-separated)
  </label>
</div>  

<div className="relative w-full">
  
  {/* Select Type */}
  <select value={question.type} onChange={handleTypeChange} required
  className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs text-black focus:outline-none focus:ring-customBlue">
    <option value="">Select Type</option>
    <option value="likert">Likert</option>
    <option value="forced">Forced</option>
    <option value="sjt">SJT</option>
  </select>

  <label htmlFor="type"
    className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-focus:top-1 peer-focus:text-xs"
  >
    Type
  </label>
</div>

{question.type === "forced" && question.answers.length === 2 && (
  
  <div className="space-y-4 border-2 border-gray p-4 rounded bg-gray-50">
    <label className="text-customBlue text-sm font-semibold">Forced Choice Options</label>

    {["A", "B"].map((key, index) => (
      <div key={key} className="space-y-2 border-2 border-gray p-3 bg-white shadow-sm rounded">
        
        <h3 className="text-sm font-bold text-customBlue">Option {key}</h3>

          <div className="relative w-full">
            <input type="text" id="id" required 
            className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"
            value={question.answers[index].id} 
            onChange={(e) => {
              const updated = [...question.answers];
              updated[index].id = e.target.value;
              setQuestion({ ...question, answers: updated });
            }}            
            />
            <label htmlFor="id" 
            className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-customBlue peer-focus:top-1 peer-focus:text-xs peer-focus:text-customBlue">
            ID
            </label>
          </div>

        <div className="relative w-full">
          <input type="text" 
            className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"
            value={question.answers[index].optionKey} readOnly           
          />
      
          <label htmlFor="id" 
            className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-customBlue peer-focus:top-1 peer-focus:text-xs peer-focus:text-customBlue">
            Option Key (readonly)
          </label>
        </div>

        <div className="relative w-full">
          <input type="text" className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"
            value={question.answers[index].text}
            onChange={(e) => {
              const updated = [...question.answers];
              updated[index].text = e.target.value;
              setQuestion({ ...question, answers: updated });
            }}            />
      
          <label htmlFor="id" 
            className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-customBlue peer-focus:top-1 peer-focus:text-xs peer-focus:text-customBlue">
            TEXT
          </label>
        </div>

        <div className="relative w-full">
          <input type="text" 
          className="peer w-[450px] border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"
          value={question.answers[index].baseScoreValue}
          onChange={(e) => {
          const updated = [...question.answers];
          updated[index].baseScoreValue = Number(e.target.value);
          setQuestion({ ...question, answers: updated });
          }}            
          />
      
          <label htmlFor="id" 
          className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-customBlue peer-focus:top-1 peer-focus:text-xs peer-focus:text-customBlue">
            Base Score Value
          </label>
        </div>

  {/* Scores input: key-value editing */}
  <div className="relative w-full">
 
    <label className="text-xs font-bold text-customBlue">Scores (Skill → Value)</label>

    {Object.entries(question.answers[index].scores || {}).map(([skill, value]) => (
    <div key={skill} className="flex items-center space-x-2">
          
      <input type="text"
        className="peer w-52 h-9 border-2 border-customBlue rounded px-2 pt-5 pb-3 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"            value={skill}
        readOnly
      />
      
      <input type="number"
      className="peer w-52 h-9 border-2 border-customBlue rounded px-2 pt-5 pb-3 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"
      value={value as number}
        onChange={(e) => {
        const updated = [...question.answers];
        updated[index].scores[skill] = Number(e.target.value);
        setQuestion({ ...question, answers: updated });
          }}
      />
      
      <button type="button" className="text-Red font-extrabold text-base"
        onClick={() => {
        const updated = [...question.answers];
        delete updated[index].scores[skill];
          setQuestion({ ...question, answers: updated });
        }}
      >
        ✕
      </button>
    </div>
    ))}

      {/* Add new skill-score pair */}
      <div className="relative w-full gap-3 flex mt-2">
      
        <label htmlFor="id" 
        className="absolute left-3 top-1 text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-customBlue peer-focus:top-1 peer-focus:text-xs peer-focus:text-customBlue">
        New Skill
        </label>

        <input type="text"
         className="peer w-52 border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"
          // className="w-1/2 border px-2 py-1 text-xs rounded" placeholder="New Skill"
         value={question.answers[index].newSkill || ""}
         onChange={(e) => {
         const updated = [...question.answers];
         updated[index].newSkill = e.target.value;
         setQuestion({ ...question, answers: updated });
          }}
        />

        <label htmlFor="id" 
          className="absolute right-80 py-2 px-[-3px] top-[-2px] text-sm text-customBlue font-bold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-customBlue peer-focus:top-1 peer-focus:text-xs peer-focus:text-customBlue">
        Value
        </label>
            
        <input type="number"
          className="peer w-52 gap-0 border-2 border-customBlue rounded px-3 pt-5 pb-1 text-xs font-medium placeholder-transparent focus:outline-none focus:ring-customBlue"
          // className="w-1/4 border px-2 py-1 text-xs rounded" placeholder="Value"
          value={question.answers[index].newValue || ""}
          onChange={(e) => {
           const updated = [...question.answers];
           updated[index].newValue = e.target.value;
            setQuestion({ ...question, answers: updated });
          }}
        />

      <button type="button"
        className="mt-1 w-8 h-8 flex items-center justify-center bg-Blue hover:bg-Red text-white rounded-full shadow transition"
        onClick={() => {
        const updated = [...question.answers];
        const skill = updated[index].newSkill?.trim();
        const value = Number(updated[index].newValue);
        if (skill && !isNaN(value)) {
        updated[index].scores = {
        ...updated[index].scores,
        [skill]: value,
        };
        updated[index].newSkill = "";
        updated[index].newValue = "";
        setQuestion({ ...question, answers: updated });
       }
      }}
        aria-label="Add">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
</button>

          </div>
        </div>
      </div>
    ))}
  </div>
)}


{/* Show Likert Options if selected */}
{question.type === "likert" && (
  <div className="px-3">
    <label className="block text-sm font-semibold mb-1 text-customBlue">Likert Options</label>
    <ul className="space-y-1 text-xs text-gray-700">
      <li>1 - Strongly Disagree</li><li>2 - Disagree</li><li>3 - Neutral</li>
      <li>4 - Agree</li><li>5 - Strongly Agree</li>
    </ul>
  </div>
)}

  <label className="flex items-center gap-2">
  <input type="checkbox" checked={question.reverse} onChange={e => setQuestion({ ...question, reverse: e.target.checked })} />Reverse
  </label>
        <button type="submit" className="bg-green text-white py-2 px-4 rounded hover:bg-darkgreen">
          Submit
        </button>
      </form>

      <h2 className="text-xl font-bold mb-2">📋 All Questions</h2>
      {/* <h3>{questions.length}</h3> */}
      <div className="overflow-auto max-h-[400px] border rounded">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-Blue text-white">
            <tr>
              <th className="px-3 py-2 border">ID</th>
              <th className="px-3 py-2 border">Text</th>
              <th className="px-3 py-2 border">Type</th>
              <th className="px-3 py-2 border">Trait</th>
              <th className="px-3 py-2 border">Skills</th>
            </tr>
          </thead>
          <tbody>
            {allQuestions.map((q: any, i) => (
              <tr key={i} className="border-b hover:bg-gray-100">
                <td className="px-3 py-2">{q.id}</td>
                <td className="px-3 py-2">{q.text}</td>
                <td className="px-3 py-2">{q.type}</td>
                <td className="px-3 py-2">{q.primaryTrait}</td>
                <td className="px-3 py-2">{q.skills?.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .input {
          border: 1px solid #ddd;
          padding: 0.5rem;
          border-radius: 0.375rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
