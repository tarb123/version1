export type TraitCategory =
  | "AnalyticalProblemSolving"
  | "CommunicationInfluence"
  | "EthicalProfessional"
  | "InterpersonalTeam"
  | "LeadershipInitiative"
  | "LearningDevelopment"
  | "SelfManagement";
// const pointMap =
// { 
// 'Excellent': 5, 
// 'Strong': 4, 
// 'High': 4, 
// 'Moderate': 3, 
// 'Good': 3, 
// 'Balanced': 3, 
// 'Limited': 2, 
// 'Poor': 1, 
// 'Minimal': 1 
// };  
export const broadSkillCategories: TraitCategory[] = 
[
'AnalyticalProblemSolving', 
'CommunicationInfluence', 
'EthicalProfessional', 
'InterpersonalTeam', 
'LeadershipInitiative', 
'LearningDevelopment', 
'SelfManagement',
];

// Mapping: Granular Skill -> 7 Main Categories [cite: 1]
export const skillCategoryMapping: Record<TraitCategory, string[]> = {
AnalyticalProblemSolving: 
[ 
'analyticalApproach', 'anomalyIdentification', 'criticalReasoning', 'creativeProblemSolving', 
'decisionMethodology','informationUtilization', 'informationOrganization', 'logicalEvaluation', 
'patternDetection', 'quantitativeAnalysis', 'systematicProblemSolving',
],
  CommunicationInfluence: 
[ 
'assertiveCommunication', 'audienceAwareness','conceptCommunication', 'communicationAdaptability', 
'communicationFlexibility', 'explanatoryClarity', 'feedbackDelivery', 'influenceStyle', 
'persuasionApproach', 'verbalExplanation',  
],
EthicalProfessional: 
[ 
'attributionIntegrity', 'ethicalConsistency', 'ethicalDecisionMaking', 'honestyInSelfPresentation', 
'policyCompliance', 'professionalEthics', 'processIntegrity', 'ruleAdherence', 
'transparency', 'transactionIntegrity', 
],
InterpersonalTeam: 
[ 
'collaboration', 'conflictResolution', 'empathy', 'groupDynamics', 
'interpersonalAdaptability', 'networkingAbility','perspectiveTaking', 'relationshipMaintenance', 
'socialIntuition', 'teamManagement',  
],
  
LeadershipInitiative: 
[ 
'actionOrientation', 'changeLeadership', 'decisionCatalyst', 'delegationAbility', 
'directionalLeadership', 'initiativeTaking', 'motivationalAbility', 'professionalAssertiveness' 
],
  
LearningDevelopment: 
[
'adaptiveLearning', 'continuousLearning', 'feedbackProcessing', 'growthOrientation', 
'informationProcessing', 'knowledgeAcquisition', 'learningApproach', 'learningFlexibility', 
'reflectivePractice' 
],
SelfManagement: 
[ 
'adaptability', 'emotionalRegulation', 'planningOrganization', 'prioritization', 
'reliability', 'resilience', 'selfEvaluation', 'stressManagement', 
'timeManagement', 'workConsistency',
],
};

// List of all high-level traits/sections we calculate directly
export const traitList = [ /* ... same as before ... */
'Openness','Conscientiousness','Extraversion','Agreeableness','Emotional Stability',
'HonestyHumility',
'Linguistic','LogicalMathematical','Spatial','BodilyKinesthetic','Musical','Interpersonal','Intrapersonal','Naturalist',
'Dominance','Influence','Steadiness','Compliance'
];

// --- SKILLS LIST --- (Granular skills)
export const skillList = [

//1.  AnalyticalProblemSolving "Analytical & Problem-Solving Skills"
'analyticalApproach','anomalyIdentification','criticalReasoning','creativeProblemSolving',
'decisionMethodology','informationUtilization','informationOrganization','logicalEvaluation', 
'patternDetection','quantitativeAnalysis','systematicProblemSolving',

//2.  CommunicationInfluence "Communication & Influence Skills"
'assertiveCommunication','audienceAwareness','conceptCommunication','communicationAdaptability', 
'communicationFlexibility','explanatoryClarity','feedbackDelivery','influenceStyle',
'persuasionApproach', 'verbalExplanation', 

//3. EthicalProfessional "Ethical Professional Skills"
'attributionIntegrity','ethicalConsistency','ethicalDecisionMaking','honestyInSelfPresentation', 
'policyCompliance','professionalEthics','processIntegrity','ruleAdherence',
'transparency','transactionIntegrity',  

//4. InterpersonalTeam "Interpersonal & Team Skills"
'collaboration','conflictResolution','empathy','groupDynamics',
'interpersonalAdaptability','networkingAbility','perspectiveTaking','relationshipMaintenance',
'socialIntuition','teamManagement',  

//5. LeadershipInitiative "Leadership & Initiative Skills"
'actionOrientation','changeLeadership','decisionCatalyst','delegationAbility',
'directionalLeadership', 'initiativeTaking','motivationalAbility','professionalAssertiveness', 

//6. LearningDevelopment "Learning & Development Skills"
'adaptiveLearning','continuousLearning','feedbackProcessing','growthOrientation',
'informationProcessing', 'knowledgeAcquisition','learningApproach','learningFlexibility',
'reflectivePractice', 

//7. SelfManagement "Self-Management Skills"
'adaptability', 'emotionalRegulation','planningOrganization','prioritization',  
'reliability','resilience','selfEvaluation','stressManagement',
'timeManagement','workConsistency'
];

export const careerDatabase = [
  {
    name: "Software Developer",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 2,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 4, InterpersonalTeam:3, LeadershipInitiative: 2, LearningDevelopment: 5, SelfManagement: 4 },
    // abilities: { LogicalMathematical: 5,  Spatial: 4, Linguistic: 3, Interpersonal: 2}
  },
  {
    name: "Data Analyst",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4 },
    // abilities: { LogicalMathematical: 5,  Spatial: 3, Linguistic: 4, Interpersonal: 3}
  },
   {
    name: "Cybersecurity Manager",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 4, LeadershipInitiative: 5, LearningDevelopment: 5, SelfManagement: 4 },
    // abilities: { LogicalMathematical: 5,  Spatial: 3, Linguistic: 4, Interpersonal: 4}
  },
   {
    name: "AI/Machine Learning Specialist",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 2,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 4, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 5, SelfManagement: 4 },
    // abilities: { LogicalMathematical: 5,  Spatial: 4, Linguistic: 3, Interpersonal: 2}
  },
   {
    name: "Cloud Architect",
    traits: { Openness: 5, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 4, InterpersonalTeam: 3, LeadershipInitiative: 4, LearningDevelopment: 5, SelfManagement: 4 },
    // abilities: { LogicalMathematical: 5,  Spatial: 5, Linguistic: 4, Interpersonal: 3}
  },
  {
    name: "Financial Analyst",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4 },
    // abilities: { LogicalMathematical: 5,  Spatial: 3, Linguistic: 4, Interpersonal: 3}
  },
   {
    name: "Chartered Accountant",
    traits: { Openness: 2, Conscientiousness: 5, Extraversion: 2,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 5 },
    // abilities: { LogicalMathematical: 5,  Spatial: 2, Linguistic: 4, Interpersonal: 3}
  },
   {
    name: "Marketing Manager", // Replacing Marketing Specialist from old list
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 5,  Agreeableness: 4, 'Emotional Stability': 4, HonestyHumility: 3  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 3, InterpersonalTeam: 5, LeadershipInitiative: 5, LearningDevelopment: 4, SelfManagement: 4 },
    // abilities: { LogicalMathematical: 3,  Spatial: 4, Linguistic: 5, Interpersonal: 5}
  },
  {
    name: "Project Manager",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 4,  Agreeableness: 4, 'Emotional Stability': 5, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 4, InterpersonalTeam: 5, LeadershipInitiative: 5, LearningDevelopment: 4, SelfManagement: 5},
    // abilities: { LogicalMathematical: 4,  Spatial: 3, Linguistic: 4, Interpersonal: 5} 
  },
  {
    name: "Human Resources Manager", // Replacing HR Coordinator
    traits: { Openness: 4, Conscientiousness: 4, Extraversion: 5, Agreeableness: 5, 'Emotional Stability': 4, HonestyHumility: 5 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 5, InterpersonalTeam: 5, LeadershipInitiative: 4, LearningDevelopment: 4, SelfManagement: 4},
    // abilities: { LogicalMathematical: 3,  Spatial: 2, Linguistic: 4, Interpersonal: 5}  
  },
  {
    name: "Physician",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 3, Agreeableness: 4, 'Emotional Stability': 5, HonestyHumility: 5 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 4, LeadershipInitiative: 4, LearningDevelopment: 5, SelfManagement: 4},
    // abilities: { LogicalMathematical: 4,  Spatial: 3, Linguistic: 4, Interpersonal: 4}   
  },
   {
    name: "Physical Therapist",
    traits: { Openness: 4, Conscientiousness: 4, Extraversion: 4, Agreeableness: 5, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 4, InterpersonalTeam: 5, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    // abilities: { LogicalMathematical: 3,  Spatial: 4, Linguistic: 4, Interpersonal: 5}   
  },
   {
    name: "Nurse",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 4, Agreeableness: 5, 'Emotional Stability': 5, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 5, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 5},
    // abilities: { LogicalMathematical: 3,  Spatial: 3, Linguistic: 4, Interpersonal: 5}   
  },
   {
    name: "Electrical Engineer",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 2, Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    // abilities: { LogicalMathematical: 5,  Spatial: 5, Linguistic: 3, Interpersonal: 2}  
  },
   {
    name: "Mechanical Engineer",
     traits: { Openness: 4, Conscientiousness: 5, Extraversion: 2, Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    // abilities: { LogicalMathematical: 5,  Spatial: 5, Linguistic: 3, Interpersonal: 2}  
  },
   {
    name: "Telecom Engineer",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 2, Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 4, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 5, SelfManagement: 4},
    // abilities: { LogicalMathematical: 5,  Spatial: 4, Linguistic: 3, Interpersonal: 2}   
  },
   {
    name: "Teacher/Educator",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 4, Agreeableness: 5, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 4, InterpersonalTeam: 5, LeadershipInitiative: 4, LearningDevelopment: 5, SelfManagement: 4},
    // abilities: { LogicalMathematical: 3,  Spatial: 3, Linguistic: 5, Interpersonal: 5}       
    },
   {
    name: "Creative Designer",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 3, Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 3 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 4, EthicalProfessional: 3, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    // abilities: { LogicalMathematical: 2,  Spatial: 5, Linguistic: 4, Interpersonal: 3}   
    },
   {
    name: "Civil Service Officer",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 3, Agreeableness: 4, 'Emotional Stability': 4, HonestyHumility: 5 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 4, LeadershipInitiative: 4, LearningDevelopment: 4, SelfManagement: 4},
    // abilities: { LogicalMathematical: 4,  Spatial: 2, Linguistic: 5, Interpersonal: 4}       
  },
  {
    name: "Operations Manager",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 4, Agreeableness: 4, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 4, InterpersonalTeam: 4, LeadershipInitiative: 5, LearningDevelopment: 4, SelfManagement: 5},
    // abilities: { LogicalMathematical: 4,  Spatial: 3, Linguistic: 4, Interpersonal: 4}   
   },
];

