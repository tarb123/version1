// import { FaPage4 } from "react-icons/fa";

export const broadSkillCategories = 
[
'AnalyticalProblemSolving', 'CommunicationInfluence', 'EthicalProfessional', 'InterpersonalTeam', 'LeadershipInitiative', 'LearningDevelopment', 'SelfManagement',
];

// Mapping: Granular Skill -> 7 Main Categories [cite: 1]
export const skillCategoryMapping = {
AnalyticalProblemSolving: 
[ 
'analyticalApproach', 'anomalyIdentification', 'criticalReasoning', 'creativeProblemSolving', 
'decisionMethodology','informationUtilization', 'informationOrganization', 'logicalEval uation', 
'patternDetection', 'quantitativeAnalysis', 'systematicProblemSolving',
],
  CommunicationInfluence: 
[ 
'assertiveCommunication', 'audienceAwareness','conceptCommunication', 'communicationAdaptability', 
'communicationFlexibility', 'explanatoryClarity', 'feedbackDelivery', 'influenceStyle', 'persuasionApproach', 
'verbalExplanation',  
],
EthicalProfessional: 
[ 
'attributionIntegrity', 'ethicalConsistency', 'ethicalDecisionMaking', 'honestyInSelfPresentation', 
'policyCompliance', 'professionalEthics', 'processIntegrity', 'ruleAdherence', 'transparency', 'transactionIntegrity', 
],
InterpersonalTeam: 
[ 
'collaboration', 'conflictResolution', 'empathy', 'groupDynamics', 'interpersonalAdaptability', 
'networkingAbility','perspectiveTaking', 'relationshipMaintenance', 'socialIntuition', 'teamManagement',  
],
  
LeadershipInitiative: 
[ 
'actionOrientation', 'changeLeadership', 'decisionCatalyst', 'delegationAbility', 
'directionalLeadership', 'initiativeTaking', 'motivationalAbility', 'professionalAssertiveness' 
],
  
LearningDevelopment: 
[
'adaptiveLearning', 'continuousLearning', 'feedbackProcessing', 'growthOrientation', 
'informationProcessing', 'knowledgeAcquisition', 'learningApproach', 'learningFlexibility', 'reflectivePractice' 
],
SelfManagement: 
[ 
'adaptability', 'emotionalRegulation', 'planningOrganization', 'prioritization', 
'reliability', 'resilience', 'selfEvaluation', 'stressManagement', 'timeManagement', 'workConsistency',
],
};

// List of all high-level traits/sections we calculate directly
export const traitList = [ /* ... same as before ... */
'Openness','Conscientiousness','Extraversion','Agreeableness','Emotional Stability','HonestyHumility',
'Linguistic','LogicalMathematical','Spatial','BodilyKinesthetic','Musical','Interpersonal','Intrapersonal','Naturalist',
'Dominance','Influence','Steadiness','Compliance'
];

// --- SKILLS LIST --- (Granular skills)
export const skills = [
'actionOrientation', 'adaptability', 'adaptiveLearning', 'analyticalApproach', 'anomalyIdentification', 'assertiveCommunication', 'attributionIntegrity', 
'audienceAwareness', 'changeLeadership', 'collaboration', 'communicationAdaptability', 'communicationFlexibility', 'conceptCommunication', 'conflictResolution', 
'continuousLearning', 'creativeProblemSolving', 'criticalReasoning','decisionCatalyst', 'decisionMethodology', 'delegationAbility', 'directionalLeadership', 'empathy',
'emotionalRegulation', 'ethicalConsistency', 'ethicalDecisionMaking', 'explanatoryClarity','feedbackDelivery', 'feedbackProcessing', 'growthOrientation', 
'groupDynamics', 'honestyInSelfPresentation','influenceStyle', 'informationOrganization', 'informationProcessing', 'informationUtilization', 'initiativeTaking', 
'interpersonalAdaptability','knowledgeAcquisition', 'learningApproach', 'learningFlexibility', 'logicalEvaluation','motivationalAbility','networkingAbility',
'patternDetection', 'perspectiveTaking', 'persuasionApproach', 'planningOrganization', 'policyCompliance','prioritization', 'processIntegrity', 
'professionalAssertiveness','professionalEthics','quantitativeAnalysis','reflectivePractice', 'relationshipMaintenance', 'reliability', 'resilience', 'ruleAdherence',
'selfEvaluation', 'socialIntuition', 'stressManagement', 'systematicProblemSolving','teamManagement', 'timeManagement', 'transactionIntegrity', 'transparency', 
'verbalExplanation', 'workConsistency'
];


export const careerDatabase = [
  {
    name: "Software Developer",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 2,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 4, InterpersonalTeam:3, LeadershipInitiative: 2, LearningDevelopment: 5, SelfManagement: 4 },
    abilities: { LogicalMathematical: 5,  Spatial: 4, Linguistic: 3, Interpersonal: 2}
  },
  {
    name: "Data Analyst",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4 },
    abilities: { LogicalMathematical: 5,  Spatial: 3, Linguistic: 4, Interpersonal: 3}
  },
   {
    name: "Cybersecurity Manager",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 4, LeadershipInitiative: 5, LearningDevelopment: 5, SelfManagement: 4 },
    abilities: { LogicalMathematical: 5,  Spatial: 3, Linguistic: 4, Interpersonal: 4}
  },
   {
    name: "AI/Machine Learning Specialist",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 2,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 4, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 5, SelfManagement: 4 },
    abilities: { LogicalMathematical: 5,  Spatial: 4, Linguistic: 3, Interpersonal: 2}
  },
   {
    name: "Cloud Architect",
    traits: { Openness: 5, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 4, InterpersonalTeam: 3, LeadershipInitiative: 4, LearningDevelopment: 5, SelfManagement: 4 },
    abilities: { LogicalMathematical: 5,  Spatial: 5, Linguistic: 4, Interpersonal: 3}
  },
  {
    name: "Financial Analyst",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 3,  Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4 },
    abilities: { LogicalMathematical: 5,  Spatial: 3, Linguistic: 4, Interpersonal: 3}
  },
   {
    name: "Chartered Accountant",
    traits: { Openness: 2, Conscientiousness: 5, Extraversion: 2,  Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 5  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 5 },
    abilities: { LogicalMathematical: 5,  Spatial: 2, Linguistic: 4, Interpersonal: 3}
  },
   {
    name: "Marketing Manager", // Replacing Marketing Specialist from old list
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 5,  Agreeableness: 4, 'Emotional Stability': 4, HonestyHumility: 3  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 3, InterpersonalTeam: 5, LeadershipInitiative: 5, LearningDevelopment: 4, SelfManagement: 4 },
    abilities: { LogicalMathematical: 3,  Spatial: 4, Linguistic: 5, Interpersonal: 5}
  },
  {
    name: "Project Manager",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 4,  Agreeableness: 4, 'Emotional Stability': 5, HonestyHumility: 4  }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 4, InterpersonalTeam: 5, LeadershipInitiative: 5, LearningDevelopment: 4, SelfManagement: 5},
    abilities: { LogicalMathematical: 4,  Spatial: 3, Linguistic: 4, Interpersonal: 5} 
  },
  {
    name: "Human Resources Manager", // Replacing HR Coordinator
    traits: { Openness: 4, Conscientiousness: 4, Extraversion: 5, Agreeableness: 5, 'Emotional Stability': 4, HonestyHumility: 5 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 5, InterpersonalTeam: 5, LeadershipInitiative: 4, LearningDevelopment: 4, SelfManagement: 4},
    abilities: { LogicalMathematical: 3,  Spatial: 2, Linguistic: 4, Interpersonal: 5}  
  },
  {
    name: "Physician",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 3, Agreeableness: 4, 'Emotional Stability': 5, HonestyHumility: 5 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 4, LeadershipInitiative: 4, LearningDevelopment: 5, SelfManagement: 4},
    abilities: { LogicalMathematical: 4,  Spatial: 3, Linguistic: 4, Interpersonal: 4}   
  },
   {
    name: "Physical Therapist",
    name: "Physician",
    traits: { Openness: 4, Conscientiousness: 4, Extraversion: 4, Agreeableness: 5, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 4, InterpersonalTeam: 5, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    abilities: { LogicalMathematical: 3,  Spatial: 4, Linguistic: 4, Interpersonal: 5}   
  },
   {
    name: "Nurse",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 4, Agreeableness: 5, 'Emotional Stability': 5, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 5, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 5},
    abilities: { LogicalMathematical: 3,  Spatial: 3, Linguistic: 4, Interpersonal: 5}   
  },
   {
    name: "Electrical Engineer",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 2, Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    abilities: { LogicalMathematical: 5,  Spatial: 5, Linguistic: 3, Interpersonal: 2}  
  },
   {
    name: "Mechanical Engineer",
     traits: { Openness: 4, Conscientiousness: 5, Extraversion: 2, Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 5, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    abilities: { LogicalMathematical: 5,  Spatial: 5, Linguistic: 3, Interpersonal: 2}  
  },
   {
    name: "Telecom Engineer",
    traits: { Openness: 4, Conscientiousness: 5, Extraversion: 2, Agreeableness: 3, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 3, EthicalProfessional: 4, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 5, SelfManagement: 4},
    abilities: { LogicalMathematical: 5,  Spatial: 4, Linguistic: 3, Interpersonal: 2}   
  },
   {
    name: "Teacher/Educator",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 4, Agreeableness: 5, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 5, EthicalProfessional: 4, InterpersonalTeam: 5, LeadershipInitiative: 4, LearningDevelopment: 5, SelfManagement: 4},
    abilities: { LogicalMathematical: 3,  Spatial: 3, Linguistic: 5, Interpersonal: 5}       
    },
   {
    name: "Creative Designer",
    traits: { Openness: 5, Conscientiousness: 4, Extraversion: 3, Agreeableness: 3, 'Emotional Stability': 3, HonestyHumility: 3 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 4, EthicalProfessional: 3, InterpersonalTeam: 3, LeadershipInitiative: 3, LearningDevelopment: 4, SelfManagement: 4},
    abilities: { LogicalMathematical: 2,  Spatial: 5, Linguistic: 4, Interpersonal: 3}   
    },
   {
    name: "Civil Service Officer",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 3, Agreeableness: 4, 'Emotional Stability': 4, HonestyHumility: 5 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 4, CommunicationInfluence: 4, EthicalProfessional: 5, InterpersonalTeam: 4, LeadershipInitiative: 4, LearningDevelopment: 4, SelfManagement: 4},
    abilities: { LogicalMathematical: 4,  Spatial: 2, Linguistic: 5, Interpersonal: 4}       
  },
  {
    name: "Operations Manager",
    traits: { Openness: 3, Conscientiousness: 5, Extraversion: 4, Agreeableness: 4, 'Emotional Stability': 4, HonestyHumility: 4 }, // Using 'Emotional Stability' key
    skills: { AnalyticalProblemSolving: 5, CommunicationInfluence: 4, EthicalProfessional: 4, InterpersonalTeam: 4, LeadershipInitiative: 5, LearningDevelopment: 4, SelfManagement: 5},
    abilities: { LogicalMathematical: 4,  Spatial: 3, Linguistic: 4, Interpersonal: 4}   
   },
];