export const questions = [
// SECTION 1: BIG FIVE / OCEAN (Section Weight: 0.4)
// 1. OPENNESS TO EXPERIENCE (Trait Weight: 1.0)

// {
//   id: 'O-L1', type: 'likert', primaryTrait: 'Openness', 
//   text: 'I enjoy exploring subjects outside my field of study or expertise.',
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: createLikertAnswers(['continuousLearning', 'knowledgeAcquisition'])
// },

// {
//   id: 'O-L2', type: 'likert', primaryTrait: 'Openness', 
//   text: 'I prefer practical, proven solutions over experimental or innovative approaches.', 
//   reverse: true,
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: createLikertAnswers(['creativeProblemSolving', 'adaptability'], true)
// },

// {
//   id: 'O-FC', type: 'forced', primaryTrait: 'Openness', 
//   text: 'When learning a new skill or subject, I typically:',
//   formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: 
//   [
// { 
//   id: 'O-FC-A', optionKey: 'A', text: 'Explore different approaches', 
//   scores: { learningFlexibility: pointMap['High'],  informationProcessing: pointMap['High'] }, 
//   baseScoreValue: pointMap['High'] 
// },
// { 
//   id: 'O-FC-B', optionKey: 'B', text: 'Master the fundamentals',
//   scores: { learningFlexibility: pointMap['Moderate'],  informationProcessing: pointMap['High'] },
//   baseScoreValue: pointMap['Moderate'] 
// }
//   ]
// },

// {
//  id: 'O-SJT', type: 'sjt', primaryTrait: 'Openness', 
//  text: 'Your team/group needs to develop a solution to a recurring problem. How would you most likely contribute?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.4,
//  answers: [
// { 
//   id: 'O-SJT-A', optionKey: 'A',  text: 'Suggest unconventional approaches', 
//   scores: {  creativeProblemSolving: pointMap['Excellent'] }, 
//   baseScoreValue: pointMap['Excellent'] 
// },
// {
//   id: 'O-SJT-B', optionKey: 'B',  text: 'Analyse what has worked', 
//   scores: { creativeProblemSolving: pointMap['Limited']  }, 
//   baseScoreValue: pointMap['Limited'] 
// },
// { 
//   id: 'O-SJT-C', optionKey: 'C',  text: 'Identify the underlying patterns', 
//   scores: {  creativeProblemSolving: pointMap['Strong'],  patternDetection: pointMap['Strong']  }, 
//   baseScoreValue: pointMap['Strong'] 
// },
// { 
//   id: 'O-SJT-D', optionKey: 'D', text: 'Propose testing multiple approaches', 
//   scores: {  creativeProblemSolving: pointMap['Strong'],  adaptability: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Strong'] 
// }
//  ]
// },

// 2. CONSCIENTIOUSNESS (Trait Weight: 1.3)

// {
//  id: 'C-L1', type: 'likert', primaryTrait: 'Conscientiousness', 
//  text: 'I create detailed plans with specific milestones before starting important projects.',
//  formatWeight: 1.0, traitWeight: 1.3, sectionWeight: 0.4,
//  answers: createLikertAnswers(['planningOrganization']),
//  answers: createLikertAnswers(['planningOrganization', 'timeManagement']),
// },

// {
//   id: 'C-L2', type: 'likert', primaryTrait: 'Conscientiousness', 
//   text: 'I sometimes miss deadlines or appointments despite my best intentions.', reverse: true,
//   formatWeight: 1.0, traitWeight: 1.3, sectionWeight: 0.4,
//   answers: createLikertAnswers(['reliability', 'timeManagement'], true)
// },
    
// {
//   id: 'C-FC', type: 'forced', primaryTrait: 'Conscientiousness', 
//   text: 'When responsible for completing a task, I typically:',
//   formatWeight: 1.2, traitWeight: 1.3, sectionWeight: 0.4,
//   answers: [
// { 
//   id: 'C-FC-A', optionKey: 'A', text: 'Follow a systematic approach',   
//   scores: { systematicProblemSolving: pointMap['High'] }, 
//   baseScoreValue: pointMap['High']
// },

// { 
//   id: 'C-FC-B', optionKey: 'B', text: 'Focus on achieving the main objective', 
//   scores: { systematicProblemSolving: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['Moderate'] 
// }
//   ]
// },
    
// {
//   id: 'C-SJT', type: 'sjt', primaryTrait: 'Conscientiousness', 
//   text: 'You have several important deadlines approaching simultaneously. How would you manage this situation?',
//   formatWeight: 1.4, traitWeight: 1.3, sectionWeight: 0.4,
//   answers: [
//   { 
//     id: 'C-SJT-A', optionKey: 'A', text: 'Create a schedule with time blocks', 
//     scores: { timeManagement: pointMap['Excellent'], planningOrganization: pointMap['Excellent'], 
//               delegationAbility: pointMap['Moderate'] },
//     baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//     id: 'C-SJT-B', optionKey: 'B', text: 'Start with most urgent task first', 
//     scores: { timeManagement: pointMap['Strong'], planningOrganization: pointMap['Moderate'], 
//               delegationAbility: pointMap['Limited'], prioritization: pointMap['Strong'] }, 
//     baseScoreValue: pointMap['Strong'] 
//   },
//   { 
//     id: 'C-SJT-C',  optionKey: 'C', text: 'Work on whatever feels manageable',
//     scores: { timeManagement: pointMap['Limited'], planningOrganization: pointMap['Limited'], 
//               delegationAbility: pointMap['Limited'] }, 
//     baseScoreValue: pointMap['Limited'] 
//   },
//   { 
//     id: 'C-SJT-D', optionKey: 'D', text: 'Evaluate which tasks could be simplified', 
//     scores: { timeManagement: pointMap['Strong'], planningOrganization: pointMap['Strong'], 
//               delegationAbility: pointMap['Strong'], analyticalApproach: pointMap['Strong'] },
//     baseScoreValue: pointMap['Strong'] 
//   }
//  ]
// },

// 3. EXTRAVERSION (Trait Weight: 1.0)

// {
//   id: 'E-L1', type: 'likert', primaryTrait: 'Extraversion', 
//   text: 'I feel energized after spending time in social gatherings.',
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: createLikertAnswers([])
//   createLikertAnswers(['networkingAbility', 'motivationalAbility'])
// },

// {
//   id: 'E-L2', type: 'likert', primaryTrait: 'Extraversion', 
//   text: 'I prefer to think through my ideas thoroughly before sharing them in group settings.', reverse: true,
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: createLikertAnswers(['assertiveCommunication'], true)
//   createLikertAnswers(['assertiveCommunication', 'reflectivePractice'], true)
// },

// {
//   id: 'E-FC', type: 'forced', primaryTrait: 'Extraversion', 
//   text: 'When working on projects with others, I typically:',
//   formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: [
//   { 
//     id: 'E-FC-A', optionKey: 'A', text: 'Express my thoughts readily',
//     scores: { groupDynamics: pointMap['High'],  assertiveCommunication: pointMap['High'] }, 
//     baseScoreValue: pointMap['High'] 
//   },
//   { 
//     id: 'E-FC-B', optionKey: 'B',  text: 'Listen carefully and contribute thoughtfully', 
//     scores: { groupDynamics: pointMap['Moderate'], communicationFlexibility: pointMap['Moderate'] }, 
//     baseScoreValue: pointMap['Moderate'] 
//   }
//   ]
// },
    
// {
//   id: 'E-SJT', type: 'sjt', primaryTrait: 'Extraversion', 
//   text: "You're attending a professional/academic networking event. How would you most likely approach this opportunity?",
//   formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: [
// { 
//   id: 'E-SJT-A', optionKey: 'A', text: 'Circulate widely, introducing yourself', 
//   scores: { networkingAbility: pointMap['Excellent'] }, 
//   baseScoreValue: pointMap['Excellent']  
// },

// { 
//   id: 'E-SJT-B', optionKey: 'B', text: 'Find common connections and build deeper conversations', 
//   scores: { networkingAbility: pointMap['Strong'], interpersonalAdaptability: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Strong'] 
// },

// { 
//   id: 'E-SJT-C', optionKey: 'C', text: 'Join an existing group discussion', 
//   scores: { networkingAbility: pointMap['Strong'], groupDynamics: pointMap['Strong'] },
//   baseScoreValue: pointMap['Strong'] 
// },

// { 
//   id: 'E-SJT-D', optionKey: 'D', text: 'Connect with specific individuals', 
//   scores: { networkingAbility: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Strong']
// }
// ]
// },

// 4. AGREEABLENESS (Trait Weight: 1.0)

// {
//   id: 'A-L1', type: 'likert', primaryTrait: 'Agreeableness', 
//   text: "I try to find compromises that accommodate everyone's perspective during disagreements.",
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: createLikertAnswers(['conflictResolution', 'perspectiveTaking'])
// },

// {
//   id: 'A-L2', type: 'likert', primaryTrait: 'Agreeableness', 
//   text: 'Being right is ultimately more important than being liked.', reverse: true,
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: createLikertAnswers(['relationshipMaintenance', 'collaboration'], true)
// },

// {
//   id: 'A-FC', type: 'forced', primaryTrait: 'Agreeableness', 
//   text: "When providing feedback on someone's work or ideas, I typically:",
//   formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: [
// { 
//   id: 'A-FC-A', optionKey: 'A', text: 'Focus on positive aspects and offer gentle suggestions', 
//   scores: { feedbackDelivery: pointMap['High'],  empathy: pointMap['High'] }, 
//   baseScoreValue: pointMap['High'] 
// },
// { 
//   id: 'A-FC-B', optionKey: 'B', text: 'Provide direct, straightforward assessment of strengths and weaknesses', 
//   scores: { feedbackDelivery: pointMap['Moderate'], assertiveCommunication: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['Moderate'] 
// }
//   ]
// },

// {
//   id: 'A-SJT', type: 'sjt', primaryTrait: 'Agreeableness', 
//   text: 'A team member/classmate consistently contributes less than others to group projects. What would you most likely do?',
//   formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.4,
//   answers: [
// { 
//   id: 'A-SJT-A', optionKey: 'A', text: 'Have a private, supportive conversation to understand their perspective', 
//   scores: { conflictResolution: pointMap['Excellent'], empathy: pointMap['Excellent'], teamManagement: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Excellent'] 
// },
// { 
//   id: 'A-SJT-B', optionKey: 'B', text: 'Raise the issue with the group or supervisor to find a collective solution', 
//   scores: { conflictResolution: pointMap['Moderate'],  empathy: pointMap['Limited'],  teamManagement: pointMap['Moderate'], professionalAssertiveness: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['Moderate'] 
// },
// { 
//   id: 'A-SJT-C', optionKey: 'C', text: 'Compensate by taking on additional work to ensure the project succeeds', 
//   scores: { conflictResolution: pointMap['Limited'], empathy: pointMap['Strong'], teamManagement: pointMap['Limited']  }, 
//   baseScoreValue: pointMap['Limited'] 
// },
// { 
//   id: 'A-SJT-D', optionKey: 'D', text: 'Propose adjusting the task distribution based on contributions or strengths', 
//   scores: { conflictResolution: pointMap['Strong'], empathy: pointMap['Strong'], teamManagement: pointMap['Strong'], delegationAbility: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Strong'] 
// }
//   ]
// },

// 5. EMOTIONAL STABILITY (Trait Weight: 1.2)

// {
//   id: 'N-L1', type: 'likert', primaryTrait: 'Emotional Stability', 
//   text: 'I remain composed under pressure when facing important deadlines or evaluations.',
//   formatWeight: 1.0, traitWeight: 1.2, sectionWeight: 0.4,
//   answers: createLikertAnswers(['stressManagement', 'emotionalRegulation'])
// },

// {
//   id: 'N-L2', type: 'likert', primaryTrait: 'Emotional Stability', 
//   text: 'I often worry about making mistakes that others might notice or judge.', reverse: true,
//   formatWeight: 1.0, traitWeight: 1.2, sectionWeight: 0.4,
//   answers: createLikertAnswers(['resilience'], true)
//   answers: createLikertAnswers(['resilience', 'stressManagement'], true)
// },

// {
//   id: 'N-FC', type: 'forced', primaryTrait: 'Emotional Stability', 
//   text: 'After receiving critical feedback on your performance, you typically:',
//   formatWeight: 1.2, traitWeight: 1.2, sectionWeight: 0.4,
//   answers: [
// { 
//   id: 'N-FC-A', optionKey: 'A', text: 'Consider the useful points while maintaining confidence', 
//   scores: { feedbackProcessing: pointMap['High'], resilience: pointMap['High'] },
//   baseScoreValue: pointMap['High'] 
// },
// { 
//   id: 'N-FC-B', optionKey: 'B', text: 'Worry about the implications and how it reflects on you',  
//   scores: { feedbackProcessing: pointMap['Moderate'], resilience: pointMap['Limited'] }, 
//   baseScoreValue: pointMap['Limited'] 
// }
//  ]
// },
    
// {
//   id: 'N-SJT', type: 'sjt', primaryTrait: 'Emotional Stability', 
//   text: "You've been asked to take on a challenging responsibility that will test your abilities. How do you typically respond emotionally?",
//   formatWeight: 1.4, traitWeight: 1.2, sectionWeight: 0.4,
//   answers: [
// { 
//   id: 'N-SJT-A', optionKey: 'A', text: 'Feel confident in your ability to handle it', 
//   scores: { stressManagement: pointMap['Excellent'], resilience: pointMap['Excellent'] }, 
//   baseScoreValue: pointMap['Excellent'] 
// },
// { 
//   id: 'N-SJT-B', optionKey: 'B', text: 'Experience significant anxiety about potential failure', 
//   scores: { stressManagement: pointMap['Limited'], resilience: pointMap['Limited'] }, 
//   baseScoreValue: pointMap['Limited'] 
// },
// { 
//   id: 'N-SJT-C', optionKey: 'C', text: 'Feel initially nervous but use that energy to prepare and focus', 
//   scores: { stressManagement: pointMap['Strong'], resilience: pointMap['Strong'], adaptability: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Strong'] 
// },
// { 
//   id: 'N-SJT-D', optionKey: 'D', text: 'Focus on analyzing the specific requirements and breaking down the challenge', 
//   scores: { stressManagement: pointMap['Strong'], resilience: pointMap['Strong'], analyticalApproach: pointMap['Strong'] },
//   baseScoreValue: pointMap['Strong'] 
// }
//   ]
// },

// SECTION 2: HONESTY-HUMILITY (Section Weight: 0.18, Trait Weight: 1.3)

// {
//   id: 'HH-L1', type: 'likert', primaryTrait: 'HonestyHumility', 
//   text: 'I would feel uncomfortable taking credit for work that was primarily done by others.',
//   formatWeight: 1.0, traitWeight: 1.3, sectionWeight: 0.18,
//   answers: createLikertAnswers(['attributionIntegrity', 'professionalEthics'])
// },

// {
//   id: 'HH-L2', type: 'likert', primaryTrait: 'HonestyHumility',
//   text: 'I believe bending the rules is acceptable if it helps achieve important goals.', reverse: true,
//   formatWeight: 1.0, traitWeight: 1.3, sectionWeight: 0.18,
//   answers: createLikertAnswers(['ruleAdherence', 'ethicalDecisionMaking'], true)
// },

// {
//   id: 'HH-FC1', type: 'forced', primaryTrait: 'HonestyHumility',
//   text: 'Which statement better describes you?',
//   formatWeight: 1.2, traitWeight: 1.3, sectionWeight: 0.18,
//   answers: [
//   { 
//    id: 'HH-FC1-A', optionKey: 'A', text: 'Getting results is ultimately what matters most', 
//    scores: { processIntegrity: pointMap['Limited'] },
//    baseScoreValue: pointMap['Limited'] 
//   },
//   { 
//    id: 'HH-FC1-B', optionKey: 'B', text: 'How you achieve results is as important', 
//    scores: { processIntegrity: pointMap['High'] },
//    baseScoreValue: pointMap['High'] 
//   }
//   ]
// },

// {
//  id: 'HH-FC2', type: 'forced', primaryTrait: 'HonestyHumility', 
//  text: 'When recognition is being given for a successful project, I prefer:',
//  formatWeight: 1.2, traitWeight: 1.3, sectionWeight: 0.18,
//  answers: [
//  { 
//   id: 'HH-FC2-A', optionKey: 'A', text: 'Ensuring I receive appropriate credit for my contributions',   
//   scores: { collaboration: pointMap['Limited'] },
//   baseScoreValue: pointMap['Limited'] 
//  },
//  { 
//   id: 'HH-FC2-B',  optionKey: 'B', text: "Emphasizing the team's collective achievement",
//   scores: { collaboration: pointMap['High'] },
//   baseScoreValue: pointMap['High']
//  }
//   ]
// },

// {
//   id: 'HH-FC3', type: 'forced', primaryTrait: 'HonestyHumility',
//   text: 'In a competitive situation at work, I would rather:',
//   formatWeight: 1.2, traitWeight: 1.3, sectionWeight: 0.18,
//   answers: [
//  { 
//   id: 'HH-FC3-A', optionKey: 'A', text: 'Use all advantages available within the rules',
//   scores: { ethicalDecisionMaking: pointMap['Limited'] },
//   baseScoreValue: pointMap['Limited']
//  },
//  { 
//   id: 'HH-FC3-B',  optionKey: 'B', text: 'Succeed only through means I consider completely fair', 
//   scores: { ethicalDecisionMaking: pointMap['High'] },
//   baseScoreValue: pointMap['High']
//  }
//  ]
// },
    
// {
//   id: 'HH-SJT1', type: 'sjt', primaryTrait: 'HonestyHumility', 
//   text: "You discover a way to cut corners on a project that no one would likely notice but doesn't follow company policy. What would you most likely do?",
//   formatWeight: 1.4, traitWeight: 1.3, sectionWeight: 0.18,  
//   answers: [
//   { 
//    id: 'HH-SJT1-A',optionKey: 'A', text: 'Follow the proper procedures regardless', 
//    scores: { 
//     policyCompliance: pointMap['Excellent'], 
//     ethicalDecisionMaking: pointMap['Excellent'] }, 
//    baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//    id: 'HH-SJT1-B', optionKey: 'B', text: 'Use the shortcut but document the deviation and reason',
//    scores: { 
//     policyCompliance: pointMap['Moderate'], 
//     ethicalDecisionMaking: pointMap['Moderate'], 
//     transparency: pointMap['Moderate']  }, 
//   baseScoreValue: pointMap['Moderate'] 
//   },
//   { 
//    id: 'HH-SJT1-C', optionKey: 'C', text: 'Use the shortcut since the end result is the same',
//    scores: { 
//     policyCompliance: pointMap['Poor'], 
//     ethicalDecisionMaking: pointMap['Limited'] },
//    baseScoreValue: pointMap['Poor']
//   },
//   { 
//    id: 'HH-SJT1-D', optionKey: 'D', text: 'Ask a supervisor if the shortcut is permissible',
//    scores: { 
//     policyCompliance: pointMap['Strong'], 
//     ethicalDecisionMaking: pointMap['Strong'] },
//    baseScoreValue: pointMap['Strong'] 
//   }
//   ]
// },

// {
//   id: 'HH-SJT2', type: 'sjt', primaryTrait: 'HonestyHumility',
//   text: 'Your colleague takes credit for your idea during a meeting with senior leadership. How would you respond?',
//   formatWeight: 1.4, traitWeight: 1.3, sectionWeight: 0.18,
//   answers: [
//   { 
//    id: 'HH-SJT2-A', optionKey: 'A', text: 'Address it privately with your colleague afterwards', 
//    scores: { 
//     conflictResolution: pointMap['Strong'], 
//     professionalAssertiveness: pointMap['Moderate'], 
//     attributionIntegrity: pointMap['Strong'] },
//    baseScoreValue: pointMap['Strong'] 
//   },
//   { 
//    id: 'HH-SJT2-B', optionKey: 'B', text: 'Immediately clarify your contribution during the meeting', 
//    scores: { 
//     conflictResolution: pointMap['Limited'], 
//     professionalAssertiveness: pointMap['Strong'], 
//     attributionIntegrity: pointMap['Excellent'] },
//    baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//    id: 'HH-SJT2-C', optionKey: 'C', text: 'Let it go this time but ensure future communication prevents recurrence', 
//    scores: { 
//     conflictResolution: pointMap['Moderate'], 
//     professionalAssertiveness: pointMap['Limited'] }, 
//    baseScoreValue: pointMap['Limited'] 
//   },
//   { 
//    id: 'HH-SJT2-D', optionKey: 'D', text: 'Speak to your manager privately about the situation', 
//    scores: { 
//     conflictResolution: pointMap['Strong'], 
//     professionalAssertiveness: pointMap['Moderate'], 
//     attributionIntegrity: pointMap['Strong'] },
//    baseScoreValue: pointMap['Strong'] 
//   }
//         ]
// },

// {
//  id: 'HH-SJT3', type: 'sjt', primaryTrait: 'HonestyHumility',
//  text: "You notice a small error in a report that's already been approved, which makes your department's results look slightly better than they actually are. What would you most likely do?",
//  formatWeight: 1.4, traitWeight: 1.3, sectionWeight: 0.18,
//  answers: [
//   { 
//    id: 'HH-SJT3-A', optionKey: 'A', text: 'Bring the error to attention immediately', 
//    scores: { transparency: pointMap['Excellent'], ethicalDecisionMaking: pointMap['Excellent'] }, 
//    baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//    id: 'HH-SJT3-B', optionKey: 'B', text: 'Wait to see if anyone else notices',
//    scores: { transparency: pointMap['Limited'], ethicalDecisionMaking: pointMap['Limited'] },
//    baseScoreValue: pointMap['Limited'] 
//   },
//   { 
//    id: 'HH-SJT3-C', optionKey: 'C', text: 'Correct it quietly without drawing attention', 
//    scores: { transparency: pointMap['Moderate'], ethicalDecisionMaking: pointMap['Strong'] },
//    baseScoreValue: pointMap['Strong']
//   },
//   {
//    id: 'HH-SJT3-D', optionKey: 'D', text: 'Leave it since the error is minor and already approved',
//    scores: { transparency: pointMap['Poor'], ethicalDecisionMaking: pointMap['Poor'] },
//    baseScoreValue: pointMap['Poor'] 
//   }
//   ]
// },

// {
//  id: 'HH-SJT4', type: 'sjt', primaryTrait: 'HonestyHumility',
//  text: "During a job interview, you're asked about experience with a software program that would be important for the role. You've used it briefly but aren't proficient. How would you respond?",
//  formatWeight: 1.4, traitWeight: 1.3, sectionWeight: 0.18,
//  answers: [
//  { 
//   id: 'HH-SJT4-A', optionKey: 'A', text: 'Clearly state your limited experience but express eagerness to learn',
//   scores: { honestyInSelfPresentation: pointMap['Excellent'], ethicalDecisionMaking: pointMap['Excellent'] },
//   baseScoreValue: pointMap['Excellent'] 
//  },
//  { 
//   id: 'HH-SJT4-B', optionKey: 'B', text: 'Describe your experience in vague terms that might imply more proficiency',
//   scores: { honestyInSelfPresentation: pointMap['Limited'], ethicalDecisionMaking: pointMap['Limited'] },
//   baseScoreValue: pointMap['Limited'] 
//  },
//  { 
//   id: 'HH-SJT4-C', optionKey: 'C', text: 'Focus the conversation on your proficiency with similar programs',
//   scores: { honestyInSelfPresentation: pointMap['Moderate'], ethicalDecisionMaking: pointMap['Moderate'] },
//   baseScoreValue: pointMap['Moderate'] 
//  },
//  { 
//   id: 'HH-SJT4-D', optionKey: 'D', text: 'Acknowledge limited experience but highlight relevant skills and quick learning ability',
//   scores: { honestyInSelfPresentation: pointMap['Strong'], ethicalDecisionMaking: pointMap['Strong'], adaptiveLearning: pointMap['Strong'] },
//   baseScoreValue: pointMap['Strong'] 
//  }
//   ]
// },

// {
//   id: 'HH-SJT5', type: 'sjt', primaryTrait: 'HonestyHumility', 
//   text: "You're selling your used laptop online. You know it has an issue that only occurs occasionally. How would you handle this in your listing?",
//   formatWeight: 1.4, traitWeight: 1.3, sectionWeight: 0.18,
//   answers: [
//   { 
//    id: 'HH-SJT5-A', optionKey: 'A', text: 'Clearly mention the specific issue and its occasional nature',
//    scores: { transactionIntegrity: pointMap['Excellent'], ethicalConsistency: pointMap['Excellent'], transparency: pointMap['Excellent'] },
//    baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//    id: 'HH-SJT5-B', optionKey: 'B', text: 'Only discuss the issue if a potential buyer asks directly about problems',
//    scores: { transactionIntegrity: pointMap['Limited'], ethicalConsistency: pointMap['Limited'], transparency: pointMap['Limited'] },
//    baseScoreValue: pointMap['Limited'] 
//   },
//   { 
//    id: 'HH-SJT5-C', optionKey: 'C', text: "Mention the laptop is 'mostly reliable' without specifying the issue",
//    scores: { transactionIntegrity: pointMap['Limited'], ethicalConsistency: pointMap['Limited'], transparency: pointMap['Limited'] },
//   baseScoreValue: pointMap['Limited'] 
//   },
//   { 
//    id: 'HH-SJT5-D', optionKey: 'D', text: "Note that it has some minor issues typical for its age",
//    scores: { transactionIntegrity: pointMap['Moderate'], ethicalConsistency: pointMap['Moderate'], transparency: pointMap['Moderate'] },
//   baseScoreValue: pointMap['Moderate'] 
//   }
//   ]
// },

// SECTION 3: MULTIPLE INTELLIGENCES (Section Weight: 0.25)
// 1. LINGUISTIC (Trait Weight: 1.1)

// {
//   id: 'LI-L1', type: 'likert', primaryTrait: 'Linguistic',
//   text: 'I can easily explain complex concepts in clear, understandable terms.',
//   formatWeight: 1.0, traitWeight: 1.1, sectionWeight: 0.25,
//   answers: createLikertAnswers(['conceptCommunication', 'explanatoryClarity'])
// },

// {
//   id: 'LI-L2', type: 'likert', primaryTrait: 'Linguistic',
//   text: 'I notice and remember the specific words people use in conversations.',
//   formatWeight: 1.0, traitWeight: 1.1, sectionWeight: 0.25,
//   answers: createLikertAnswers([]),
//   answers: createLikertAnswers(['audienceAwareness', 'informationProcessing']),
// },

// {
//   id: 'LI-FC', type: 'forced', primaryTrait: 'Linguistic',
//   text: 'When trying to understand a difficult concept, I prefer:',
//   formatWeight: 1.2, traitWeight: 1.1, sectionWeight: 0.25,
//   answers: [
//   { 
//     id: 'LI-FC-A', optionKey: 'A', text: 'Reading detailed explanations',  
//     scores: { informationProcessing: pointMap['High'], learningApproach: pointMap['High'] }, 
//     baseScoreValue: pointMap['High'] 
//   },
//   { 
//     id: 'LI-FC-B', optionKey: 'B', text: 'Seeing diagrams or visual representations',  
//     scores: { informationProcessing: pointMap['High'], learningApproach: pointMap['High'] }, 
//     baseScoreValue: pointMap['Moderate'] 
//   }
//   ]
// },

// {
//   id: 'LI-SJT', type: 'sjt', primaryTrait: 'Linguistic',
//   text: 'You need to explain an important procedure to a group with mixed backgrounds and expertise. How would you most likely approach this?',
//   formatWeight: 1.4, traitWeight: 1.1, sectionWeight: 0.25,
//   answers: [
//   { 
//     id: 'LI-SJT-A', optionKey: 'A', text: 'Use carefully chosen analogies and examples', 
//     scores: { communicationAdaptability: pointMap['Excellent'], audienceAwareness: pointMap['Excellent'], verbalExplanation: pointMap['Strong'] }, 
//     baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//     id: 'LI-SJT-B', optionKey: 'B', text: 'Create a visual demonstration', 
//     scores: { communicationAdaptability: pointMap['Strong'], audienceAwareness: pointMap['Strong'], verbalExplanation: pointMap['Moderate'] }, 
//     baseScoreValue: pointMap['Moderate'] 
//   },
//   { 
//     id: 'LI-SJT-C', optionKey: 'C', text: 'Provide a detailed, precise verbal explanation', 
//     scores: { communicationAdaptability: pointMap['Moderate'], audienceAwareness: pointMap['Limited'], verbalExplanation: pointMap['Strong'] }, 
//     baseScoreValue: pointMap['Strong'] 
//   },
//   { 
//     id: 'LI-SJT-D', optionKey: 'D', text: 'Guide them through performing the task step-by-step', 
//     scores: { communicationAdaptability: pointMap['Strong'], audienceAwareness: pointMap['Strong'], verbalExplanation: pointMap['Strong'], learningApproach: pointMap['Strong'] }, 
//     baseScoreValue: pointMap['Strong'] 
//   }
//   ]
// },

// 2. LOGICAL-MATHEMATICAL (Trait Weight: 1.2)

// {
//   id: 'LM-L1', type: 'likert', primaryTrait: 'LogicalMathematical', 
//   text: 'I enjoy working with numbers and analyzing statistical information.',
//   formatWeight: 1.0, traitWeight: 1.2, sectionWeight: 0.25,
//   answers: createLikertAnswers(['quantitativeAnalysis'])
//   answers: createLikertAnswers(['quantitativeAnalysis', 'informationProcessing'])
// },

// {
//   id: 'LM-L2', type: 'likert', primaryTrait: 'LogicalMathematical', 
//   text: 'I naturally look for logical inconsistencies in arguments or proposals.',
//   formatWeight: 1.0, traitWeight: 1.2, sectionWeight: 0.25,
//   answers: createLikertAnswers(['logicalEvaluation', 'criticalReasoning'])
// },

// {
//   id: 'LM-FC', type: 'forced', primaryTrait: 'LogicalMathematical', 
//   text: 'When solving a complex problem, I prefer to:',
//   formatWeight: 1.2, traitWeight: 1.2, sectionWeight: 0.25,
//   answers: [
//   { 
//     id: 'LM-FC-A', optionKey: 'A', text: 'Break it down into logical components', 
//     scores: { analyticalApproach: pointMap['High'], systematicProblemSolving: pointMap['High'] }, 
//     baseScoreValue: pointMap['High'] 
//   },
//   { 
//     id: 'LM-FC-B', optionKey: 'B', text: 'Brainstorm multiple creative approaches',  
//     scores: { analyticalApproach: pointMap['Moderate'], creativeProblemSolving: pointMap['High'] }, 
//     baseScoreValue: pointMap['Moderate'] 
//   }
//   ]
// },

// {
//   id: 'LM-SJT', type: 'sjt', primaryTrait: 'LogicalMathematical', 
//   text: 'Your group needs to make an important decision with limited information. How would you contribute to this process?',
//   formatWeight: 1.4, traitWeight: 1.2, sectionWeight: 0.25,
//   answers: [
//   { 
//     id: 'LM-SJT-A', optionKey: 'A', text: 'Create a framework to evaluate options systematically', 
//     scores: { decisionMethodology: pointMap['Excellent'], analyticalApproach: pointMap['Excellent'], informationUtilization: pointMap['Strong'], systematicProblemSolving: pointMap['Excellent'] }, 
//     baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//     id: 'LM-SJT-B', optionKey: 'B', text: 'Draw on similar past situations and their outcomes', 
//     scores: { decisionMethodology: pointMap['Strong'], analyticalApproach: pointMap['Strong'], informationUtilization: pointMap['Strong'], patternDetection: pointMap['Strong'] },
//     baseScoreValue: pointMap['Strong'] 
//   },
//   { 
//     id: 'LM-SJT-C', optionKey: 'C', text: 'Suggest gathering specific additional critical information', 
//     scores: { decisionMethodology: pointMap['Strong'], analyticalApproach: pointMap['Strong'], informationUtilization: pointMap['Excellent'], criticalReasoning: pointMap['Strong'] },
//     baseScoreValue: pointMap['Strong'] 
//   },
//   { 
//     id: 'LM-SJT-D',optionKey: 'D',  text: 'Propose discussing potential impacts from multiple perspectives', 
//     scores: { decisionMethodology: pointMap['Strong'], analyticalApproach: pointMap['Strong'], informationUtilization: pointMap['Strong'], perspectiveTaking: pointMap['Strong'] },
//     baseScoreValue: pointMap['Strong'] 
//   }
//   ]
// },

// 3. SPATIAL (Trait Weight: 1.0)

// {
//   id: 'SI-L1', type: 'likert', primaryTrait: 'Spatial', 
//   text: 'I can easily visualize how something would look from a different angle or perspective.',
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//   answers: createLikertAnswers([])
//   answers: createLikertAnswers(['patternDetection', 'creativeProblemSolving'])
// },

// {
//   id: 'SI-L2', type: 'likert', primaryTrait: 'Spatial', 
//   text: 'I prefer instructions that include diagrams or pictures rather than just written steps.',
//   formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//   answers: createLikertAnswers([])
//   answers: createLikertAnswers(['informationOrganization', 'informationProcessing'])
// },

// {
//   id: 'SI-FC', type: 'forced', primaryTrait: 'Spatial', 
//   text: 'When trying to remember a location or route, I typically:',
//   formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.25,
//   answers: [
//   { 
//     id: 'SI-FC-A', optionKey: 'A', text: 'Visualize a mental map', 
//     scores: { patternDetection: pointMap['High'],  creativeProblemSolving: pointMap['Moderate'] }, 
//     baseScoreValue: pointMap['High'] 
//   },
//   { 
//     id: 'SI-FC-B', optionKey: 'B', text: 'Remember the sequence of directions or landmarks', 
//     scores: { informationOrganization: pointMap['Moderate'], informationProcessing: pointMap['Moderate'] }, 
//     baseScoreValue: pointMap['Moderate'] 
//   }
//   ]
// },

// {
//   id: 'SI-SJT', type: 'sjt', primaryTrait: 'Spatial',
//   text: 'You need to rearrange furniture in a room to accommodate more people. How would you approach this?',
//   formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.25,
//   answers: [
//   { 
//     id: 'SI-SJT-A', optionKey: 'A', text: 'Visualize different arrangements in your mind first', 
//     scores: { patternDetection: pointMap['Excellent'], creativeProblemSolving: pointMap['Strong'], logicalEvaluation: pointMap['Moderate'] }, 
//     baseScoreValue: pointMap['Excellent'] 
//   },
//   { 
//     id: 'SI-SJT-B', optionKey: 'B', text: 'Sketch several possible floor plans on paper', 
//     scores: { planningOrganization: pointMap['Strong'],  informationOrganization: pointMap['Strong'], creativeProblemSolving: pointMap['Moderate']}, 
//     baseScoreValue: pointMap['Strong'] 
//   },
//   { 
//     id: 'SI-SJT-C', optionKey: 'C', text: 'Start moving pieces one by one to see how they fit', 
//     scores: { adaptability: pointMap['Moderate'], actionOrientation: pointMap['Moderate'], systematicProblemSolving: pointMap['Limited']  }, 
//     baseScoreValue: pointMap['Limited'] 
//   },
//   { 
//     id: 'SI-SJT-D', optionKey: 'D', text: 'Measure the space and furniture dimensions carefully first', 
//     scores: { planningOrganization: pointMap['Strong'], analyticalApproach: pointMap['Strong'], quantitativeAnalysis: pointMap['Strong'], decisionMethodology: pointMap['Moderate']  }, 
//     baseScoreValue: pointMap['Strong'] 
//   }
// ]
// },

// 4. BODILY-KINESTHETIC (Trait Weight: 1.0)

// {
//  id: 'BK-L1', type: 'likert', primaryTrait: 'BodilyKinesthetic', 
//  text: 'I learn new skills more effectively when I can practice them hands-on.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
// //  answers: createLikertAnswers(['learningApproach'])
//  answers: createLikertAnswers(['learningApproach', 'adaptiveLearning'])
// },

// {
//  id: 'BK-L2', type: 'likert', primaryTrait: 'BodilyKinesthetic', 
//  text: 'I am good at activities requiring precise physical movements or coordination.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
// //  answers: createLikertAnswers([])
// answers: createLikertAnswers(['planningOrganization', 'workConsistency'])
// },

// {
//  id: 'BK-FC', type: 'forced', primaryTrait: 'BodilyKinesthetic',
//  text: 'When learning to use a new device or tool, I prefer to:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
//   { 
//     id: 'BK-FC-A', optionKey: 'A', text: 'Try it out immediately and figure it out', 
//     scores: { learningApproach: pointMap['High'], actionOrientation: pointMap['High'], initiativeTaking: pointMap['High'] },
//     baseScoreValue: pointMap['High'] 
//   },
//   {
//     id: 'BK-FC-B', optionKey: 'B', text: 'Read the instructions or watch a demonstration first',  
//     scores: { learningApproach: pointMap['Moderate'], informationProcessing: pointMap['Moderate'], planningOrganization: pointMap['Moderate'] }, 
//     baseScoreValue: pointMap['Moderate'] 
//   }
// ]
// },

// {
//  id: 'BK-SJT', type: 'sjt', primaryTrait: 'BodilyKinesthetic', 
//  text: 'You need to teach someone how to perform a somewhat complex procedural task involving physical steps. How would you most likely approach this?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
//  { 
//    id: 'BK-SJT-A', optionKey: 'A', text: 'Guide them physically through performing the movements',
//    scores: { learningApproach: pointMap['Excellent'], empathy: pointMap['Strong'], feedbackDelivery: pointMap['Strong'] },
//    baseScoreValue: pointMap['Excellent'] 
//  },
//  { 
//    id: 'BK-SJT-B', optionKey: 'B', text: 'Show them a step-by-step visual demonstration', 
//    scores: { conceptCommunication: pointMap['Strong'], explanatoryClarity: pointMap['Strong'], informationOrganization: pointMap['Strong']}, 
//    baseScoreValue: pointMap['Strong'] 
//  },
//  { 
//    id: 'BK-SJT-C', optionKey: 'C', text: 'Explain the underlying principles and logic first',
//    scores: { conceptCommunication: pointMap['Strong'], criticalReasoning: pointMap['Strong'], analyticalApproach: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Strong'] 
//  },
//  { 
//     id: 'BK-SJT-D', optionKey: 'D', text: 'Have them watch you perform the task multiple times', 
//     scores: { learningApproach: pointMap['Strong'], informationProcessing: pointMap['Strong'], workConsistency: pointMap['Strong']}, 
//     baseScoreValue: pointMap['Strong'] 
//  }
//  ]
// },

// 5. MUSICAL (Trait Weight: 1.0)

// {
//  id: 'MI-L1', type: 'likert', primaryTrait: 'Musical', 
//  text: 'I easily notice patterns and rhythms in sounds, speech, or processes.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: createLikertAnswers(['patternDetection', 'informationProcessing'])
//  answers: createLikertAnswers(['patternDetection'])
// },

// {
//  id: 'MI-L2', type: 'likert', primaryTrait: 'Musical', 
//  text: 'I remember information better when it has a rhythm or can be set to a tune.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: createLikertAnswers(['informationProcessing', 'learningApproach'])
// },

// {
//  id: 'MI-FC', type: 'forced', primaryTrait: 'Musical', 
//  text: 'When working on repetitive tasks, I typically:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
// { 
//  id: 'MI-FC-A', optionKey: 'A', text: 'Create or follow a rhythm/pattern', 
//  scores: { patternDetection: pointMap['High'], workConsistency: pointMap['Moderate'], creativeProblemSolving: pointMap['Moderate'] }, 
//  baseScoreValue: pointMap['High'] 
// },
// { 
//  id: 'MI-FC-B', optionKey: 'B', text: 'Focus on efficiency and accuracy', 
//  scores: { workConsistency: pointMap['High'], planningOrganization: pointMap['Moderate'] }, 
//  baseScoreValue: pointMap['Moderate'] 
// }
// ]
// },

// {
//  id: 'MI-SJT', type: 'sjt', primaryTrait: 'Musical', 
//  text: 'You notice that a team meeting always seems to lose focus and energy around the same point each time. How would you approach improving this?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
//  { 
//   id: 'MI-SJT-A', optionKey: 'A', text: "Suggest changing the meeting's pacing and flow", 
//   scores: { groupDynamics: pointMap['Excellent'], creativeProblemSolving: pointMap['Strong'], adaptability: pointMap['Strong'] },
//   baseScoreValue: pointMap['Excellent'] 
//  },
//  {
//   id: 'MI-SJT-B', optionKey: 'B', text: 'Propose a more structured agenda with clear time limits', 
//   scores: { planningOrganization: pointMap['Strong'], timeManagement: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Moderate'] 
//  },
//  { 
//  id: 'MI-SJT-C', optionKey: 'C', text: 'Recommend trying different physical arrangements for the room', 
//  scores: { interpersonalAdaptability: pointMap['Moderate'], creativeProblemSolving: pointMap['Moderate']}, 
//  baseScoreValue: pointMap['Limited'] 
//  },
//  { 
//  id: 'MI-SJT-D', optionKey: 'D', text: 'Advocate for breaking the meeting into shorter, more focused segments', 
//  scores: { timeManagement: pointMap['Strong'], planningOrganization: pointMap['Moderate'], decisionMethodology: pointMap['Moderate']  }, 
//  baseScoreValue: pointMap['Strong'] 
// }
//  ]
// },

// 6. INTERPERSONAL (Trait Weight: 1.2)

// { 
//  id: 'IP-L1', type: 'likert', primaryTrait: 'Interpersonal', 
//  text: 'I can sense how people are feeling even when they don’t explicitly say it.',
//  formatWeight: 1.0, traitWeight: 1.2, sectionWeight: 0.25,
//  answers: createLikertAnswers(['socialIntuition', 'empathy'])
// },

// {
//  id: 'IP-L2', type: 'likert', primaryTrait: 'Interpersonal', 
//  text: 'I find it easy to adapt my communication style to different people and situations.',
//  formatWeight: 1.0, traitWeight: 1.2, sectionWeight: 0.25,
//  answers: createLikertAnswers(['communicationFlexibility', 'interpersonalAdaptability', 'audienceAwareness'])
// },

// {
//  id: 'IP-FC', type: 'forced', primaryTrait: 'Interpersonal', 
//  text: 'When working in a group, my greatest strength is typically:',
//  formatWeight: 1.2, traitWeight: 1.2, sectionWeight: 0.25,
//  answers: [
//  { 
//    id: 'IP-FC-A', optionKey: 'A', text: 'Understanding different perspectives and facilitating harmony', 
//    scores: { perspectiveTaking: pointMap['High'], empathy: pointMap['High'], collaboration: pointMap['High'] }, 
//    baseScoreValue: pointMap['High'] },
//  { 
//    id: 'IP-FC-B', optionKey: 'B', text: 'Contributing specific knowledge or technical skills', 
//    scores: { collaboration: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['Moderate'] }
//  ]
// },

// {
//  id: 'IP-SJT', type: 'sjt', primaryTrait: 'Interpersonal', 
//  text: "You’re working with a group where two members are in obvious disagreement but haven't addressed it directly. How would you most likely handle this situation?",
//  formatWeight: 1.4, traitWeight: 1.2, sectionWeight: 0.25,
//  answers: [
// {
//  id: 'IP-SJT-A', optionKey: 'A', text: 'Privately speak with each person to understand their views',
//  scores: { conflictResolution: pointMap['Excellent'], empathy: pointMap['Excellent'] },
//  baseScoreValue: pointMap['Excellent'] 
// },
// {
//  id: 'IP-SJT-B', optionKey: 'B', text: 'Try to redirect the group’s focus onto objective criteria or common goals',
//  scores: { conflictResolution: pointMap['Strong'] }, 
//  baseScoreValue: pointMap['Strong'] 
// },
// { 
//  id: 'IP-SJT-C', optionKey: 'C', text: 'Openly acknowledge the tension in the group and facilitate a discussion', 
//  scores: { conflictResolution: pointMap['Strong'], groupDynamics: pointMap['Strong'], communicationFlexibility: pointMap['Strong'] }, 
//  baseScoreValue: pointMap['Strong']
// },
// { 
//  id: 'IP-SJT-D', optionKey: 'D', text: 'Suggest adjusting the group process or roles to minimize friction', 
//  scores: { conflictResolution: pointMap['Strong'], adaptability: pointMap['Strong'], teamManagement: pointMap['Strong'] }, 
//  baseScoreValue: pointMap['Strong'] 
// }
// ]
// },

// 7. INTRAPERSONAL (Trait Weight: 1.0)

// {
//  id: 'IA-L1', type: 'likert', primaryTrait: 'Intrapersonal', 
//  text: 'I can accurately identify how my emotions are affecting my decisions or behaviour.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: createLikertAnswers(['emotionalRegulation', 'selfEvaluation'])
// },

// {
//  id: 'IA-L2', type: 'likert', primaryTrait: 'Intrapersonal', 
//  text: 'I regularly reflect on my experiences to gain insights and adjust my approach.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: createLikertAnswers(['reflectivePractice', 'adaptiveLearning'])
// },

// {
//  id: 'IA-FC', type: 'forced', primaryTrait: 'Intrapersonal', 
//  text: 'When faced with a setback or failure, I typically:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
//  { 
//   id: 'IA-FC-A', optionKey: "A", text: 'Analyze what went wrong and what I can learn from it', 
//   scores: { selfEvaluation: pointMap['High'], growthOrientation: pointMap['High'], reflectivePractice: pointMap['High'] }, 
//   baseScoreValue: pointMap['High'] 
//  },
//  { 
//   id: 'IA-FC-B', optionKey: 'B', text: 'Focus on external factors or circumstances that contributed', 
//   scores: { selfEvaluation: pointMap['Limited'], growthOrientation: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['Limited']
//  }
//  ]
// },

// {
//  id: 'IA-SJT', type: 'sjt', primaryTrait: 'Intrapersonal', 
//  text: 'You receive feedback that contradicts your self-perception about one of your abilities. How would you most likely respond?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
//  { 
//    id: 'IA-SJT-A', optionKey: "A", text: 'Reflect deeply on the disconnect and why it might exist', 
//    scores: { feedbackProcessing: pointMap['Excellent'], reflectivePractice: pointMap['Excellent'] }, 
//    baseScoreValue: pointMap['Excellent'] 
//  },
//  { 
//    id: 'IA-SJT-B', optionKey: 'B', text: 'Consider whether the feedback might be based on a misunderstanding or limited observation', 
//    scores: { feedbackProcessing: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['Moderate'] 
//  },
//  { 
//    id: 'IA-SJT-C', optionKey: 'C', text: 'Thank the person for the feedback and make a conscious effort to observe yourself more carefully in relevant situations', 
//    scores: { feedbackProcessing: pointMap['Strong'], adaptiveLearning: pointMap['Strong'], selfEvaluation: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Strong'] 
//  },
//  { 
//    id: 'IA-SJT-D', optionKey: 'D', text: 'Ask for specific examples to better understand their perspective', 
//    scores: { feedbackProcessing: pointMap['Strong'], explanatoryClarity: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Strong'] 
//  }
// ]
// },

// 8. NATURALIST (Trait Weight: 1.0)

// {
//  id: 'NI-L1', type: 'likert', primaryTrait: 'Naturalist', 
//  text: 'I quickly notice patterns and anomalies in information or systems.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: createLikertAnswers(['patternDetection', 'anomalyIdentification'])
// },

// {
//  id: 'NI-L2', type: 'likert', primaryTrait: 'Naturalist', 
//  text: 'I instinctively organize information by identifying natural categories or taxonomies.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: createLikertAnswers(['informationOrganization', 'patternDetection'])
// },

// {
//  id: 'NI-FC', type: 'forced', primaryTrait: 'Naturalist', 
//  text: 'When trying to make sense of complex information, I typically:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
//  { 
//   id: 'NI-FC-A', optionKey: 'A', text: 'Sort it into logical categories or groups', 
//   scores: { informationOrganization: pointMap['High'], patternDetection: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['High'] 
//  }, 
//  { 
//  id: 'NI-FC-B', optionKey: 'B', text: 'Focus on understanding the key details and facts first',  
//  scores: { informationOrganization: pointMap['Moderate'], analyticalApproach: pointMap['Moderate'], informationUtilization: pointMap['Moderate'] }, 
//  baseScoreValue: pointMap['Moderate'] 
//  }
// ]
// },

// {
//  id: 'NI-SJT', type: 'sjt', primaryTrait: 'Naturalist', 
//  text: 'Your team is dealing with an overwhelming amount of diverse information for a project. How would you help organize this?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.25,
//  answers: [
//  { 
//    id: 'NI-SJT-A', optionKey: 'A', text: 'Create a classification system or taxonomy', 
//    scores: { informationOrganization: pointMap['Excellent'], patternDetection: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Excellent'] 
//  },
//  { 
//    id: 'NI-SJT-B', optionKey: 'B', text: 'Identify and prioritize the most essential pieces of information', 
//    scores: { informationOrganization: pointMap['Moderate'], prioritization: pointMap['Strong'], informationUtilization: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Strong'] 
//  },
//  { 
//    id: 'NI-SJT-C', optionKey: 'C', text: 'Develop a visual map showing relationships between information pieces', 
//    scores: { informationOrganization: pointMap['Strong'], patternDetection: pointMap['Strong'], creativeProblemSolving: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['Strong'] 
//  },
//  { 
//    id: 'NI-SJT-D', optionKey: 'D', text: 'Set up a chronological or sequential framework', 
//    scores: { informationOrganization: pointMap['Strong'], planningOrganization: pointMap['Strong'], systematicProblemSolving: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['Strong'] 
//  }
//  ]
// },

// SECTION 4: WORK STYLE/DISC (Section Weight: 0.17)
// DOMINANCE (D) (Trait Weight: 1.0)

// {
//  id: 'D-L1', type: 'likert', primaryTrait: 'Dominance', 
//  text: 'I prefer to take charge in unstructured situations rather than waiting for others to establish direction.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['initiativeTaking', 'directionalLeadership'])
// },

// {
//  id: 'D-L2', type: 'likert', primaryTrait: 'Dominance', 
//  text: 'I tend to express my opinions directly, even if they might create disagreement.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['assertiveCommunication', 'professionalAssertiveness'])
// },

// {
//  id: 'D-FC', type: 'forced', primaryTrait: 'Dominance', 
//  text: 'When facing an obstacle to completing an important task, I typically:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
// { 
//  id: 'D-FC-A', optionKey: 'A', text: 'Take immediate action to overcome it', 
//  scores: { actionOrientation: pointMap['High'],  initiativeTaking: pointMap['High'] }, 
//  baseScoreValue: pointMap['High'] 
// },
// { 
//   id: 'D-FC-B', optionKey: 'B',  text: 'Pause to consider multiple perspectives or solutions first',
//   scores: { analyticalApproach: pointMap['Moderate'] , criticalReasoning: pointMap['Moderate'], decisionMethodology: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['Moderate'] 
// }
// ]
// },

// {
//  id: 'D-SJT', type: 'sjt', primaryTrait: 'Dominance', 
//  text: 'Your team seems stuck in lengthy discussions without making progress on an important decision. How would you most likely respond?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
// { 
//  id: 'D-SJT-A', optionKey: 'A', text: 'Propose a specific direction or decision to move forward', 
//  scores: { decisionCatalyst: pointMap['Excellent'], actionOrientation: pointMap['Excellent'], directionalLeadership: pointMap['Excellent'] }, 
//  baseScoreValue: pointMap['Excellent'] 
// },
// { 
//  id: 'D-SJT-B', optionKey: 'B', text: 'Suggest a structured decision-making framework or process', 
//  scores: { decisionCatalyst: pointMap['Strong'], actionOrientation: pointMap['Strong'], systematicProblemSolving: pointMap['Strong'], decisionMethodology: pointMap['Strong'] }, 
//  baseScoreValue: pointMap['Strong'] 
// },
// { 
//  id: 'D-SJT-C', optionKey: 'C', text: 'Ask targeted questions to clarify the key issues or disagreements', 
//  scores: { decisionCatalyst: pointMap['Moderate'], persuasionApproach: pointMap['Moderate'], criticalReasoning: pointMap['Strong'], analyticalApproach: pointMap['Strong'] }, 
//  baseScoreValue: pointMap['Moderate'] 
// },
// { 
//  id: 'D-SJT-D',  optionKey: 'D', text: 'Set a clear deadline for making the decision', 
//  scores: { decisionCatalyst: pointMap['Strong'], actionOrientation: pointMap['Strong'], timeManagement: pointMap['Strong'], prioritization: pointMap['Strong'] }, 
//  baseScoreValue: pointMap['Strong'] 
// }
// ]
// },

// INFLUENCE (I) (Trait Weight: 1.0)

// {
//  id: 'I-L1', type: 'likert', primaryTrait: 'Influence', 
//  text: 'I find it easy to generate enthusiasm among others for new ideas or projects.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['motivationalAbility', 'persuasionApproach'])
// },

// {
//  id: 'I-L2', type: 'likert', primaryTrait: 'Influence', 
//  text: 'I prefer working environments with significant opportunity for social interaction.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['collaboration', 'networkingAbility'])
// },

// {
//  id: 'I-FC', type: 'forced', primaryTrait: 'Influence', 
//  text: 'When trying to gain support for an idea, I typically:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
//  { 
//    id: 'I-FC-A', optionKey: 'A', text: 'Highlight the positive possibilities and inspire enthusiasm',  
//    scores: { 
//     persuasionApproach: pointMap['High'], 
//     influenceStyle: pointMap['High'], 
//     motivationalAbility: pointMap['High'] }, 
//    baseScoreValue: pointMap['High'] 
//  },
            
//  { 
//    id: 'I-FC-B', optionKey: 'B', text: 'Present a detailed analysis of the logic and benefits',
//    scores: { 
//     persuasionApproach: pointMap['Moderate'], 
//     influenceStyle: pointMap['High'], 
//     analyticalApproach: pointMap['High'] }, 
//    baseScoreValue: pointMap['Moderate'] 
//  }
// ]
// },

// {
//  id: 'I-SJT', type: 'sjt', primaryTrait: 'Influence', 
//  text: 'You need to implement a change that may initially be unpopular with some colleagues. How would you most likely approach this?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
//  { 
//    id: 'I-SJT-A', optionKey: 'A', text: 'Create excitement about the long-term benefits and vision', 
//    scores: { 
//     changeLeadership: pointMap['Excellent'], 
//     motivationalAbility: pointMap['Excellent'], 
//     influenceStyle: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Excellent'] 
//  },
//  { 
//    id: 'I-SJT-B', optionKey: 'B', text: 'Clearly explain the logical reasons and necessity for the change', 
//    scores: { 
//     changeLeadership: pointMap['Strong'], 
//     explanatoryClarity: pointMap['Strong'], 
//     logicalEvaluation: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Strong']
//  },
//  { 
//    id: 'I-SJT-C', optionKey: 'C', text: 'Involve people in planning the implementation process', 
//    scores: { 
//     changeLeadership: pointMap['Strong'], 
//     collaboration: pointMap['Excellent'], 
//     teamManagement: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['Excellent'] 
//  },
//  { 
//    id: 'I-SJT-D', optionKey: 'D', text: 'Acknowledge concerns empathetically while expressing confidence in the change', 
//    scores: { 
//     changeLeadership: pointMap['Strong'], 
//     empathy: pointMap['Strong'], 
//     assertiveCommunication: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['Strong'] 
//  }
// ]
// },

// STEADINESS (S) (Trait Weight: 1.0)

// {
// id: 'S-L1', type: 'likert', primaryTrait: 'Steadiness', 
// text: 'I prefer working at a steady, methodical pace rather than in bursts of activity.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['workConsistency', 'reliability'])
// },

// {
//  id: 'S-L2', type: 'likert', primaryTrait: 'Steadiness', 
//  text: 'I tend to maintain calm and composure even when those around me are stressed.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['emotionalRegulation', 'stressManagement'])
// },

// {
//  id: 'S-FC', type: 'forced', primaryTrait: 'Steadiness', 
//  text: 'When a team is experiencing significant changes, I typically:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
//  { 
//    id: 'S-FC-A', optionKey: 'A', text: 'Focus on providing stability and support to colleagues', 
//    scores: { 
//     adaptability: pointMap['Moderate'], 
//     relationshipMaintenance: pointMap['High'], 
//     empathy: pointMap['High'], 
//     collaboration: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['High']
//  },
//  { 
//    id: 'S-FC-B', optionKey: 'B', text: 'Quickly adapt to the changes and focus on new opportunities', 
//    scores: { 
//     adaptability: pointMap['High'], 
//     growthOrientation: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['Moderate'] 
//  }
//   ]
// },

// {
//  id: 'S-SJT', type: 'sjt', primaryTrait: 'Steadiness', 
//  text: 'Your organization is implementing frequent changes to processes and priorities. How would you most likely respond?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
// { 
//   id: 'S-SJT-A', optionKey: 'A', text: 'Try to create systems or routines to maintain stability amidst the changes', 
//   scores: { 
//     planningOrganization: pointMap['Strong'], 
//     adaptability: pointMap['Moderate'], 
//     workConsistency: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Excellent'] 
// },
// { 
//   id: 'S-SJT-B', optionKey: 'B', text: 'Embrace each change as an opportunity for growth or improvement', 
//   scores: { 
//     adaptability: pointMap['Excellent'], 
//     growthOrientation: pointMap['Strong'], 
//     learningFlexibility: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['Limited'] 
// },
// { 
//   id: 'S-SJT-C', optionKey: 'C', text: 'Focus on ensuring your ongoing core work continues effectively despite disruptions', 
//   scores: { 
//     reliability: pointMap['Strong'], 
//     workConsistency: pointMap['Excellent'], 
//     prioritization: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Strong'] 
// },
// { 
//   id: 'S-SJT-D', optionKey: 'D', text: 'Check in with team members to offer support and ensure alignment', 
//   scores: { 
//     collaboration: pointMap['Strong'], 
//     empathy: pointMap['Strong'], 
//     relationshipMaintenance: pointMap['Strong'], 
//     socialIntuition: pointMap['Moderate']}, 
//   baseScoreValue: pointMap['Strong'] 
// }
// ]
// },

// COMPLIANCE (C - DISC) (Trait Weight: 1.0)

// {
//  id: 'C-L1-DISC', type: 'likert', primaryTrait: 'Compliance', 
//  text: 'I pay close attention to details that others might overlook.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
// //  answers: createLikertAnswers([])
//  answers: createLikertAnswers(['informationProcessing', 'planningOrganization'])
// },

// {
//  id: 'C-L2-DISC', type: 'likert', primaryTrait: 'Compliance', 
//  text: 'I prefer situations with clear guidelines and expectations over those with ambiguity.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['adaptability'], true) // Base score is inverted for Compliance trait calc
//  answers: createLikertAnswers(['policyCompliance', 'ruleAdherence'], true) 
// },

// {
//  id: 'C-FC-DISC', type: 'forced', primaryTrait: 'Compliance', 
//  text: 'When working on a complex project, I typically:',
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
//  { 
//    id: 'C-FC-DISC-A', optionKey: 'A', text: 'Analyze all details thoroughly before proceeding', 
//    scores: { 
//     analyticalApproach: pointMap['High'], 
//     systematicProblemSolving: pointMap['High'], 
//     informationProcessing: pointMap['Strong'] }, 
//    baseScoreValue: pointMap['High'] 
//  },
//  { 
//    id: 'C-FC-DISC-B', optionKey: 'B', text: 'Focus on completing key components efficiently to build momentum', 
//    scores: { 
//     prioritization: pointMap['High'], 
//     actionOrientation: pointMap['Moderate'], 
//     planningOrganization: pointMap['Moderate'] }, 
//    baseScoreValue: pointMap['Moderate']
//  }
// ]
// },

// {
//  id: 'C-SJT-DISC', type: 'sjt', primaryTrait: 'Compliance', 
//  text: 'You notice a colleague is not following an important procedure correctly, although their results seem acceptable so far. How would you most likely respond?',
//  formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
// { 
//   id: 'C-SJT-DISC-A', optionKey: 'A', text: 'Discreetly share the correct procedure documentation with them', 
//   scores: { 
//     policyCompliance: pointMap['Excellent'], 
//     communicationFlexibility: pointMap['Strong'], 
//     professionalEthics: pointMap['Strong'] }, 
//   baseScoreValue: pointMap['Excellent'] 
// },
// {
//  id: 'C-SJT-DISC-B', optionKey: 'B', text: 'Focus on whether the end results are affected before intervening', 
//  scores: { 
//   policyCompliance: pointMap['Moderate'], 
//   analyticalApproach: pointMap['Moderate'] }, 
//  baseScoreValue: pointMap['Moderate'] 
// },
// { 
//  id: 'C-SJT-DISC-C', optionKey: 'C', text: 'Ask questions about their approach to understand their reasoning', 
//  scores: { 
//   policyCompliance: pointMap['Strong'], 
//   perspectiveTaking: pointMap['Strong'], 
//   communicationAdaptability: pointMap['Strong'] }, 
//  baseScoreValue: pointMap['Strong'] 
// },
// { 
//   id: 'C-SJT-DISC-D', optionKey: 'D', text: 'Casually demonstrate the correct procedure when an opportunity arises', 
//   scores: { 
//     policyCompliance: pointMap['Strong'], 
//     learningApproach: pointMap['Strong'], 
//     influenceStyle: pointMap['Moderate'] }, 
//   baseScoreValue: pointMap['Strong'] 
// }
// ]
// },

// WORK ENVIRONMENT PREFERENCES (Applying primarily to DISC traits)

// {
//  id: 'WE-L1', type: 'likert', primaryTrait: 'Dominance', 
//  text: 'I perform best in environments that encourage competition and reward individual achievement.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers([])
//  answers: createLikertAnswers(['initiativeTaking', 'professionalAssertiveness'])    
// },

// {
//  id: 'WE-L2', type: 'likert', primaryTrait: 'Compliance', 
//  text: 'I value workplaces that prioritize careful planning and stability over rapid adaptation.',
//  formatWeight: 1.0, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: createLikertAnswers(['planningOrganization', 'workConsistency'])
// },

// {
//  id: 'WE-FC', type: 'forced', primaryTrait: 'Influence', 
//  text: 'I would prefer a work environment that:', // A maps primarily to Influence, B to Compliance
//  formatWeight: 1.2, traitWeight: 1.0, sectionWeight: 0.17,
//  answers: [
//  { 
//   id: 'WE-FC-A', optionKey: 'A', text: 'Is fast-paced with opportunities to influence', 
//   scores: { 
//     influenceStyle: pointMap['High'], 
//     adaptability: pointMap['High'], 
//     actionOrientation: pointMap['High'] }, 
//   baseScoreValue: pointMap['High'], 
//   primaryTraitOverride: 'Influence'
//  },
//  { 
//   id: 'WE-FC-B', optionKey: 'B', text: 'Is structured with clear processes',  
//   scores: { 
//     workConsistency: pointMap['High'], 
//     planningOrganization: pointMap['Strong'], 
//     ruleAdherence: pointMap['Strong'],   }, 
//   baseScoreValue: pointMap['High'], 
//   primaryTraitOverride: 'Compliance' 
//  }
//   ]
// },

// {
//   id: 'WE-SJT', type: 'sjt', primaryTrait: 'DISC', 
//   text: 'You have the opportunity to choose between two team environments. Which would you likely find more energizing?', // Generic DISC, using overrides
//   formatWeight: 1.4, traitWeight: 1.0, sectionWeight: 0.17,
//   answers: [
//    { 
//     id: 'WE-SJT-A', optionKey: 'A', text: 'A dynamic team that moves quickly and embraces change', 
//     scores: { 
//       adaptability: pointMap['Strong'], 
//       actionOrientation: pointMap['Strong'], 
//       initiativeTaking: pointMap['Moderate'] }, 
//     primaryTraitOverride: 'Dominance', 
//     baseScoreValue: pointMap['Strong'] 
//    },
//    { 
//     id: 'WE-SJT-B', optionKey: 'B', text: 'A supportive team that values thorough analysis and collaboration', 
//     scores: { 
//       analyticalApproach: pointMap['Strong'], 
//       collaboration: pointMap['Strong'], 
//       perspectiveTaking: pointMap['Moderate'] }, 
//     primaryTraitOverride: 'Steadiness', 
//     baseScoreValue: pointMap['Strong'] 
//    },
//    { 
//     id: 'WE-SJT-C', optionKey: 'C', text: 'A team known for rigorous debate and challenging ideas', 
//     scores: { 
//       criticalReasoning: pointMap['Strong'], 
//       assertiveCommunication: pointMap['Strong'], 
//       persuasionApproach: pointMap['Moderate'] }, 
//     primaryTraitOverride: 'Dominance', 
//     baseScoreValue: pointMap['Strong'] 
//    },
//    { 
//     id: 'WE-SJT-D', optionKey: 'D', text: 'A team that emphasizes positive relationships and harmonious collaboration', 
//     scores: { 
//       collaboration: pointMap['Strong'], 
//       relationshipMaintenance: pointMap['Strong'], 
//       empathy: pointMap['Moderate'] }, 
//     primaryTraitOverride: 'Influence', 
//     baseScoreValue: pointMap['Strong'] 
//    }
//       ]
// },
];