"use client";
// import React, { useState } from 'react'; 
// const FinancialOffer = () => {
// const [activeCompensation, setActiveCompensation] = useState<string | null>(null);

// const [selectedOptions, setSelectedOptions] = useState<string[]>([]);//For Basic Salary (B)
// const [selectedAllowanceOptions, setSelectedAllowanceOptions] = useState<string[]>([]);//For Allowances (C)
// const [selectedVariablepayOptions, setSelectedVariablepayOptions] = useState<string[]>([]); //For Variable Pay (D)
// const [selectedBenefitOptions, setSelectedBenefitOptions] = useState<string[]>([]); //For Benefits (E)
// const [isSecondColumnVisible, setIsSecondColumnVisible] = useState(true);  
// const [errorMessage, setErrorMessage] = useState('');

// //Compensation B (Current)                                                                                      // Compensation B (Previous)
// const [BasicSalaryCurrent, setBasicSalaryCurrent] = useState('');                                               const [BasicSalaryPrevious, setBasicSalaryPrevious] = useState('');
// const [HouseRentCurrent, setHouseRentCurrent] = useState('');                                                   const [HouseRentPrevious, setHouseRentPrevious] = useState('');
// const [UtilitiesCurrent, setUtilitiesCurrent] = useState('');                                                   const [UtilitiesPrevious, setUtilitiesPrevious] = useState('');
// const [MedicalCurrent, setMedicalCurrent] = useState('');                                                      const [MedicalPrevious, setMedicalPervious] = useState('');
// const [lfaCurrent, setlfaCurrent] = useState('');                                                               const [lfaPrevious, setlfaPervious] = useState('');
// const [AdjustmentForFuelCurrent, setAdjustmentForFuelCurrent] = useState('');                                   const [AdjustmentForFuelPrevious, setAdjustmentForFuelPrevious] = useState('');
// const [RetentionAmountCurrent, setRetentionAmountCurrent] = useState('');                                       const [RetentionAmountPrevious, setRetentionAmountPrevious] = useState('');

// // Compensation C (Current)                                                                                     //Compensation C (Previous)
// const [asrCurrent, setasrCurrent]=useState('');                                                                 const [asrPrevious, setasrPrevious]=useState('');
// const [daCurrent, setdaCurrent]=useState('');                                                                   const [daPrevious, setdaPrevious]=useState('');
// const [mpCurrent, setmpCurrent]=useState('');                                                                   const [mpPrevious, setmpPrevious]=useState(''); 
// const [dsaCurrent, setdsaCurrent]=useState('');                                                                 const [dsaPrevious, setdsaPrevious]=useState('');
// const [sCurrent, setsCurrent]=useState('');                                                                     const [sPrevious, setsPrevious]=useState('');
// const [resCurrent, setresCurrent]=useState('');                                                                 const [resPrevious, setresPrevious]=useState('');
// const [cellCurrent, setcellCurrent]=useState('');                                                               const [cellPrevious, setcellPrevious]=useState('');
// const [iCurrent , setiCurrent]=useState('');                                                                    const [iPrevious, setiPrevious]=useState('');
// const [deaCurrent, setdeaCurrent]=useState('');                                                                 const [deaPrevious, setdeaPrevious]=useState('');
// const [paCurrent, setpaCurrent]=useState('');                                                                   const [paPrevious, setpaPrevious ]=useState(''); 

// //Compensation D (Current)                                                                                       //Compensation D (Previous)
                                                  
// const[vbCurrent, setvbCurrent] =useState('');                                                                   const[vbPrevious, setvbPrevious] =useState('');
// const[smCurrent, setsmCurrent] =useState('');                                                                   const[smPrevious, setsmPrevious] =useState('');

// //Compensation E (Current)                                                                                      //Compensation E (Previous)
// const[carCurrent, setcarCurrent] = useState();                                                                  const[carPrevious, setcarPrevious] = useState();
// const[carInsuranceCurrent, setcarInsuranceCurrent] = useState();                                                const[carInsurancePrevious, setcarInsurancePrevious] = useState();
// const[carFuelCurrent, setcarFuelCurrent] = useState();                                                          const[carFuelPrevious, setcarFuelPrevious] = useState();
// const[carMaintenanceCurrent, setcarMaintenanceCurrent] = useState();                                            const[carMaintenancePrevious, setcarMaintenancePrevious] = useState();
// const[carRegRoadTaxCurrent, setcarRegRoadTaxCurrent] = useState();                                              const[carRegRoadTaxPrevious, setcarRegRoadTaxPrevious] = useState();
// const[trackerCurrent, settrackerCurrent] = useState();                                                          const[trackerPrevious, settrackerPrevious] = useState();
// const[companyProvidedTravelingCurrent, setcompanyProvidedTravelingCurrent] = useState();                        const[companyProvidedTravelingPrevious, setcompanyProvidedTravelingPrevious] = useState();
// const[corporateClubMembershipCurrent, setcorporateClubMembershipCurrent] = useState();                          const[corporateClubMembershipPrevious, setcorporateClubMembershipPrevious] = useState();
// const[clubSubscriptionCurrent, setclubSubscriptionCurrent] = useState();                                        const[clubSubscriptionPrevious, setclubSubscriptionPrevious] = useState();
// const[apartmentRentCurrent, setapartmentRentCurrent] = useState();                                              const[apartmentRentPrevious, setapartmentRentPrevious] = useState();
// const[hardFurnishingsCurrent, sethardFurnishingsCurrent] = useState();                                          const[hardFurnishingsPrevious, sethardFurnishingsPrevious] = useState();
// const[creditCardsStatutoryContributionCurrent, setcreditCardsStatutoryContributionCurrent] = useState();        const[creditCardsStatutoryContributionPrevious, setcreditCardsStatutoryContributionPrevious] = useState();
// const[otherPerquisitesCurrent, setotherPerquisitesCurrent] = useState();                                        const[otherPerquisitesPrevious, setotherPerquisitesPrevious] = useState();
// const[securityServicesGuardsCurrent, setsecurityServicesGuardsCurrent] = useState();                            const[securityServicesGuardsPrevious, setsecurityServicesGuardsPrevious] = useState();        
// const[mealSubsidyHousingLoanCurrent, setmealSubsidyHousingLoanCurrent] = useState();                            const[mealSubsidyHousingLoanPrevious, setmealSubsidyHousingLoanPrevious] = useState();
// const[entertainmentAllowanceCurrent, setentertainmentAllowanceCurrent] = useState();                            const[entertainmentAllowancePrevious, setentertainmentAllowancePrevious] = useState();
// const[leaveEncashmentCurrent, setleaveEncashmentCurrent] = useState();                                          const[leaveEncashmentPrevious, setleaveEncashmentPrevious] = useState();
// const[homeTravelCurrent, sethomeTravelCurrent] = useState();                                                    const[homeTravelPrevious, sethomeTravelPrevious] = useState();
// const[groupLifeCurrent, setgroupLifeCurrent] = useState();                                                      const[groupLifePrevious, setgroupLifePrevious] = useState();
// const[hospitalizationInsuranceCurrent, sethospitalizationInsuranceCurrent] = useState();                        const[hospitalizationInsurancePrevious, sethospitalizationInsurancePrevious] = useState();
// const[medicalOpdCurrent, setmedicalOpdCurrent] = useState();                                                    const[medicalOpdPrevious, setmedicalOpdPrevious] = useState();
// const[pensionCurrent, setpensionCurrent] = useState();                                                          const[pensionPrevious, setpensionPrevious] = useState();
// const[pfCurrent, setpfCurrent] = useState();                                                                    const[pfPrevious, setpfPrevious] = useState();
// const[eobiCurrent, seteobiCurrent] = useState();                                                                const[eobiPrevious, seteobiPrevious] = useState();
// const[gratuityCurrent, setgratuityCurrent] = useState();                                                        const[gratuityPrevious, setgratuityPrevious] = useState();

// const [annualPackageCurrent, setAnnualPackageCurrent] = useState(0);                                            const [annualPackagePrevious, setAnnualPackagePrevious] = useState(0);
// const [compaRatioCurrent, setCompaRatioCurrent] = useState(0);                                                  const [compaRatioPrevious, setCompaRatioPrevious] = useState(0);

// //DropDown For Third Column
// const toggleSecondColumn = () => {  
//   setIsSecondColumnVisible(prevState => !prevState);  
// };  
// //Compensation B (Options:)
// const optionOrder = 
// ['Enter Basic Salary','House Rent (% of basic)','Utilities (% of basic)','Medical (% of basic)','LFA (% of basic)','Adjustment for Fuel','Other Amount'
// ];

// //Compensation C (Options:)
// const optionOrder2 = 
// ['Allowance in lieu of second Car', 'Disturbance Allowance', 'Market Premium', 'Driver Salary (Allowance)', 'Servant', 'Tel (res)', 'Tel (cell)', 'Internet', 'Dearness Allowance', 'Project Allowance'    
// ];

// //Compensation D (Options:)
// const optionOrder3 = 
// ['Variable Bonus','Special Milestone'
// ];

// //Compensation E (Options:)
// const optionOrder4 = 
// ['Car', 'Car Insurance', 'Car Fuel', 'Car Maintenance', 'Car Reg / Road Tax', 'Tracker', 'Company Provided Traveling', 'Corporate Club Membership', 'Club Subscription',
// 'Apartment Rent', 'Hard Furnishings', 'Credit Cards / Statutory Contribution', 'Other Perquisites', 'Security Services / Guards', 'Meal Subsidy / Housing Loan', 'Entertainment Allowance', 'Leave Encashment',
// 'Home Travel', 'Group Life', 'Hospitalization Insurance (self, wife, children)', 'Medical (OPD)','Pension', 'PF', 'EOBI', 'Gratuity'  
// ];

// // Sort selected options based on the order of optionOrder array(Compensation B)
// const sortedSelectedOptions= [...selectedOptions].sort(
//   (a, b) => optionOrder.indexOf(a) - optionOrder.indexOf(b)
// );

// // Sort selected options based on the order of optionOrder1 array(Compensation C)
// const sortedSelectedAllowanceOptions= selectedAllowanceOptions.sort(
//   (a, b) => optionOrder2.indexOf(a) - optionOrder2.indexOf(b)
// );
 
// // Sort selected options based on the order of optionOrder3 array(Compensation D)
// const sortedSelectedVariablepayOptions= selectedVariablepayOptions.sort(
//   (a, b) => optionOrder3.indexOf(a) - optionOrder3.indexOf(b)
// );

// // Sort selected options based on the order of optionOrder4 array(Compensation E)
// const sortedSelectedBenefitOptions= selectedBenefitOptions.sort(
//   (a, b) => optionOrder4.indexOf(a) - optionOrder4.indexOf(b)
// );
 
// interface ToggleOptionsProps {
//   compensation: string;
// }

// const toggleOptions = ({ compensation }: ToggleOptionsProps): void => {
//   setActiveCompensation(activeCompensation === compensation ? null : compensation);
// };

// // <--->Basic Salary(B)
// interface HandleOptionChangeProps {
//   option: string;
// }

// const handleOptionChange = ({ option }: HandleOptionChangeProps): void => {
//   // List of dependent options
//   const dependentOptions: string[] = ['House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)', 'LFA (% of basic)'];

//   if (selectedOptions.includes(option)) {
//     // If "Enter Basic Salary" is being unchecked, remove it and its dependent options
//     if (option === 'Enter Basic Salary') {
//       setSelectedOptions(selectedOptions.filter(item => item !== option && !dependentOptions.includes(item)));
//     } else {
//       // Otherwise, just remove the selected option
//       setSelectedOptions(selectedOptions.filter(item => item !== option));
//     }
//   } else {
//     // If dependent option is selected without "Enter Basic Salary", show error message
//     if (dependentOptions.includes(option) && !selectedOptions.includes('Enter Basic Salary')) {
//       setErrorMessage('To calculate this, click also "Enter Basic Salary".');
//       return;
//     }

//     // Add the selected option
//     setSelectedOptions([...selectedOptions, option]);
//     setErrorMessage(''); // Clear error message if Basic Salary is selected
//   }
// };

// // <--->Allowances (C)
// interface HandleAllowanceOptionChangeProps {
//   option: string;
// }

// const handleAllowanceOptionChange = ({ option }: HandleAllowanceOptionChangeProps): void => {
//   if (selectedAllowanceOptions.includes(option)) {
//     setSelectedAllowanceOptions(selectedAllowanceOptions.filter(item => item !== option));
//   } else {
//     setSelectedAllowanceOptions([...selectedAllowanceOptions, option]);
//   }
// };

// // <--->Variable Pay (D)
// interface HandleVariablepayOptionChangeProps {
//   option: string;
// }

// const handleVariablepayOptionChange = ({ option }: HandleVariablepayOptionChangeProps): void => {
//   if (selectedVariablepayOptions.includes(option)) {
//     setSelectedVariablepayOptions(selectedVariablepayOptions.filter(item => item !== option));
//   } else {
//     setSelectedVariablepayOptions([...selectedVariablepayOptions, option]);
//   }
// };

// // <--->Benefits (E)
// interface HandleBenefitOptionChangeProps {
//   option: string;
// }

// const handleBenefitOptionChange = ({ option }: HandleBenefitOptionChangeProps): void => {
//   if (selectedBenefitOptions.includes(option)) {
//     setSelectedBenefitOptions(selectedBenefitOptions.filter(item => item !== option));
//   } else {
//     setSelectedBenefitOptions([...selectedBenefitOptions, option]);
//   }
// };

// // Ensure these functions are defined somewhere in your code
// const roundNumber = (num: number): number => Math.round(num);
// interface FormatNumberProps {
//   num: number | undefined | null;
// }

// const formatNumber = ({ num }: FormatNumberProps): string => {
//   if (num === undefined || num === null || isNaN(num)) {
//     return '0';
//   }
//   return num.toLocaleString();
// };


// // Calculate the values based on percentages
// interface CalculateValueProps {
//   percentage: number;
//   salary: number;
// }

// const calculateValue = ({ percentage, salary }: CalculateValueProps): number => {
//   return salary ? Math.round(salary * (percentage / 100)) : 0;
// };

// // Calculate SUB-TOTAL (B):
// interface SubTotalBProps {
//   salary: number;
//   houseRent: number;
//   utilities: number;
//   medical: number;
//   lfa: number;
//   adjustmentForFuel: number;
//   retentionAmount: number;
// }

// const calculateSubTotalB = ({ salary, houseRent, utilities, medical, lfa, adjustmentForFuel, retentionAmount }: SubTotalBProps): number => {
//   return (
//     calculateValue({ percentage: houseRent, salary }) + 
//     calculateValue({ percentage: utilities, salary }) + 
//     calculateValue({ percentage: medical, salary }) + 
//     calculateValue({ percentage: lfa, salary }) + 
//     (adjustmentForFuel || 0) + 
//     (retentionAmount || 0)
//   );
// };
    
//   // Calculate Total (A + B): FOR CURRENT COMPANY
//   const totalABCurrent = () => {
//   const subtotalB = calculateSubTotalB({
//     salary: parseFloat(BasicSalaryCurrent) || 0,
//     houseRent: parseFloat(HouseRentCurrent) || 0,
//     utilities: parseFloat(UtilitiesCurrent) || 0,
//     medical: parseFloat(MedicalCurrent) || 0,
//     lfa: parseFloat(lfaCurrent) || 0,
//     adjustmentForFuel: parseFloat(AdjustmentForFuelCurrent) || 0,
//     retentionAmount: parseFloat(RetentionAmountCurrent) || 0
//   });
  
// // Calculate SUB-TOTAL (C):
// interface SubTotalCProps {
//   asr: number;
//   da: number;
//   mp: number;
//   dsa: number;
//   s: number;
//   res: number;
//   cell: number;
//   i: number;
//   dea: number;
//   pa: number;
// }

// const calculateSubTotalC = ({ asr, da, mp, dsa, s, res, cell, i, dea, pa }: SubTotalCProps): number => {
//   return (
//     (asr || 0) + (da || 0) + (mp || 0) + (dsa || 0) + (s || 0) + (res || 0) + (cell || 0) + (i || 0) + (dea || 0) + (pa || 0)
//   );
// };
  
//   // Calculate Total A + B + C //: FOR CURRENT COMPANY
//   // totalABCCurrent -> TOTAL ( A + B + C)
  
  
//   // Removed unused variable subtotalCPrevious
  
//   //2.
//   const subtotalC = calculateSubTotalC({ //ALLOWANCES (C): FOR PREVIOUS COMPANY
    
//     return parseFloat(BasicSalaryPrevious) + subtotalB + subtotalC;
//   };
  
//   // SUB-TOTAL (D):

//   const calculateSubTotalD = ({ vb, sm }: { vb: number; sm: number }): number => {
//     return (vb || 0) + (sm || 0);
//   };
  
//   // Calculate Total (A + B + C + D) : FOR CURRENT COMPANY
//   const totalABCDCurrent = () => {
//     return totalABCurrent() + calculateSubTotalD({ vb: parseFloat(vbCurrent) || 0, sm: parseFloat(smCurrent) || 0 });
//   };
  
//   // Calculate Total (A + B + C + D) : FOR PREVIOUS COMPANY
  

//   const totalABCDPrevious = (): number => {
//     return totalABCDPrevious() + calculateSubTotalD({ vb: parseFloat(vbPrevious) || 0, sm: parseFloat(smPrevious) || 0 });
//   };
  
//   // SUB-TOTAL (E):
//   interface SubTotalEProps {
//     car: number;
//     carInsurance: number;
//     carFuel: number;
//     carMaintenance: number;
//     carRegRoadTax: number;
//     tracker: number;
//     companyProvidedTraveling: number;
//     corporateClubMembership: number;
//     clubSubscription: number;
//     apartmentRent: number;
//     hardFurnishings: number;
//     creditCardsStatutoryContribution: number;
//     otherPerquisites: number;
//     securityServicesGuards: number;
//     mealSubsidyHousingLoan: number;
//     entertainmentAllowance: number;
//     leaveEncashment: number;
//     homeTravel: number;
//     groupLife: number;
//     hospitalizationInsurance: number;
//     medicalOpd: number;
//     pension: number;
//     pf: number;
//     eobi: number;
//     gratuity: number;
//   }

//   const calculateSubTotalE = ({
//     car,
//     carInsurance,
//     carFuel,
//     carMaintenance,
//     carRegRoadTax,
//     tracker,
//     companyProvidedTraveling,
//     corporateClubMembership,
//     clubSubscription,
//     apartmentRent,
//     hardFurnishings,
//     creditCardsStatutoryContribution,
//     otherPerquisites,
//     securityServicesGuards,
//     mealSubsidyHousingLoan,
//     entertainmentAllowance,
//     leaveEncashment,
//     homeTravel,
//     groupLife,
//     hospitalizationInsurance,
//     medicalOpd,
//     pension,
//     pf,
//     eobi,
//     gratuity,
//   }: SubTotalEProps): number => {
//     return (
//       (car || 0) +
//       (carInsurance || 0) +
//       (carFuel || 0) +
//       (carMaintenance || 0) +
//       (carRegRoadTax || 0) +
//       (tracker || 0) +
//       (companyProvidedTraveling || 0) +
//       (corporateClubMembership || 0) +
//       (clubSubscription || 0) +
//       (apartmentRent || 0) +
//       (hardFurnishings || 0) +
//       (creditCardsStatutoryContribution || 0) +
//       (otherPerquisites || 0) +
//       (securityServicesGuards || 0) +
//       (mealSubsidyHousingLoan || 0) +
//       (entertainmentAllowance || 0) +
//       (leaveEncashment || 0) +
//       (homeTravel || 0) +
//       (groupLife || 0) +
//       (hospitalizationInsurance || 0) +
//       (medicalOpd || 0) +
//       (pension || 0) +
//       (pf || 0) +
//       (eobi || 0) +
//       (gratuity || 0)
//     );
//   };
  
//   // Calculate Total (A + B + C + D + E) : FOR CURRENT COMPANY
//   const totalABCDECurrent = () => {
    
//   //1.
//   const subtotalA = parseFloat(BasicSalaryCurrent);
  
//   //2.
//   const subtotalB = calculateSubTotalB({
//     salary: parseFloat(BasicSalaryCurrent) || 0,
//     houseRent: parseFloat(HouseRentCurrent) || 0,
//     utilities: parseFloat(UtilitiesCurrent) || 0,
//     medical: parseFloat(MedicalCurrent) || 0,
//     lfa: parseFloat(lfaCurrent) || 0,
//     adjustmentForFuel: parseFloat(AdjustmentForFuelCurrent) || 0,
//     retentionAmount: parseFloat(RetentionAmountCurrent) || 0
//   });
  
//   //3.  
//   const subtotalC = calculateSubTotalC({
//     asr: parseFloat(asrCurrent) || 0,
//     da: parseFloat(daCurrent) || 0,
//     mp: parseFloat(mpCurrent) || 0,
//     dsa: parseFloat(dsaCurrent) || 0,
//     s: parseFloat(sCurrent) || 0,
//     res: parseFloat(resCurrent) || 0,
//     cell: parseFloat(cellCurrent) || 0,
//     i: parseFloat(iCurrent) || 0,
//     dea: parseFloat(deaCurrent) || 0,
//     pa: parseFloat(paCurrent) || 0
//   });
//     asr: parseFloat(asrPrevious) || 0,
//     da: parseFloat(daPrevious) || 0,
//     mp: parseFloat(mpPrevious) || 0,
//     dsa: parseFloat(dsaPrevious) || 0,
//     s: parseFloat(sPrevious) || 0,
//     res: parseFloat(resPrevious) || 0,
//     cell: parseFloat(cellPrevious) || 0,
//     i: parseFloat(iPrevious) || 0,
//     dea: parseFloat(deaPrevious) || 0,
//     pa: parseFloat(paPrevious) || 0
//   });
    
//   //4.
//   const subtotalD = calculateSubTotalD({
//     vb: vbCurrent,
//     sm: smCurrent
//   });
    
//   //5.
//   const subtotalE = calculateSubTotalE({
//     car: carCurrent,
//     carInsurance: carInsuranceCurrent,
//     carFuel: carFuelCurrent,
//     carMaintenance: carMaintenanceCurrent,
//     carRegRoadTax: carRegRoadTaxCurrent,
//     tracker: trackerCurrent,
//     companyProvidedTraveling: companyProvidedTravelingCurrent,
//     corporateClubMembership: corporateClubMembershipCurrent,
//     clubSubscription: clubSubscriptionCurrent,
//     apartmentRent: apartmentRentCurrent,
//     hardFurnishings: hardFurnishingsCurrent,
//     creditCardsStatutoryContribution: creditCardsStatutoryContributionCurrent,
//     otherPerquisites: otherPerquisitesCurrent,
//     securityServicesGuards: securityServicesGuardsCurrent,
//     mealSubsidyHousingLoan: mealSubsidyHousingLoanCurrent,
//     entertainmentAllowance: entertainmentAllowanceCurrent,
//     leaveEncashment: leaveEncashmentCurrent,
//     homeTravel: homeTravelCurrent,
//     groupLife: groupLifeCurrent,
//     hospitalizationInsurance: hospitalizationInsuranceCurrent,
//     medicalOpd: medicalOpdCurrent,
//     pension: pensionCurrent,
//     pf: pfCurrent,
//     eobi: eobiCurrent,
//     gratuity: gratuityCurrent
//   });
//     return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
//   };
  
//   // Calculate Total (A + B + C + D + E) : FOR PREVIOUS COMPANY
//   const totalABCDEPrevious = () => {
//   const subtotalB = calculateSubTotalB({
//     salary: parseFloat(BasicSalaryPrevious) || 0,
//     houseRent: parseFloat(HouseRentPrevious) || 0,
//     utilities: parseFloat(UtilitiesPrevious) || 0,
//     medical: parseFloat(MedicalPrevious) || 0,
//     lfa: parseFloat(lfaPrevious) || 0,
//     adjustmentForFuel: parseFloat(AdjustmentForFuelPrevious) || 0,
//     retentionAmount: parseFloat(RetentionAmountPrevious) || 0
//   });
//   //2.
//   const subtotalB = calculateSubTotalB
//   (
//    BasicSalaryPrevious, HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
//   );
  
//   //3.
//   const subtotalC = calculateSubTotalC
//   (
//    asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious
//   );
  
//   //4.
//   const subtotalD = calculateSubTotalD({
//     vb: vbPrevious,
//     sm: smPrevious
//   });
  
//   //5.
//   const subtotalE = calculateSubTotalE
//   (
//     carPrevious, carInsurancePrevious, carFuelPrevious, carMaintenancePrevious, carRegRoadTaxPrevious, trackerPrevious,
//     companyProvidedTravelingPrevious, corporateClubMembershipPrevious, clubSubscriptionPrevious, apartmentRentPrevious, 
//     hardFurnishingsPrevious, creditCardsStatutoryContributionPrevious, otherPerquisitesPrevious, securityServicesGuardsPrevious, 
//     mealSubsidyHousingLoanPrevious, entertainmentAllowancePrevious, leaveEncashmentPrevious, homeTravelPrevious, groupLifePrevious, 
//     hospitalizationInsurancePrevious, medicalOpdPrevious, pensionPrevious, pfPrevious, eobiPrevious, gratuityPrevious
//   );
//     return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
//   };
  
//   useState(() => {  
//     const newAnnualPackageCurrent = roundNumber(totalABCDECurrent() * 12);  
//     const newAnnualPackagePrevious = roundNumber(totalABCDEPrevious() * 12);  
//     const newCompaRatioCurrent = roundNumber((totalABCDECurrent() / 177746) * 100);  
//     const newCompaRatioPrevious = roundNumber((totalABCDEPrevious() / 177746) * 100);  
  
//     setAnnualPackageCurrent(newAnnualPackageCurrent);  
//     setAnnualPackagePrevious(newAnnualPackagePrevious);  
//     setCompaRatioCurrent(newCompaRatioCurrent);  
//     setCompaRatioPrevious(newCompaRatioPrevious);  
//   }, [totalABCDECurrent, totalABCDEPrevious]); 
   
// const renderOptionRow = (option, index) => {
// let row = null;
  
// switch (option) {


// case 'Enter Basic Salary':
//   row = (
//     <tr key={index} className="border-b border-black shadow-darkBlue">
//       <td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">1</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Basic Salary</td>

//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue
//           mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             className="w-full p-2 sm:p-4 border border-gray rounded-lg"
//             placeholder="Enter Amount"
//             value={BasicSalaryCurrent}
//             onChange={(e) => setBasicSalaryCurrent(parseFloat(e.target.value) || '')}/>
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             className="w-full p-2 sm:p-4 border border-gray rounded-lg"
//             placeholder="Enter Amount"
//             value={BasicSalaryPrevious}
//             onChange={(e) => setBasicSalaryPrevious(parseFloat(e.target.value) || '')}
            
//           />
//         </td>
//       )}

//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(BasicSalaryCurrent)}</div>
//       </td>

//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(BasicSalaryPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;



// case 'House Rent (% of basic)':
//   row = (
//     <tr key={index} className="border-b border-black shadow-darkBlue">
//       <td className="text-Blue px-4 py-2 border-b text-xs sm:text-base">{index + 1}</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">House Rent (% of basic)</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue font-bold mt-4
//             mb-2 text-xs sm:text-base">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Percentage"
//               value={HouseRentCurrent}
//               onChange={(e) => {
//                 const value = parseFloat(e.target.value) || '';
//                 if (value >= 0 && value <= 100) {
//                   setHouseRentCurrent(value);
//                 }
//               }}
//               className="border border-black rounded-md p-2 w-full"
//               aria-label="Current House Rent Percentage"
//             />
//             <div className="guidance-text font-bold text-Blue mt-4 mb-2 text-xs sm:text-base">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Percentage"
//               value={HouseRentPrevious}
//               onChange={(e) => {
//                 const value = parseFloat(e.target.value) || '';
//                 if (value >= 0 && value <= 100) {
//                   setHouseRentPrevious(value);
//                 }
//               }}
//               className="border border-black rounded-md p-2 w-full"
//               aria-label="Offer House Rent Percentage"
//             />
        
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(HouseRentCurrent, BasicSalaryCurrent))}</div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(HouseRentPrevious, BasicSalaryPrevious))}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Utilities (% of basic)':
//   row = (
//     <tr key={index} className="border-b border-black shadow-darkBlue">
//       <td className="text-Blue px-4 py-2 border-b text-xs sm:text-base">{3}</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Utilities (% of basic)</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="text-center">
//             <div className="guidance-text text-Blue mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Percentage"
//               value={UtilitiesCurrent}
//               onChange={(e) => setUtilitiesCurrent(parseFloat(e.target.value) || '')}
//               className="border border-black rounded-md p-2 w-full"
//             />
//             <div className="guidance-text text-Blue mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Percentage"
//               value={UtilitiesPrevious}
//               onChange={(e) => setUtilitiesPrevious(parseFloat(e.target.value) || '')}
//               className="border border-black rounded-md p-2 w-full"
//             />
//           </div>
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">
//           {formatNumber(calculateValue(UtilitiesCurrent, BasicSalaryCurrent))}
//         </div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">
//           {formatNumber(calculateValue(UtilitiesPrevious, BasicSalaryPrevious))}
//         </div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Medical (% of basic)':
//   row = (
//     <tr key={index} className="border-b border-black shadow-darkBlue">
//       <td className="text-Blue px-4 py-2 border-b text-xs sm:text-base">{4}</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">{`Medical (% of basic)`}</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue  mt-4 mb-2 text-xs sm:text-base">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Percentage"
//               value={MedicalCurrent}
//               onChange={(e) => setMedicalCurrent(parseFloat(e.target.value) || '')}
//               className="border border-black rounded-md p-2 w-full"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Percentage"
//               value={MedicalPrevious}
//               onChange={(e) => setMedicalPervious(parseFloat(e.target.value) || '')}
//               className="border border-black rounded-md p-2 w-full"
//             />
          
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(MedicalCurrent, BasicSalaryCurrent))}</div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(MedicalPrevious, BasicSalaryPrevious))}</div>
//       </td>
//     </tr>
//   );
  
// break;

// case 'LFA (% of basic)':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">{5}</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">LFA (% of basic)</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Percentage"
//             value={lfaCurrent}
//             onChange={(e) => setlfaCurrent(parseFloat(e.target.value) || '')}
//             className="border border-black rounded-md p-2 w-full"
//             aria-label="Current LFA Percentage"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Percentage"
//             value={lfaPrevious}
//             onChange={(e) => setlfaPervious(parseFloat(e.target.value) || '')}
//             className="border border-black rounded-md p-2 w-full"
//             aria-label="Previous LFA Percentage"
//           />
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(lfaCurrent, BasicSalaryCurrent))}</div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(lfaPrevious, BasicSalaryPrevious))}</div>
//       </td>
//     </tr>
//   );
//   break;

  
// case 'Adjustment for Fuel':
//   row = (
//     <tr key={index} className="border-b border-black shadow-darkBlue">
//       <td className="p-2 text-xs sm:text-base text-Blue">6</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Adjustment for Fuel</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text mt-4 mb-2 text-xs sm:text-base text-Blue font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={AdjustmentForFuelCurrent}
//             onChange={(e) => setAdjustmentForFuelCurrent(parseFloat(e.target.value) || '')}
//             className="border rounded p-2 w-full mb-2 focus:ring-2 focus:ring-black"
//             aria-label="Current Adjustment for Fuel Amount"
//           />
//           <div className="guidance-text text-Blue mb-2 text-xs sm:text-base font-bold ">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={AdjustmentForFuelPrevious}
//             onChange={(e) => setAdjustmentForFuelPrevious(parseFloat(e.target.value) || '')}
//             className="border rounded p-2 w-full focus:ring-2"
//             aria-label="Previous Adjustment for Fuel Amount"
//           />
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(AdjustmentForFuelCurrent)}</div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(AdjustmentForFuelPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Other Amount':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">7</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Other Amount (Retention Amount)</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={RetentionAmountCurrent}
//             onChange={(e) => setRetentionAmountCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={RetentionAmountPrevious}
//             onChange={(e) => setRetentionAmountPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(RetentionAmountCurrent)}</div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(RetentionAmountPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// default: break;
// }

// return row;
// };

// const renderAllowanceRow = (option, index) => {
// let row = null;

// switch (option) {
//   case 'Allowance in lieu of second Car':
//     row = (
//       <tr key={index} className="border-b border-black">
//         <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">1</td>
//         <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Allowance in lieu of second Car</td>
//         {isSecondColumnVisible && (
//           <td className="p-4 sm:p-10 text-center">
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={asrCurrent}
//               onChange={(e) => setasrCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={asrPrevious}
//               onChange={(e) => setasrPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//           </td>
//         )}
//         <td className="p-4 text-center">
//           <div className="text-Blue text-xs sm:text-base">{formatNumber(asrCurrent)}</div>
//         </td>
//         <td className="p-4 text-center text-xs sm:text-base">
//           <div className="text-Blue text-xs sm:text-base">{formatNumber(asrPrevious)}</div>
//         </td>
//       </tr>
//     );
//     break;
//     case 'Disturbance Allowance':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">2</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Disturbance Allowance</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={daCurrent}
//             onChange={(e) => setdaCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={daPrevious}
//             onChange={(e) => setdaPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className='p-4 text-center'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(daCurrent)}</div>
//       </td>
//       <td className='p-4 text-center text-xs sm:text-base'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(daPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Market Premium':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">3</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Market Premium</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={mpCurrent}
//             onChange={(e) => setmpCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={mpPrevious}
//             onChange={(e) => setmpPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(mpCurrent)}</div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(mpPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Driver Salary (Allowance)':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">4</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Driver Salary (Allowance)</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue  mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={dsaCurrent}
//             onChange={(e) => setdsaCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={dsaPrevious}
//             onChange={(e) => setdsaPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(dsaCurrent)}</div>
//       </td>
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(dsaPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Servant':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className='px-4 py-2 border-b text-xs sm:text-base text-Blue'>5</td>
//       <td className='p-4 text-left font-medium text-xs sm:text-base text-Blue'>Servant</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={sCurrent}
//             onChange={(e) => setsCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={sPrevious}
//             onChange={(e) => setsPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className='p-4 text-center'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(sCurrent)}</div>
//       </td>
//       <td className='p-4 text-center text-xs sm:text-base'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(sPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Tel (res)':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className='px-4 py-2 border-b text-xs sm:text-base text-Blue'>6</td>
//       <td className='p-4 text-left font-medium text-xs sm:text-base text-Blue'>Tel (res)</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={resCurrent}
//             onChange={(e) => setresCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={resPrevious}
//             onChange={(e) => setresPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className='p-4 text-center'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(resCurrent)}</div>
//       </td>
//       <td className='p-4 text-center text-xs sm:text-base'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(resPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Tel (cell)':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className='px-4 py-2 border-b text-xs sm:text-base text-Blue'>7</td>
//       <td className='p-4 text-left font-medium text-xs sm:text-base text-Blue'>Tel (cell)</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={cellCurrent}
//             onChange={(e) => setcellCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Previous</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={cellPrevious}
//             onChange={(e) => setcellPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className='p-4 text-center'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(cellCurrent)}</div>
//       </td>
//       <td className='p-4 text-center text-xs sm:text-base'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(cellPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


 
// case 'Internet':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className='px-4 py-2 border-b text-xs sm:text-base text-Blue'>8</td>
//       <td className='p-4 text-left font-medium text-xs sm:text-base text-Blue'>Internet</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={iCurrent}
//             onChange={(e) => setiCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={iPrevious}
//             onChange={(e) => setiPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className='p-4 text-center'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(iCurrent)}</div>
//       </td>
//       <td className='p-4 text-center text-xs sm:text-base'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(iPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Dearness Allowance':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className='px-4 py-2 border-b text-xs sm:text-base text-Blue'>9</td>
//       <td className='p-4 text-left font-medium text-xs sm:text-base text-Blue'>Dearness Allowance</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={deaCurrent}
//             onChange={(e) => setdeaCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={deaPrevious}
//             onChange={(e) => setdeaPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className='p-4 text-center'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(deaCurrent)}</div>
//       </td>
//       <td className='p-4 text-center text-xs sm:text-base'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(deaPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Project Allowance':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className='p-4 text-center font-medium text-xs sm:text-base text-Blue'>10</td>
//       <td className='p-4 text-left font-medium text-xs sm:text-base text-Blue'>Project Allowance</td>
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={paCurrent}
//             onChange={(e) => setpaCurrent(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//           <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={paPrevious}
//             onChange={(e) => setpaPrevious(parseFloat(e.target.value) || '')}
//             className="w-full p-2 sm:p-4 border border-black rounded-lg"
//           />
//         </td>
//       )}
//       <td className='p-4 text-center'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(paCurrent)}</div>
//       </td>
//       <td className='p-4 text-center text-xs sm:text-base'>
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(paPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;
// default:
//   // Handle other cases or a default case here
// }

// return row;
// };

// const renderVariablepayRow = (option, index) => {
// let row = null;
  
// switch (option) {
//     case 'Variable Bonus':          
//     row = (
//       <tr key={index} className="border-b border-black">
//         <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">1</td>
//         <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Variable Bonus</td>
  
//         {isSecondColumnVisible && (
//           <td className="p-4 sm:p-10 text-center">
         
//               <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={vbCurrent}
//                 onChange={(e) => setvbCurrent(parseFloat(e.target.value) || '')}
//                 className="w-full p-2 sm:p-4 border border-black rounded-lg"
//               />
//               <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={vbPrevious}
//                 onChange={(e) => setvbPrevious(parseFloat(e.target.value) || '')}
//                 className="w-full p-2 sm:p-4 border border-black rounded-lg"
//               />
            
//           </td>
//         )}
  
//         <td className="p-4 text-center">
//           <div className="text-Blue text-xs sm:text-base">{formatNumber(vbCurrent)}</div>
//         </td>
  
//         <td className="p-4 text-center text-xs sm:text-base">
//           <div className="text-Blue text-xs sm:text-base">{formatNumber(vbPrevious)}</div>
//         </td>
//       </tr>
//     );
//     break;
  
// case 'Special Milestone':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">2</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Special Milestone</td>

//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={smCurrent}
//               onChange={(e) => setsmCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={smPrevious}
//               onChange={(e) => setsmPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(smCurrent)}</div>
//       </td>

//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(smPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// default:}
//   // Handle any default cases or errors here

// return row;
// };


// const renderBenefitRow = (option, index) => {
//   let row = null;
    
// switch (option) {
//     case 'Car':
//         row = (
//           <tr key={index}className="border-b border-black">
//             <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">1</td>
//             <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car</td>
      
//             {isSecondColumnVisible && (
//               <td className="p-4 sm:p-10 text-center">
//                   <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//                   <input
//                     type="number"
//                     placeholder="Enter Amount"
//                     value={carCurrent}
//                     onChange={(e) => setcarCurrent(parseFloat(e.target.value) || '')}
//                     className="w-full p-2 sm:p-4 border border-black rounded-lg"
//                   />
//                   <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//                   <input
//                     type="number"
//                     placeholder="Enter Amount"
//                     value={carPrevious}
//                     onChange={(e) => setcarPrevious(parseFloat(e.target.value) || '')}
//                     className="w-full p-2 sm:p-4 border border-black rounded-lg placeholder:text-sm sm:placeholder:text-base"
//                   />
               
//               </td>
//             )}
      
//             <td className="p-4 text-center">
//               <div className="text-Blue text-xs sm:text-base">{formatNumber(carCurrent)}</div>
//             </td>
      
//             <td className="p-4 text-center text-xs sm:text-base">
//               <div className="text-Blue text-xs sm:text-base">{formatNumber(carPrevious)}</div>
//             </td>
//           </tr>
//         );
//         break;
      
    
// case 'Car Insurance':
// row = (
// <tr key={index} className="border-b border-black">
// <td className='p-4 text-center font-medium text-xs sm:text-base text-Blue'>2</td>
// <td className='p-4 text-left font-medium text-xs sm:text-base text-Blue'>Car Insurance</td>
// {isSecondColumnVisible && (
//   <td className="p-4 sm:p-10 text-center">
// <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
// <input
//  type="number"
//  className="w-full p-2 sm:p-4 border border-black rounded-lg"
//  placeholder="Enter Amount" 
//  value={carInsuranceCurrent} 
//  onChange={(e) => setcarInsuranceCurrent(parseFloat(e.target.value) || '')}/>
// <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
// <input
// type="number" 
// className="w-full p-2 sm:p-4 border border-black rounded-lg"
// placeholder="Enter Amount" 
// value={carInsurancePrevious} 
// onChange={(e) => setcarInsurancePrevious(parseFloat(e.target.value) || '')}/>
// </td>
// )}
            
// <td className="p-4 text-center">
//   <div className="text-Blue text-xs sm:text-base">{formatNumber(carInsuranceCurrent)}</div></td>
// <td className='p-4 text-center text-xs sm:text-base'>
//   <div className="text-Blue text-xs sm:text-base">{formatNumber(carInsurancePrevious)}</div></td>
// </tr>
// );
// break;

// case 'Car Fuel':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">3</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car Fuel</td>

//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={carFuelCurrent}
//               onChange={(e) => setcarFuelCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={carFuelPrevious}
//               onChange={(e) => setcarFuelPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(carFuelCurrent)}</div>
//       </td>

//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(carFuelPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Car Maintenance':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">4</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car Maintenance</td>

//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={carMaintenanceCurrent}
//               onChange={(e) => setcarMaintenanceCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={carMaintenancePrevious}
//               onChange={(e) => setcarMaintenancePrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(carMaintenanceCurrent)}</div>
//       </td>

//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(carMaintenancePrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Car Reg / Road Tax':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">5</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car Reg / Road Tax</td>

//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={carRegRoadTaxCurrent}
//               onChange={(e) => setcarRegRoadTaxCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={carRegRoadTaxPrevious}
//               onChange={(e) => setcarRegRoadTaxPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//         </td>
//       )}

//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(carRegRoadTaxCurrent)}</div>
//       </td>

//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(carRegRoadTaxPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Tracker':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">6</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Tracker</td>

//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={trackerCurrent}
//               onChange={(e) => settrackerCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={trackerPrevious}
//               onChange={(e) => settrackerPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(trackerCurrent)}</div>
//       </td>

//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(trackerPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Company Provided Traveling':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">7</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Company Provided Traveling</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={companyProvidedTravelingCurrent}
//               onChange={(e) => setcompanyProvidedTravelingCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={companyProvidedTravelingPrevious}
//               onChange={(e) => setcompanyProvidedTravelingPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(companyProvidedTravelingCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(companyProvidedTravelingPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Corporate Club Membership':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">8</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Corporate Club Membership</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={corporateClubMembershipCurrent}
//               onChange={(e) => setcorporateClubMembershipCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={corporateClubMembershipPrevious}
//               onChange={(e) => setcorporateClubMembershipPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(corporateClubMembershipCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(corporateClubMembershipPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Club Subscription':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">9</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Club Subscription</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={clubSubscriptionCurrent}
//               onChange={(e) => setclubSubscriptionCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={clubSubscriptionPrevious}
//               onChange={(e) => setclubSubscriptionPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(clubSubscriptionCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(clubSubscriptionPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Apartment Rent':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">10</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Apartment Rent</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={apartmentRentCurrent}
//               onChange={(e) => setapartmentRentCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={apartmentRentPrevious}
//               onChange={(e) => setapartmentRentPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(apartmentRentCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(apartmentRentPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Hard Furnishings':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">11</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Hard Furnishings</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={hardFurnishingsCurrent}
//               onChange={(e) => sethardFurnishingsCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={hardFurnishingsPrevious}
//               onChange={(e) => sethardFurnishingsPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(hardFurnishingsCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(hardFurnishingsPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Credit Cards / Statutory Contribution':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">12</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Credit Cards / Statutory Contribution</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={creditCardsStatutoryContributionCurrent}
//               onChange={(e) => setcreditCardsStatutoryContributionCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={creditCardsStatutoryContributionPrevious}
//               onChange={(e) => setcreditCardsStatutoryContributionPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(creditCardsStatutoryContributionCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(creditCardsStatutoryContributionPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Other Perquisites':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">13</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Other Perquisites</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
       
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={otherPerquisitesCurrent}
//               onChange={(e) => setotherPerquisitesCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={otherPerquisitesPrevious}
//               onChange={(e) => setotherPerquisitesPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
       
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(otherPerquisitesCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(otherPerquisitesPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Security Services / Guards':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">14</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Security Services / Guards</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={securityServicesGuardsCurrent}
//               onChange={(e) => setsecurityServicesGuardsCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={securityServicesGuardsPrevious}
//               onChange={(e) => setsecurityServicesGuardsPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(securityServicesGuardsCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(securityServicesGuardsPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Meal Subsidy / Housing Loan':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">15</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Meal Subsidy / Housing Loan</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={mealSubsidyHousingLoanCurrent}
//               onChange={(e) => setmealSubsidyHousingLoanCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={mealSubsidyHousingLoanPrevious}
//               onChange={(e) => setmealSubsidyHousingLoanPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(mealSubsidyHousingLoanCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(mealSubsidyHousingLoanPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Entertainment Allowance':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">16</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Entertainment Allowance</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={entertainmentAllowanceCurrent}
//               onChange={(e) => setentertainmentAllowanceCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={entertainmentAllowancePrevious}
//               onChange={(e) => setentertainmentAllowancePrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
        
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(entertainmentAllowanceCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(entertainmentAllowancePrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Leave Encashment':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">17</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Leave Encashment</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={leaveEncashmentCurrent}
//               onChange={(e) => setleaveEncashmentCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={leaveEncashmentPrevious}
//               onChange={(e) => setleaveEncashmentPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(leaveEncashmentCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(leaveEncashmentPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Home Travel':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">18</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Home Travel</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
      
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={homeTravelCurrent}
//               onChange={(e) => sethomeTravelCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input
//               type="number"
//               placeholder="Enter Amount"
//               value={homeTravelPrevious}
//               onChange={(e) => sethomeTravelPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(homeTravelCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(homeTravelPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Group Life':          
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">19</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Group Life</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={groupLifeCurrent}
//               onChange={(e) => setgroupLifeCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={groupLifePrevious}
//               onChange={(e) => setgroupLifePrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(groupLifeCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(groupLifePrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'Hospitalization Insurance (self, wife, children)':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">20</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Hospitalization Insurance (self, wife, children)</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={hospitalizationInsuranceCurrent}
//               onChange={(e) => sethospitalizationInsuranceCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={hospitalizationInsurancePrevious}
//               onChange={(e) => sethospitalizationInsurancePrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(hospitalizationInsuranceCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(hospitalizationInsurancePrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Medical (OPD)':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">21</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Medical (OPD)</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue font-bold mt-4 mb-2 text-xs sm:text-base">Current</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={medicalOpdCurrent}
//               onChange={(e) => setmedicalOpdCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={medicalOpdPrevious}
//               onChange={(e) => setmedicalOpdPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(medicalOpdCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(medicalOpdPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'Pension':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">22</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Pension</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={pensionCurrent}
//               onChange={(e) => setpensionCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={pensionPrevious}
//               onChange={(e) => setpensionPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(pensionCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(pensionPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

// case 'PF':          
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">23</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">PF</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={pfCurrent}
//               onChange={(e) => setpfCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={pfPrevious}
//               onChange={(e) => setpfPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(pfCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(pfPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;

    
// case 'EOBI':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">24</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">EOBI</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
          
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={eobiCurrent}
//               onChange={(e) => seteobiCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={eobiPrevious}
//               onChange={(e) => seteobiPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
         
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(eobiCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(eobiPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;


// case 'Gratuity':
//   row = (
//     <tr key={index} className="border-b border-black">
//       <td className="px-4 py-2 border-b text-xs sm:text-base text-Blue">25</td>
//       <td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Gratuity</td>

//       {/* Custom Column Input */}
//       {isSecondColumnVisible && (
//         <td className="p-4 sm:p-10 text-center">
         
//             <div className="guidance-text text-Blue  mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={gratuityCurrent}
//               onChange={(e) => setgratuityCurrent(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
//             <div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
//             <input 
//               type="number"
//               placeholder="Enter Amount"
//               value={gratuityPrevious}
//               onChange={(e) => setgratuityPrevious(parseFloat(e.target.value) || '')}
//               className="w-full p-2 sm:p-4 border border-black rounded-lg"
//             />
          
//         </td>
//       )}

//       {/* Current Amount Display */}
//       <td className="p-4 text-center">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(gratuityCurrent)}</div>
//       </td>

//       {/* Previous Amount Display */}
//       <td className="p-4 text-center text-xs sm:text-base">
//         <div className="text-Blue text-xs sm:text-base">{formatNumber(gratuityPrevious)}</div>
//       </td>
//     </tr>
//   );
//   break;
// default:
//   // Handle other cases
// }

// return row;
// };

// return (
//     <div className="p-10">
  
//       {/* Heading */}
//       <h1 className="text-2xl font-bold text-center mb-6  text-Blue">Financial Offer Calculator</h1>
//       <h3 className="font-semibold text-Red text-center mb-4">Here You Can Enter Your Custom Ones...</h3>
  
//       {/* Custom Button */}
//       <div className="flex justify-center mb-6 ">
//         <button 
//           className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red  transition"
//           onClick={toggleSecondColumn}
//         >
//           Custom
//         </button>
//       </div>
  
//       {/* Compensation Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-6 ">
//         <button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red transition" onClick={() => toggleOptions('Basic Salary')}>Basic Salary</button>
//         <button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red transition" onClick={() => toggleOptions('Allowance')}>Allowance</button>
//         <button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red  transition" onClick={() => toggleOptions('Variable Pay')}>Variable Pay</button>
//         <button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red  transition" onClick={() => toggleOptions('Benefits')}>Benefits</button>
//       </div>
  
//       {/* Basic Salary Options */}
//       {activeCompensation === 'Basic Salary' && (
//         <div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6 ">
//           <ol className="list-decimal pl-6">
//             {['Enter Basic Salary', 'House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)', 'LFA (% of basic)', 'Adjustment for Fuel', 'Other Amount'].map(option => (
//               <li key={option}>
//                 <label className="flex items-center gap-2">
//                   <input 
//                     type="checkbox" 
//                     checked={selectedOptions.includes(option)} 
//                     onChange={() => handleOptionChange(option)} 
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
  
//       {/* Allowance Options */}
//       {activeCompensation === 'Allowance' && (
//         <div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6">
//           <ol className="list-decimal pl-6">
//             {['Allowance in lieu of second Car', 'Disturbance Allowance', 'Market Premium', 'Driver Salary (Allowance)', 'Servant', 'Tel (res)', 'Tel (cell)', 'Internet', 'Dearness Allowance', 'Project Allowance'].map(option => (
//               <li key={option}>
//                 <label className="flex items-center gap-2">
//                   <input 
//                     type="checkbox" 
//                     checked={selectedAllowanceOptions.includes(option)} 
//                     onChange={() => handleAllowanceOptionChange(option)} 
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
  
//       {/* Variable Pay Options */}
     
//       {activeCompensation === 'Variable Pay' && (
//         <div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6">
//           <ol className="list-decimal pl-6">
//             {['Variable Bonus', 'Special Milestone'].map(option => (
//               <li key={option}>
//                 <label className="flex items-center gap-2">
//                   <input 
//                     type="checkbox" 
//                     checked={selectedVariablepayOptions.includes(option)} 
//                     onChange={() => handleVariablepayOptionChange(option)} 
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
      
  
//       {/* Benefits Options */}
//       {activeCompensation === 'Benefits' && (
//         <div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6">
//           <ol className="list-decimal pl-6">
//             {['Car', 'Car Insurance', 'Car Fuel', 'Car Maintenance', 'Car Reg / Road Tax', 'Tracker', 'Company Provided Traveling', 'Corporate Club Membership', 'Club Subscription', 'Apartment Rent', 'Hard Furnishings', 'Credit Cards / Statutory Contribution', 'Other Perquisites', 'Security Services / Guards', 'Meal Subsidy / Housing Loan', 'Entertainment Allowance', 'Leave Encashment', 'Home Travel', 'Group Life', 'Hospitalization Insurance (self, wife, children)', 'Medical (OPD)', 'Pension', 'PF', 'EOBI', 'Gratuity'].map(option => (
//               <li key={option}>
//                 <label className="flex items-center gap-2">
//                   <input 
//                     type="checkbox" 
//                     checked={selectedBenefitOptions.includes(option)} 
//                     onChange={() => handleBenefitOptionChange(option)} 
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
  
//       {/* Error Message */}
//       {errorMessage && <div className="text-Red text-center mb-4">{errorMessage}</div>}
  
//       {/* Compensation Table */}
//       <div className="overflow-x-auto bg-white shadow-darkBlue shadow-lg rounded-lg lg:w-full w-full mx-auto">
//         <table className="min-w-full bg-white shadow rounded-lg">
//           <thead>
//             <tr className="bg-Red text-white">
//               <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base"></th>
//               <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Compensation Breakdown</th>
//               {isSecondColumnVisible && <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Enter Custom</th>}
//               <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Current Amount</th>
//               <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Previous Amount</th>
//             </tr>
//           </thead>
//           <tbody>
           
//             <tr className="bg-gray2"><td colSpan={2} className="px-2 sm:px-4 py-2 font-bold text-center text-Blue text-xs sm:text-base">
//           Basic Salary:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>
//             {sortedSelectedOptions.map((option, index) => renderOptionRow(option, index))}

//             <tr className="bg-white font-bold"><td></td><td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (B)</td>
//             {isSecondColumnVisible && <td></td>}
//             <td className="font-bold text-Red text-center text-xs sm:text-base">
//               <div>{formatNumber(calculateSubTotalB(BasicSalaryCurrent, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent))}</div></td>
//               <td className="font-bold text-Red text-center text-xs sm:text-base">
//                 <div>{formatNumber(calculateSubTotalB(BasicSalaryPrevious, HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious))}</div></td></tr>

//             <tr className="bg-gray font-bold"><td></td><td className="font-bold text-center text-xs sm:text-base text-white">Total (A + B)</td>
//             {isSecondColumnVisible && <td></td>}
//             <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCurrent())}</td><td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABPrevious())}</td></tr>

//             <tr className="bg-gray2 font-bold"><td className="font-bold text-Blue text-center text-xs sm:text-base" colSpan={2}>Allowances:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>{sortedSelectedAllowanceOptions.map((option, index) => renderAllowanceRow(option, index))}

//             <tr className="bg-white font-bold"><td></td>
//             <td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (C)</td>{isSecondColumnVisible && <td></td>}
//             <td className="font-bold text-Red text-center text-xs sm:text-base">
//               <div>{formatNumber(calculateSubTotalC(asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent))}</div>
//               </td><td className="font-bold text-Red text-center text-xs sm:text-base">
//                 <div>{formatNumber(calculateSubTotalC(asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious))}</div></td></tr>

//             <tr className="bg-gray font-bold"><td></td><td className="font-bold text-white text-center text-xs sm:text-base">Total (A + B + C)</td>
//             {isSecondColumnVisible && <td></td>}
//             <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCCurrent())}</td>
//             <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCPrevious())}</td></tr>

//             <tr className="bg-gray2 font-bold"><td className="font-bold text-Blue text-center text-xs sm:text-base" colSpan={2}>Variable Pay:</td><td></td>
//             {isSecondColumnVisible && <td></td>}<td></td></tr>{sortedSelectedVariablepayOptions.map((option, index) => renderVariablepayRow(option, index))}

//             <tr className="bg-white font-bold"><td></td><td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (D)</td>
//             {isSecondColumnVisible && <td></td>}
//             <td className="font-bold text-Red text-center text-xs sm:text-base">
//               <div>{formatNumber(calculateSubTotalD(vbCurrent, smCurrent))}</div></td>
//               <td className="font-bold text-Red text-center text-xs sm:text-base">
//                 <div>{formatNumber(calculateSubTotalD(vbPrevious, smPrevious))}</div></td>
//                 </tr>

//             <tr className="bg-gray font-bold">
//               <td></td><td className="font-bold text-white text-center text-xs sm:text-base">Total (A + B + C + D)</td>{isSecondColumnVisible && <td></td>}
//               <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCDCurrent())}</td><td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCDPrevious())}</td></tr>

//             <tr className="bg-gray2 font-bold">
//               <td className="font-bold text-Blue  text-center text-xs sm:text-base" colSpan={2}>Benefits:</td><td></td>
//               {isSecondColumnVisible && <td></td>}
//               <td></td></tr>
//               {sortedSelectedBenefitOptions.map((option, index) => renderBenefitRow(option, index))}

//             <tr className="bg-white font-bold">
//               <td></td>
//               <td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (E)</td>
//               {isSecondColumnVisible && <td></td>}
//               <td className="font-bold text-Red  text-center text-xs sm:text-base">
//                 <div>
//                   {formatNumber(calculateSubTotalE(carCurrent, carInsuranceCurrent, carFuelCurrent, carMaintenanceCurrent, carRegRoadTaxCurrent, trackerCurrent,
//                   companyProvidedTravelingCurrent, corporateClubMembershipCurrent, clubSubscriptionCurrent, apartmentRentCurrent,
//                   hardFurnishingsCurrent, creditCardsStatutoryContributionCurrent, otherPerquisitesCurrent, securityServicesGuardsCurrent, mealSubsidyHousingLoanCurrent, entertainmentAllowanceCurrent, leaveEncashmentCurrent, homeTravelCurrent, groupLifeCurrent,hospitalizationInsuranceCurrent, medicalOpdCurrent, pensionCurrent, pfCurrent, eobiCurrent, gratuityCurrent
//                   ))}</div></td>
//                   <td className="font-bold text-Red text-center text-xs sm:text-base">
//                     <div>
//                     {formatNumber(calculateSubTotalE(carPrevious, carInsurancePrevious, carFuelPrevious, carMaintenancePrevious, carRegRoadTaxPrevious, trackerPrevious,
//                     companyProvidedTravelingPrevious, corporateClubMembershipPrevious, clubSubscriptionPrevious, apartmentRentPrevious,hardFurnishingsPrevious, creditCardsStatutoryContributionPrevious, otherPerquisitesPrevious, securityServicesGuardsPrevious,mealSubsidyHousingLoanPrevious, entertainmentAllowancePrevious, leaveEncashmentPrevious, homeTravelPrevious, groupLifePrevious,
//                     hospitalizationInsurancePrevious, medicalOpdPrevious, pensionPrevious, pfPrevious, eobiPrevious, gratuityPrevious))}
//                     </div></td></tr>
//                     <tr className="bg-gray font-bold">
//               <td></td><td className="px-4 py-2 text-center text-white text-xs sm:text-base">Total (A + B + C + D + E)</td> 
//               {isSecondColumnVisible && (<td></td>)}
//               <td className="px-4 py-2 text-center text-white text-xs sm:text-base">{formatNumber(totalABCDECurrent())}</td>
//               <td className="px-4 py-2 text-center text-white text-xs sm:text-base">{formatNumber(totalABCDEPrevious())}</td></tr>
  
//             {/* Dynamic Rows for Selected Options */}
           
//             <tr className="bg-gray2 font-bold">
//               <td></td><td className="px-4 py-2 text-center text-Blue text-xs sm:text-base">Annual Package:</td> 
//               {isSecondColumnVisible && (<td></td>)}
//               <td className="px-4 py-2 text-center text-Blue text-xs sm:text-base">{formatNumber(annualPackageCurrent)}</td>
//               <td className="px-4 py-2 text-center text-Blue text-xs sm:text-base">{formatNumber(annualPackagePrevious)}</td></tr>
  
//             {/* Subtotals and Totals */}
//             <tr className="bg-white font-bold">
//               <td></td>
//               <td className="px-4 py-2 text-center text-Red text-xs sm:text-base">Compa-Ratio:</td>
//               {isSecondColumnVisible && <td></td>}
//               <td className="px-4 py-2 text-center text-Red text-xs sm:text-base">{formatNumber(compaRatioCurrent)}%</td>
//               <td className="px-4 py-2 text-center text-Red text-xs sm:text-base">{formatNumber(compaRatioPrevious)}%</td>
//             </tr>
            
  
//             {/* Add more table rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };  

// export default FinancialOffer;  
 


// function calculateSubTotalC(arg0: { asr: number; da: number; mp: number; dsa: number; s: number; res: number; cell: number; i: number; dea: number; pa: number; }) {
//   throw new Error('Function not implemented.');
// }
// 



// import React, { useState, useEffect } from 'react';

// const FinancialOffer = () => {
// const [activeCompensation, setActiveCompensation] = useState<string | null>(null);

// const [selectedOptions, setSelectedOptions] = useState<string[]>([]);//For Basic Salary (B)
// const [selectedAllowanceOptions, setSelectedAllowanceOptions] = useState<string[]>([]);//For Allowances (C)
// const [selectedVariablepayOptions, setSelectedVariablepayOptions] = useState<string[]>([]); //For Variable Pay (D)
// const [selectedBenefitOptions, setSelectedBenefitOptions] = useState<string[]>([]); //For Benefits (E)
// const [isSecondColumnVisible, setIsSecondColumnVisible] = useState(true);  
// const [errorMessage, setErrorMessage] = useState('');

// //Compensation B (Current)                                                                                      // Compensation B (Previous)
// const [BasicSalaryCurrent, setBasicSalaryCurrent] = useState('');                                               const [BasicSalaryPrevious, setBasicSalaryPrevious] = useState('');
// const [HouseRentCurrent, setHouseRentCurrent] = useState('');                                                   const [HouseRentPrevious, setHouseRentPrevious] = useState('');
// const [UtilitiesCurrent, setUtilitiesCurrent] = useState('');                                                   const [UtilitiesPrevious, setvUtilitiesPrevious] = useState('');
// const [MedicalCurrent, setMedicalCurrentt] = useState('');                                                      const [MedicalPrevious, setvMedicalPervious] = useState('');
// const [lfaCurrent, setlfaCurrent] = useState('');                                                               const [lfaPrevious, setlfaPervious] = useState('');
// const [AdjustmentForFuelCurrent, setAdjustmentForFuelCurrent] = useState('');                                   const [AdjustmentForFuelPrevious, setAdjustmentForFuelPrevious] = useState('');
// const [RetentionAmountCurrent, setRetentionAmountCurrent] = useState('');                                       const [RetentionAmountPrevious, setRetentionAmountPrevious] = useState('');

// // Compensation C (Current)                                                                                     //Compensation C (Previous)
// const [asrCurrent, setasrCurrent]=useState('');                                                                 const [asrPrevious, setasrPrevious]=useState('');
// const [daCurrent, setdaCurrent]=useState('');                                                                   const [daPrevious, setdaPrevious]=useState('');
// const [mpCurrent, setmpCurrent]=useState('');                                                                   const [mpPrevious, setmpPrevious]=useState(''); 
// const [dsaCurrent, setdsaCurrent]=useState('');                                                                 const [dsaPrevious, setdsaPrevious]=useState('');
// const [sCurrent, setsCurrent]=useState('');                                                                     const [sPrevious, setsPrevious]=useState('');
// const [resCurrent, setresCurrent]=useState('');                                                                 const [resPrevious, setresPrevious]=useState('');
// const [cellCurrent, setcellCurrent]=useState('');                                                               const [cellPrevious, setcellPrevious]=useState('');
// const [iCurrent , setiCurrent]=useState('');                                                                    const [iPrevious, setiPrevious]=useState('');
// const [deaPrevious, setdeaPrevious]=useState('');
// const [paCurrent, setpaCurrent]=useState('');                                                                   const [paPrevious, setpaPrevious ]=useState(''); 

// //Compensation D (Current)                                                                                       //Compensation D (Previous)
                                                  
// const[vbCurrent, setvbCurrent] =useState('');                                                                   const[vbPrevious, setvbPrevious] =useState('');
// const[smCurrent, setsmCurrent] =useState('');                                                                   const[smPrevious, setsmPrevious] =useState('');

// //Compensation E (Current)                                                                                      //Compensation E (Previous)
// const[carCurrent, setcarCurrent] = useState('');                                                                  const[carPrevious, setcarPrevious] = useState('');
// const[carInsuranceCurrent, setcarInsuranceCurrent] = useState('');                                                const[carInsurancePrevious, setcarInsurancePrevious] = useState('');
// const[carFuelCurrent, setcarFuelCurrent] = useState('');                                                          const[carFuelPrevious, setcarFuelPrevious] = useState('');
// const[carMaintenanceCurrent, setcarMaintenanceCurrent] = useState('');                                            const[carMaintenancePrevious, setcarMaintenancePrevious] = useState('');
// const[carRegRoadTaxCurrent, setcarRegRoadTaxCurrent] = useState('');                                              const[carRegRoadTaxPrevious, setcarRegRoadTaxPrevious] = useState('');
// const[trackerCurrent, settrackerCurrent] = useState('');                                                          const[trackerPrevious, settrackerPrevious] = useState('');
// const[companyProvidedTravelingCurrent, setcompanyProvidedTravelingCurrent] = useState('');                        const[companyProvidedTravelingPrevious, setcompanyProvidedTravelingPrevious] = useState('');
// const[corporateClubMembershipCurrent, setcorporateClubMembershipCurrent] = useState('');                          const[corporateClubMembershipPrevious, setcorporateClubMembershipPrevious] = useState('');
// const[clubSubscriptionCurrent, setclubSubscriptionCurrent] = useState('');                                        const[clubSubscriptionPrevious, setclubSubscriptionPrevious] = useState('');
// const[apartmentRentCurrent, setapartmentRentCurrent] = useState('');                                              const[apartmentRentPrevious, setapartmentRentPrevious] = useState('');
// const[hardFurnishingsCurrent, sethardFurnishingsCurrent] = useState('');                                          const[hardFurnishingsPrevious, sethardFurnishingsPrevious] = useState('');
// const[creditCardsStatutoryContributionCurrent, setcreditCardsStatutoryContributionCurrent] = useState('');        const[creditCardsStatutoryContributionPrevious, setcreditCardsStatutoryContributionPrevious] = useState('');
// const[otherPerquisitesCurrent, setotherPerquisitesCurrent] = useState('');                                        const[otherPerquisitesPrevious, setotherPerquisitesPrevious] = useState('');
// const[securityServicesGuardsCurrent, setsecurityServicesGuardsCurrent] = useState('');                            const[securityServicesGuardsPrevious, setsecurityServicesGuardsPrevious] = useState('');        
// const[mealSubsidyHousingLoanCurrent, setmealSubsidyHousingLoanCurrent] = useState('');                            const[mealSubsidyHousingLoanPrevious, setmealSubsidyHousingLoanPrevious] = useState('');
// const[entertainmentAllowanceCurrent, setentertainmentAllowanceCurrent] = useState('');                            const[entertainmentAllowancePrevious, setentertainmentAllowancePrevious] = useState('');
// const[leaveEncashmentCurrent, setleaveEncashmentCurrent] = useState('');                                          const[leaveEncashmentPrevious, setleaveEncashmentPrevious] = useState('');
// const[homeTravelCurrent, sethomeTravelCurrent] = useState('');                                                    const[homeTravelPrevious, sethomeTravelPrevious] = useState('');
// const[groupLifeCurrent, setgroupLifeCurrent] = useState('');                                                      const[groupLifePrevious, setgroupLifePrevious] = useState('');
// const[hospitalizationInsuranceCurrent, sethospitalizationInsuranceCurrent] = useState('');                        const[hospitalizationInsurancePrevious, sethospitalizationInsurancePrevious] = useState('');
// const[medicalOpdCurrent, setmedicalOpdCurrent] = useState('');                                                    const[medicalOpdPrevious, setmedicalOpdPrevious] = useState('');
// const[pensionCurrent, setpensionCurrent] = useState('');                                                          const[pensionPrevious, setpensionPrevious] = useState('');
// const[pfCurrent, setpfCurrent] = useState('');                                                                    const[pfPrevious, setpfPrevious] = useState('');
// const[eobiCurrent, seteobiCurrent] = useState('');                                                                const[eobiPrevious, seteobiPrevious] = useState('');
// const[gratuityCurrent, setgratuityCurrent] = useState('');                                                        const[gratuityPrevious, setgratuityPrevious] = useState('');

// const [annualPackageCurrent, setAnnualPackageCurrent] = useState(0);                                            const [annualPackagePrevious, setAnnualPackagePrevious] = useState(0);
// const [compaRatioCurrent, setCompaRatioCurrent] = useState(0);                                                  const [compaRatioPrevious, setCompaRatioPrevious] = useState(0);

// //DropDown For Third Column
// const toggleSecondColumn = () => {  
//   setIsSecondColumnVisible(prevState => !prevState);  
// };  
// //Compensation B (Options:)
// const optionOrder = 
// ['Enter Basic Salary','House Rent (% of basic)','Utilities (% of basic)','Medical (% of basic)','LFA (% of basic)','Adjustment for Fuel','Other Amount'
// ];

// //Compensation C (Options:)
// const optionOrder2 = 
// ['Allowance in lieu of second Car', 'Disturbance Allowance', 'Market Premium', 'Driver Salary (Allowance)', 'Servant', 'Tel (res)', 'Tel (cell)', 'Internet', 'Dearness Allowance', 'Project Allowance'    
// ];

// //Compensation D (Options:)
// const optionOrder3 = 
// ['Variable Bonus','Special Milestone'
// ];

// //Compensation E (Options:)
// const optionOrder4 = 
// ['Car', 'Car Insurance', 'Car Fuel', 'Car Maintenance', 'Car Reg / Road Tax', 'Tracker', 'Company Provided Traveling', 'Corporate Club Membership', 'Club Subscription',
// 'Apartment Rent', 'Hard Furnishings', 'Credit Cards / Statutory Contribution', 'Other Perquisites', 'Security Services / Guards', 'Meal Subsidy / Housing Loan', 'Entertainment Allowance', 'Leave Encashment',
// 'Home Travel', 'Group Life', 'Hospitalization Insurance (self, wife, children)', 'Medical (OPD)','Pension', 'PF', 'EOBI', 'Gratuity'  
// ];

// // Sort selected options based on the order of optionOrder array(Compensation B)
// const sortedSelectedOptions= [...selectedOptions].sort(
//   (a, b) => optionOrder.indexOf(a) - optionOrder.indexOf(b)
// );

// // Sort selected options based on the order of optionOrder1 array(Compensation C)
// const sortedSelectedAllowanceOptions= selectedAllowanceOptions.sort(
//   (a, b) => optionOrder2.indexOf(a) - optionOrder2.indexOf(b)
// );
 
// // Sort selected options based on the order of optionOrder3 array(Compensation D)
// const sortedSelectedVariablepayOptions= selectedVariablepayOptions.sort(
//   (a, b) => optionOrder3.indexOf(a) - optionOrder3.indexOf(b)
// );

// // Sort selected options based on the order of optionOrder4 array(Compensation E)
// const sortedSelectedBenefitOptions= selectedBenefitOptions.sort(
//   (a, b) => optionOrder4.indexOf(a) - optionOrder4.indexOf(b)
// );
 
// const toggleOptions = (compensation: string): void => {
//   setActiveCompensation(activeCompensation === compensation ? null : compensation);
// };

// // <--->Basic Salary(B)
// interface OptionChangeHandlerProps {
//   option: string;
// }

// interface DependentOptions {
//   [key: string]: string[];
// }

// const handleOptionChange = ({ option }: OptionChangeHandlerProps): void => {
//   // List of dependent options
//   const dependentOptions: DependentOptions = {
//     'Enter Basic Salary': ['House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)', 'LFA (% of basic)']
//   };

//   if (selectedOptions.includes(option)) {
//     // If "Enter Basic Salary" is being unchecked, remove it and its dependent options
//     if (option === 'Enter Basic Salary') {
//       setSelectedOptions(selectedOptions.filter(item => item !== option && !dependentOptions['Enter Basic Salary'].includes(item)));
//     } else {
//       // Otherwise, just remove the selected option
//       setSelectedOptions(selectedOptions.filter(item => item !== option));
//     }
//   } else {
//     // If dependent option is selected without "Enter Basic Salary", show error message
//     if (dependentOptions['Enter Basic Salary'].includes(option) && !selectedOptions.includes('Enter Basic Salary')) {
//       setErrorMessage('To calculate this, click also "Enter Basic Salary".');
//       return;
//     }

//     // Add the selected option
//     setSelectedOptions([...selectedOptions, option]);
//     setErrorMessage(''); // Clear error message if Basic Salary is selected
//   }
// };

// // <--->Allowances (C)
// interface HandleOptionChangeProps {
//   option: string;
// }

// const handleAllowanceOptionChange = ({ option }: HandleOptionChangeProps): void => {
//   if (selectedAllowanceOptions.includes(option)) {
//     setSelectedAllowanceOptions(selectedAllowanceOptions.filter(item => item !== option));
//   } else {
//     setSelectedAllowanceOptions([...selectedAllowanceOptions, option]);
//   }
// };

// // <--->Variable Pay (D)
// interface HandleVariablepayOptionChangeProps {
//   option: string;
// }

// const handleVariablepayOptionChange = ({ option }: HandleVariablepayOptionChangeProps): void => {
//   if (selectedVariablepayOptions.includes(option)) {
//     setSelectedVariablepayOptions(selectedVariablepayOptions.filter(item => item !== option));
//   } else {
//     setSelectedVariablepayOptions([...selectedVariablepayOptions, option]);
//   }
// };

// // <--->Benefits (E)
// interface HandleBenefitOptionChangeProps {
//   option: string;
// }

// const handleBenefitOptionChange = ({ option }: HandleBenefitOptionChangeProps): void => {
//   if (selectedBenefitOptions.includes(option)) {
//     setSelectedBenefitOptions(selectedBenefitOptions.filter(item => item !== option));
//   } else {
//     setSelectedBenefitOptions([...selectedBenefitOptions, option]);
//   }
// };

// // Ensure these functions are defined somewhere in your code
// const roundNumber = (num: number): number => Math.round(num);
// const formatNumber = (num: number | undefined | null): string => {
//   if (num === undefined || num === null || isNaN(num)) {
//     return '0';
//   }
//   return num.toLocaleString();
// };


// // Calculate the values based on percentages
// interface CalculateValueProps {
//   percentage: number;
//   salary: number;
// }

// const calculateValue = ({ percentage, salary }: CalculateValueProps): number => {
//   return salary ? Math.round(salary * (percentage / 100)) : 0;
// };

// // Calculate SUB-TOTAL (B):
// interface SubTotalBProps {
//   salary: number;
//   houseRent: number;
//   utilities: number;
//   medical: number;
//   lfa: number;
//   adjustmentForFuel: number;
//   retentionAmount: number;
// }

// const calculateSubTotalB = (salary: number, houseRent: number, utilities: number, medical: number, lfa: number, adjustmentForFuel: number, retentionAmount: number): number => {
//   return (
//     calculateValue({ percentage: houseRent, salary }) + 
//     calculateValue({ percentage: utilities, salary }) + 
//     calculateValue({ percentage: medical, salary }) + 
//     calculateValue({ percentage: lfa, salary }) + 
//     (adjustmentForFuel || 0) + 
//     (retentionAmount || 0)
//   );
// };
    
//   // Calculate Total (A + B): FOR CURRENT COMPANY
//   const totalABCurrent = () => {
//   const subtotalB = calculateSubTotalB(
//     parseFloat(BasicSalaryCurrent) || 0,
//     parseFloat(HouseRentCurrent) || 0,
//     parseFloat(UtilitiesCurrent) || 0,
//     parseFloat(MedicalCurrent) || 0,
//     parseFloat(lfaCurrent) || 0,
//     parseFloat(AdjustmentForFuelCurrent) || 0,
//     parseFloat(RetentionAmountCurrent) || 0
//   );
//   const subtotalBPrevious = calculateSubTotalB(
//     parseFloat(BasicSalaryPrevious) || 0,
//     parseFloat(HouseRentPrevious) || 0,
//     parseFloat(UtilitiesPrevious) || 0,
//     parseFloat(MedicalPrevious) || 0,
//     parseFloat(lfaPrevious) || 0,
//     parseFloat(AdjustmentForFuelPrevious) || 0,
//     parseFloat(RetentionAmountPrevious) || 0
//   );
//   const totalABPrevious = () => {
//   const subtotalBPrevious = calculateSubTotalB
//   (
//    parseFloat(BasicSalaryPrevious) || 0, parseFloat(HouseRentPrevious) || 0, parseFloat(UtilitiesPrevious) || 0, parseFloat(MedicalPrevious) || 0, parseFloat(lfaPrevious) || 0, parseFloat(AdjustmentForFuelPrevious) || 0, parseFloat(RetentionAmountPrevious) || 0
//   );
//     return (parseFloat(BasicSalaryPrevious) || 0) + subtotalBPrevious;
//   };
  
// // Calculate SUB-TOTAL (C):
// interface SubTotalCProps {
//   asr: number;
//   da: number;
//   mp: number;
//   dsa: number;
//   s: number;
//   res: number;
//   cell: number;
//   i: number;
//   dea: number;
//   pa: number;
// }

// const calculateSubTotalC = ({ asr, da, mp, dsa, s, res, cell, i, dea, pa }: SubTotalCProps): number => {
//   return (
//     (asr || 0) + (da || 0) + (mp || 0) + (dsa || 0) + (s || 0) + (res || 0) + (cell || 0) + (i || 0) + (dea || 0) + (pa || 0)
//   );
// };
  
//   // Calculate Total A + B + C //: FOR CURRENT COMPANY
//   // totalABCCurrent -> TOTAL ( A + B + C)
  
//   const totalABCCurrent = () => {
//   //1. 
//   const subtotalB = calculateSubTotalB //BASIC SALARY (B): FOR CURRENT COMPANY
//   (
//     parseFloat(BasicSalaryCurrent), parseFloat(HouseRentCurrent), parseFloat(UtilitiesCurrent), parseFloat(MedicalCurrent), parseFloat(lfaCurrent), parseFloat(AdjustmentForFuelCurrent), parseFloat(RetentionAmountCurrent)
//   );
    
//   //2.
//   const subtotalC = calculateSubTotalC //ALLOWANCES (C): FOR CURRENT COMPANY
//   (
//     { asr: asrCurrent, da: daCurrent, mp: mpCurrent, dsa: dsaCurrent, s: sCurrent, res: resCurrent, cell: cellCurrent, i: iCurrent, dea: daCurrent, pa: paCurrent }
//   );
    
//     return parseFloat(BasicSalaryCurrent) + subtotalB + subtotalC;
//   };
  
//   // Calculate Total (A + B + C) : FOR PREVIOUS COMPANY
//   // totalABCPrevious -> TOTAL ( A + B + C)
  
//   const totalABCPrevious = () => {
//   //1.
//   const subtotalB = calculateSubTotalB //BASIC SALARY (B): FOR PREVIOUS COMPANY
//   (
//     parseFloat(BasicSalaryPrevious), HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
//   );
  
//   //2.
//   const subtotalC = calculateSubTotalC //ALLOWANCES (C): FOR PREVIOUS COMPANY
//   (
//     { asr: asrPrevious, da: daPrevious, mp: mpPrevious, dsa: dsaPrevious, s: sPrevious, res: resPrevious, cell: cellPrevious, i: iPrevious, dea: daPrevious, pa: paPrevious }
//   );
    
//     return parseFloat(BasicSalaryPrevious) + subtotalB + subtotalC;
//   };
  
//   // SUB-TOTAL (D):
//   const calculateSubTotalD = (vb, sm) => {
//     return( 
//     (vb || 0) + (sm || 0)
//   );
//   };
  
//   // Calculate Total (A + B + C + D) : FOR CURRENT COMPANY
//   const totalABCDCurrent = () => {
//     return totalABCCurrent() + calculateSubTotalD(vbCurrent, smCurrent);
//   };
  
//   // Calculate Total (A + B + C + D) : FOR PREVIOUS COMPANY
  
//   const totalABCDPrevious = () => {
//     return totalABCPrevious() + calculateSubTotalD(vbPrevious, smPrevious);
//   };
  
//   // SUB-TOTAL (E):
//   const calculateSubTotalE = 
//   (
//   car, carInsurance, carFuel, carMaintenance, carRegRoadTax, tracker,
//   companyProvidedTraveling, corporateClubMembership, clubSubscription, apartmentRent,
//   hardFurnishings, creditCardsStatutoryContribution, otherPerquisites, securityServicesGuards,
//   mealSubsidyHousingLoan, entertainmentAllowance, leaveEncashment,
//   homeTravel, groupLife, hospitalizationInsurance, medicalOpd, pension, pf, eobi, gratuity ) => {
    
//   return (
//     (car || 0) + (carInsurance || 0) + (carFuel || 0) + (carMaintenance || 0) + (carRegRoadTax || 0) + (tracker || 0) +
//     (companyProvidedTraveling || 0) +  (corporateClubMembership || 0) +  (clubSubscription || 0) + (apartmentRent || 0) + 
//     (hardFurnishings || 0) + (creditCardsStatutoryContribution || 0) + (otherPerquisites || 0) + (securityServicesGuards || 0) +
//     (mealSubsidyHousingLoan || 0) + (entertainmentAllowance || 0) + (leaveEncashment || 0) + (homeTravel || 0) + (groupLife || 0) +
//     (hospitalizationInsurance || 0) + (medicalOpd || 0) + (pension || 0) + (pf || 0) + (eobi || 0) + (gratuity || 0)
//   );
//   };
  
//   // Calculate Total (A + B + C + D + E) : FOR CURRENT COMPANY
//   const totalABCDECurrent = () => {
    
//   //1.
//   const subtotalA = parseFloat(BasicSalaryCurrent);
  
//   //2.
//   const subtotalB = calculateSubTotalB
//   (
//     BasicSalaryCurrent, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent
//   );
  
//   //3.  
//   const subtotalC = calculateSubTotalC
//   (
//     asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent
//   );
    
//   //4.
//   const subtotalD = calculateSubTotalD
//   (
//     vbCurrent, smCurrent
//   );
    
//   //5.
//   const subtotalE = calculateSubTotalE
//   (
//     carCurrent, carInsuranceCurrent, carFuelCurrent, carMaintenanceCurrent, carRegRoadTaxCurrent, trackerCurrent,
//     companyProvidedTravelingCurrent, corporateClubMembershipCurrent, clubSubscriptionCurrent, apartmentRentCurrent, 
//     hardFurnishingsCurrent, creditCardsStatutoryContributionCurrent, otherPerquisitesCurrent, securityServicesGuardsCurrent, 
//     mealSubsidyHousingLoanCurrent, entertainmentAllowanceCurrent, leaveEncashmentCurrent, homeTravelCurrent, groupLifeCurrent, 
//     hospitalizationInsuranceCurrent, medicalOpdCurrent, pensionCurrent, pfCurrent, eobiCurrent, gratuityCurrent
//   );
//     return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
//   };
  
//   // Calculate Total (A + B + C + D + E) : FOR PREVIOUS COMPANY
//   const totalABCDEPrevious = () => {
  
//   //1.
//   const subtotalA = parseFloat(BasicSalaryPrevious); 
  
//   //2.
//   const subtotalB = calculateSubTotalB
//   (
//    BasicSalaryPrevious, HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
//   );
  
//   //3.
//   const subtotalC = calculateSubTotalC
//   (
//    asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious
//   );
  
//   //4.
//   const subtotalD = calculateSubTotalD
//   (
//     vbPrevious, smPrevious
//   );
  
//   //5.
//   const subtotalE = calculateSubTotalE
//   (
//     carPrevious, carInsurancePrevious, carFuelPrevious, carMaintenancePrevious, carRegRoadTaxPrevious, trackerPrevious,
//     companyProvidedTravelingPrevious, corporateClubMembershipPrevious, clubSubscriptionPrevious, apartmentRentPrevious, 
//     hardFurnishingsPrevious, creditCardsStatutoryContributionPrevious, otherPerquisitesPrevious, securityServicesGuardsPrevious, 
//     mealSubsidyHousingLoanPrevious, entertainmentAllowancePrevious, leaveEncashmentPrevious, homeTravelPrevious, groupLifePrevious, 
//     hospitalizationInsurancePrevious, medicalOpdPrevious, pensionPrevious, pfPrevious, eobiPrevious, gratuityPrevious
//   );
//     return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
//   };

//   useEffect(() => {
//     const newAnnualPackageCurrent = roundNumber(totalABCDECurrent() * 12);
//     const newAnnualPackagePrevious = roundNumber(totalABCDEPrevious() * 12);
//     const newCompaRatioCurrent = roundNumber((totalABCDECurrent() / 177746) * 100);
//     const newCompaRatioPrevious = roundNumber((totalABCDEPrevious() / 177746) * 100);
  
//     setAnnualPackageCurrent(newAnnualPackageCurrent);
//     setAnnualPackagePrevious(newAnnualPackagePrevious);
//     setCompaRatioCurrent(newCompaRatioCurrent);
//     setCompaRatioPrevious(newCompaRatioPrevious);
//   }, [totalABCDECurrent, totalABCDEPrevious]); // ✅ Correct use of useEffect()
  
   
// const renderOptionRow = (option, index) => {
//   let row: JSX.Element | null = null; // Explicitly declare row as JSX.Element or null
  
// switch (option) {

// case 'Enter Basic Salary':
// row = (
// <tr key={index}>
// <td>1</td><td>Basic Salary</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={BasicSalaryCurrent} onChange={(e) => setBasicSalaryCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={BasicSalaryPrevious} onChange={(e) => setBasicSalaryPrevious(e.target.value)}/>
// </td>
// )}
          
// <td><div className="centered">{formatNumber(BasicSalaryCurrent)}</div></td>
// <td><div className="centered">{formatNumber(BasicSalaryPrevious)}</div></td></tr>
// );break;

// case 'House Rent (% of basic)':
// row = (
// <tr key={index}>
// <td>2</td><td>House Rent (% of basic)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Percentage" value={HouseRentCurrent} onChange={(e) => setHouseRentCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Percentage" value={HouseRentPrevious} onChange={(e) => setHouseRentPrevious(e.target.value) }/>
// </td>
// )}
          
// <td><div className="centered">{formatNumber(calculateValue(HouseRentCurrent, BasicSalaryCurrent))}</div></td>
// <td><div className="centered">{formatNumber(calculateValue(HouseRentPrevious, BasicSalaryPrevious))}</div></td>
// </tr>
// );break;

// case 'Utilities (% of basic)':
// row = (
// <tr key={index}>
// <td>3</td><td>Utilities (% of basic)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Percentage" value={UtilitiesCurrent} onChange={(e) => setUtilitiesCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Percentage" value={UtilitiesPrevious} onChange={(e) => setvUtilitiesPrevious(e.target.value)}/>
// </td>
// )}
          
// <td><div className="centered">{formatNumber(calculateValue(UtilitiesCurrent, BasicSalaryCurrent))}</div></td>
// <td><div className="centered">{formatNumber(calculateValue(UtilitiesPrevious, BasicSalaryPrevious))}</div></td>
// </tr>
// );break;

// case 'Medical (% of basic)':
// row = (
// <tr key={index}>
// <td>4</td><td>Medical (% of basic)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Percentage" value={MedicalCurrent} onChange={(e) => setMedicalCurrentt(e.target.value) }/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Percentage" value={MedicalPrevious} onChange={(e) => setvMedicalPervious(e.target.value) }/>
// </td>
// )}
          
// <td><div className="centered">{formatNumber(calculateValue(MedicalCurrent, BasicSalaryCurrent))}</div></td>
// <td><div className="centered">{formatNumber(calculateValue(MedicalPrevious, BasicSalaryPrevious))}</div></td>
// </tr>
// );
// break;

// case 'LFA (% of basic)':
// row = (
// <tr key={index}>
// <td>5</td><td>LFA (% of basic)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Percentage" value={lfaCurrent} onChange={(e) => setlfaCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Percentage" value={lfaPrevious} onChange={(e) => setlfaPervious(e.target.value)}/>
// </td>
// )}
          
// <td><div className="centered">{formatNumber(calculateValue(lfaCurrent, BasicSalaryCurrent))}</div></td>
// <td><div className="centered">{formatNumber(calculateValue(lfaPrevious, BasicSalaryPrevious))}</div></td>
// </tr>
// );break;
  
// case 'Adjustment for Fuel':
// row = (
// <tr key={index}>
// <td>6</td><td>Adjustment for Fuel</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={AdjustmentForFuelCurrent} onChange={(e) => setAdjustmentForFuelCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={AdjustmentForFuelPrevious} onChange={(e) => setAdjustmentForFuelPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(AdjustmentForFuelCurrent)}</div></td>
// <td><div className="centered">{formatNumber(AdjustmentForFuelPrevious)}</div></td>
// </tr>
// ); break;

// case 'Other Amount':
// row = (
// <tr key={index}>
// <td>7</td><td>Other Amount (Retention Amount)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={RetentionAmountCurrent} onChange={(e) => setRetentionAmountCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={RetentionAmountPrevious} onChange={(e) => setRetentionAmountPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(RetentionAmountCurrent)}</div></td>
// <td><div className="centered">{formatNumber(RetentionAmountPrevious)}</div></td>
// </tr>
// );break;

// default: break;
// }

// return row;
// };

// const renderAllowanceRow = (option, index) => {
//   let row: React.JSX.Element | null = null;

// switch (option) {
// case 'Allowance in lieu of second Car':
// row = (
// <tr key={index}>
// <td>1</td><td>Allowance in lieu of second Car</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={asrCurrent} onChange={(e) => setasrCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={asrPrevious} onChange={(e) => setasrPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(asrCurrent)}</div></td>
// <td><div className="centered">{formatNumber(asrPrevious)}</div></td>
// </tr>
// );break;

// case 'Disturbance Allowance':
// row = (
// <tr key={index}>
// <td>2</td><td>Disturbance Allowance</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={daCurrent} onChange={(e) => setdaCurrent(e.target.value) }/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={daPrevious} onChange={(e) => setdaPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(daCurrent)}</div></td>
// <td><div className="centered">{formatNumber(daPrevious)}</div></td>
// </tr>
// );break;

// case 'Market Premium':
// row = (
// <tr key={index}>
// <td>3</td><td>Market Premium</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={mpCurrent} onChange={(e) => setmpCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={mpPrevious} onChange={(e) => setmpPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(mpCurrent)}</div></td>
// <td><div className="centered">{formatNumber(mpPrevious)}</div></td>
// </tr>
// );break;

// case 'Driver Salary (Allowance)':
// row = (
// <tr key={index}>
// <td>4</td><td>Driver Salary (Allowance)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={dsaCurrent} onChange={(e) => setdsaCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={dsaPrevious} onChange={(e) => setdsaPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(dsaCurrent)}</div></td>
// <td><div className="centered">{formatNumber(dsaPrevious)}</div></td>
// </tr>
// );break;


// case 'Servant':
// row = (
// <tr key={index}>
// <td>5</td><td>Servant</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={sCurrent} onChange={(e) => setsCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={sPrevious} onChange={(e) => setsPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(sCurrent)}</div></td>
// <td><div className="centered">{formatNumber(sPrevious)}</div></td>
// </tr>
// );break;

// case 'Tel (res)':
// row = (
// <tr key={index}>
// <td>6</td><td>Tel (res)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={resCurrent} onChange={(e) => setresCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={resPrevious} onChange={(e) => setresPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(resCurrent)}</div></td>
// <td><div className="centered">{formatNumber(resPrevious)}</div></td>
// </tr>
// );break;

// case 'Tel (cell)':
// row = (
// <tr key={index}>
// <td>7</td><td>Tel (cell)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={cellCurrent} onChange={(e) => setcellCurrent(e.target.value)}/>
// <div className="guidance-text">Previous</div>
// <input type="number" placeholder="Enter Amount" value={cellPrevious} onChange={(e) => setcellPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(cellCurrent)}</div></td>
// <td><div className="centered">{formatNumber(cellPrevious)}</div></td>
// </tr>
// );break;

 
// case 'Internet':
// row = (
// <tr key={index}>
// <td>8</td><td>Internet</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={iCurrent} onChange={(e) => setiCurrent(e.target.value) }/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={iPrevious} onChange={(e) => setiPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(iCurrent)}</div></td>
// <td><div className="centered">{formatNumber(iPrevious)}</div></td>
// </tr>
// );break;

// case 'Dearness Allowance':
// row = (
// <tr key={index}>
// <td>9</td><td>Dearness Allowance</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={daCurrent} onChange={(e) => setdaCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={deaPrevious} onChange={(e) => setdeaPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(daCurrent)}</div></td>
// <td><div className="centered">{formatNumber(deaPrevious)}</div></td>
// </tr>
// );break;

// case 'Project Allowance':
// row = (
// <tr key={index}>
// <td>10</td><td>Project Allowance</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={paCurrent} onChange={(e) => setpaCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={paPrevious} onChange={(e) => setpaPrevious(e.target.value)}/>
// </td>
// )}
        
// <td><div className="centered">{formatNumber(paCurrent)}</div></td>
// <td><div className="centered">{formatNumber(paPrevious)}</div></td>
// </tr>
// );break; default:

// }
// return row;
// };

// const renderVariablepayRow = (option, index) => {
//   let row: JSX.Element | null = null;
  
// switch (option) {
// case 'Variable Bonus':          
// row = (
// <tr key={index}>
// <td>1</td><td>Variable Bonus</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={vbCurrent} onChange={(e) => setvbCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={vbPrevious} onChange={(e) => setvbPrevious(e.target.value)}/>
// </td>
// )}
          
// <td><div className="centered">{formatNumber(vbCurrent)}</div></td>
// <td><div className="centered">{formatNumber(vbPrevious)}</div></td>
// </tr>
// );break;
  
// case 'Special Milestone':
// row = (
// <tr key={index}>
// <td>2</td><td>Special Milestone</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={smCurrent} onChange={(e) => setsmCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={smPrevious} onChange={(e) => setsmPrevious(e.target.value)}/>
// </td>
// )}
          
// <td><div className="centered">{formatNumber(smCurrent)}</div></td>
// <td><div className="centered">{formatNumber(smPrevious)}</div></td>
// </tr>
// );break; default:
  
// }
// return row;
// };


// const renderBenefitRow = (option, index) => {
//   let row: JSX.Element | null = null;
    
// switch (option) {
// case 'Car':          
// row = (
// <tr key={index}>
// <td>1</td><td>Car</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={carCurrent} onChange={(e) => setcarCurrent (e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={carPrevious} onChange={(e) => setcarPrevious (e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(carCurrent)}</div></td>
// <td><div className="centered">{formatNumber(carPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Car Insurance':
// row = (
// <tr key={index}>
// <td>2</td><td>Car Insurance</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={carInsuranceCurrent} onChange={(e) => setcarInsuranceCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={carInsurancePrevious} onChange={(e) => setcarInsurancePrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(carInsuranceCurrent)}</div></td>
// <td><div className="centered">{formatNumber(carInsurancePrevious)}</div></td>
// </tr>
// );break;

// case 'Car Fuel':          
// row = (
// <tr key={index}>
// <td>3</td><td>Car Fuel</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={carFuelCurrent} onChange={(e) => setcarFuelCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={carFuelPrevious} onChange={(e) => setcarFuelPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(carFuelCurrent)}</div></td>
// <td><div className="centered">{formatNumber(carFuelPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Car Maintenance':
// row = (
// <tr key={index}>
// <td>4</td><td>Car Maintenance</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={carMaintenanceCurrent} onChange={(e) => setcarMaintenanceCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={carMaintenancePrevious} onChange={(e) => setcarMaintenancePrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(carMaintenanceCurrent)}</div></td>
// <td><div className="centered">{formatNumber(carMaintenancePrevious)}</div></td>
// </tr>
// );break;

// case 'Car Reg / Road Tax':          
// row = (
// <tr key={index}>
// <td>5</td><td>Car Reg / Road Tax</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={carRegRoadTaxCurrent} onChange={(e) => setcarRegRoadTaxCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={carRegRoadTaxPrevious} onChange={(e) => setcarRegRoadTaxPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(carRegRoadTaxCurrent)}</div></td>
// <td><div className="centered">{formatNumber(carRegRoadTaxPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Tracker':
// row = (
// <tr key={index}>
// <td>6</td><td>Tracker</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={trackerCurrent} onChange={(e) => settrackerCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={trackerPrevious} onChange={(e) => settrackerPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(trackerCurrent)}</div></td>
// <td><div className="centered">{formatNumber(trackerPrevious)}</div></td>
// </tr>
// );break;

// case 'Company Provided Traveling':          
// row = (
// <tr key={index}>
// <td>7</td><td>Company Provided Traveling</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={companyProvidedTravelingCurrent} onChange={(e) => setcompanyProvidedTravelingCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={companyProvidedTravelingPrevious} onChange={(e) => setcompanyProvidedTravelingPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(companyProvidedTravelingCurrent)}</div></td>
// <td><div className="centered">{formatNumber(companyProvidedTravelingPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Corporate Club Membership':
// row = (
// <tr key={index}>
// <td>8</td><td>Corporate Club Membership</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={corporateClubMembershipCurrent} onChange={(e) => setcorporateClubMembershipCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={corporateClubMembershipPrevious} onChange={(e) => setcorporateClubMembershipPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(corporateClubMembershipCurrent)}</div></td>
// <td><div className="centered">{formatNumber(corporateClubMembershipPrevious)}</div></td>
// </tr>
// );break;

// case 'Club Subscription':          
// row = (
// <tr key={index}>
// <td>9</td><td>Club Subscription</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={clubSubscriptionCurrent} onChange={(e) => setclubSubscriptionCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={clubSubscriptionPrevious} onChange={(e) => setclubSubscriptionPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(clubSubscriptionCurrent)}</div></td>
// <td><div className="centered">{formatNumber(clubSubscriptionPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Apartment Rent':
// row = (
// <tr key={index}>
// <td>10</td><td>Apartment Rent</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={apartmentRentCurrent} onChange={(e) => setapartmentRentCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={apartmentRentPrevious} onChange={(e) => setapartmentRentPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(apartmentRentCurrent)}</div></td>
// <td><div className="centered">{formatNumber(apartmentRentPrevious)}</div></td>
// </tr>
// );break;

// case 'Hard Furnishings':          
// row = (
// <tr key={index}>
// <td>11</td><td>Hard Furnishings</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={hardFurnishingsCurrent} onChange={(e) => sethardFurnishingsCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={hardFurnishingsPrevious} onChange={(e) => sethardFurnishingsPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(hardFurnishingsCurrent)}</div></td>
// <td><div className="centered">{formatNumber(hardFurnishingsPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Credit Cards / Statutory Contribution':
// row = (
// <tr key={index}>
// <td>12</td><td>Credit Cards / Statutory Contribution</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={creditCardsStatutoryContributionCurrent} onChange={(e) => setcreditCardsStatutoryContributionCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={creditCardsStatutoryContributionPrevious} onChange={(e) => setcreditCardsStatutoryContributionPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(creditCardsStatutoryContributionCurrent)}</div></td>
// <td><div className="centered">{formatNumber(creditCardsStatutoryContributionPrevious)}</div></td>
// </tr>
// );break;

// case 'Other Perquisites':          
// row = (
// <tr key={index}>
// <td>13</td><td>Other Perquisites</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={otherPerquisitesCurrent} onChange={(e) => setotherPerquisitesCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={otherPerquisitesPrevious} onChange={(e) => setotherPerquisitesPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(otherPerquisitesCurrent)}</div></td>
// <td><div className="centered">{formatNumber(otherPerquisitesPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Security Services / Guards':
// row = (
// <tr key={index}>
// <td>14</td><td>Security Services / Guards</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={securityServicesGuardsCurrent} onChange={(e) => setsecurityServicesGuardsCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={securityServicesGuardsPrevious} onChange={(e) => setsecurityServicesGuardsPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(securityServicesGuardsCurrent)}</div></td>
// <td><div className="centered">{formatNumber(securityServicesGuardsPrevious)}</div></td>
// </tr>
// );break;

// case 'Meal Subsidy / Housing Loan':          
// row = (
// <tr key={index}>
// <td>15</td><td>Meal Subsidy / Housing Loan</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={mealSubsidyHousingLoanCurrent} onChange={(e) => setmealSubsidyHousingLoanCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={mealSubsidyHousingLoanPrevious} onChange={(e) => setmealSubsidyHousingLoanPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(mealSubsidyHousingLoanCurrent)}</div></td>
// <td><div className="centered">{formatNumber(mealSubsidyHousingLoanPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Entertainment Allowance':
// row = (
// <tr key={index}>
// <td>16</td><td>Entertainment Allowance</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={entertainmentAllowanceCurrent} onChange={(e) => setentertainmentAllowanceCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={entertainmentAllowancePrevious} onChange={(e) => setentertainmentAllowancePrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(entertainmentAllowanceCurrent)}</div></td>
// <td><div className="centered">{formatNumber(entertainmentAllowancePrevious)}</div></td>
// </tr>
// );break;

// case 'Leave Encashment':          
// row = (
// <tr key={index}>
// <td>17</td><td>Leave Encashment</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={leaveEncashmentCurrent} onChange={(e) => setleaveEncashmentCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={leaveEncashmentPrevious} onChange={(e) => setleaveEncashmentPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(leaveEncashmentCurrent)}</div></td>
// <td><div className="centered">{formatNumber(leaveEncashmentPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Home Travel':
// row = (
// <tr key={index}>
// <td>18</td><td>Home Travel</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={homeTravelCurrent} onChange={(e) => sethomeTravelCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={homeTravelPrevious} onChange={(e) => sethomeTravelPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(homeTravelCurrent)}</div></td>
// <td><div className="centered">{formatNumber(homeTravelPrevious)}</div></td>
// </tr>
// );break;

// case 'Group Life':          
// row = (
// <tr key={index}>
// <td>19</td><td>Group Life</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={groupLifeCurrent} onChange={(e) => setgroupLifeCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={groupLifePrevious} onChange={(e) => setgroupLifePrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(groupLifeCurrent)}</div></td>
// <td><div className="centered">{formatNumber(groupLifePrevious)}</div></td>
// </tr>
// );break;
    
// case 'Hospitalization Insurance (self, wife, children)':
// row = (
// <tr key={index}>
// <td>20</td><td>Hospitalization Insurance (self, wife, children)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={hospitalizationInsuranceCurrent} onChange={(e) => sethospitalizationInsuranceCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={hospitalizationInsurancePrevious} onChange={(e) => sethospitalizationInsurancePrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(hospitalizationInsuranceCurrent)}</div></td>
// <td><div className="centered">{formatNumber(hospitalizationInsurancePrevious)}</div></td>
// </tr>
// );break;

// case 'Medical (OPD)':          
// row = (
// <tr key={index}>
// <td>21</td><td>Medical (OPD)</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={medicalOpdCurrent} onChange={(e) => setmedicalOpdCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={medicalOpdPrevious} onChange={(e) => setmedicalOpdPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(medicalOpdCurrent)}</div></td>
// <td><div className="centered">{formatNumber(medicalOpdPrevious)}</div></td>
// </tr>
// );break;
    
// case 'Pension':
// row = (
// <tr key={index}>
// <td>22</td><td>Pension</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={pensionCurrent} onChange={(e) => setpensionCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={pensionPrevious} onChange={(e) => setpensionPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(pensionCurrent)}</div></td>
// <td><div className="centered">{formatNumber(pensionPrevious)}</div></td>
// </tr>
// );break;

// case 'PF':          
// row = (
// <tr key={index}>
// <td>23</td><td>PF</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={pfCurrent} onChange={(e) => setpfCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={pfPrevious} onChange={(e) => setpfPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(pfCurrent)}</div></td>
// <td><div className="centered">{formatNumber(pfPrevious)}</div></td>
// </tr>
// );break;
    
// case 'EOBI':
// row = (
// <tr key={index}>
// <td>24</td><td>EOBI</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={eobiCurrent} onChange={(e) => seteobiCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={eobiPrevious} onChange={(e) => seteobiPrevious(e.target.value)}/>
// </td>
// )}
            
// <td><div className="centered">{formatNumber(eobiCurrent)}</div></td>
// <td><div className="centered">{formatNumber(eobiPrevious)}</div></td>
// </tr>
// );break;

// case 'Gratuity':
// row = (
// <tr key={index}>
// <td>25</td><td>Gratuity</td>
// {isSecondColumnVisible && (<td className="centered">
// <div className="guidance-text">Current</div>
// <input type="number"placeholder="Enter Amount" value={gratuityCurrent} onChange={(e) => setgratuityCurrent(e.target.value)}/>
// <div className="guidance-text">Offer</div>
// <input type="number" placeholder="Enter Amount" value={gratuityPrevious} onChange={(e) => setgratuityPrevious(e.target.value)}/>
// </td>
// )}
              
// <td><div className="centered">{formatNumber(gratuityCurrent)}</div></td>
// <td><div className="centered">{formatNumber(gratuityPrevious)}</div></td>
// </tr>
// );break; default:
    
// }
// return row;
// };

// return(
// <div className="financial-offer-container">

// <h1 className="heading">Financial Offer Calculator</h1>
// <h3 className='bold-black centered'>Here You Can enter your custom ones..</h3>

// <div>  
// <button onClick={toggleSecondColumn}>Custom</button>  
// </div> 

// <div className="compensation-buttons">
// <button className="compensation-button" onClick={() => toggleOptions('Basic Salary')}>Basic Salary:</button>
// <button className="compensation-button" onClick={() => toggleOptions('Allowance')}>Allowance:</button>
// <button className="compensation-button" onClick={() => toggleOptions('Variable Pay')}>Variable Pay:</button>
// <button className="compensation-button" onClick={() => toggleOptions('Benefits')}>Benefit:</button>
// </div>

// {activeCompensation === 'Basic Salary' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" checked={selectedOptions.includes('Enter Basic Salary')} onChange={() => handleOptionChange('Enter Basic Salary')} />Enter Basic Salary</label></li>
// <li><label><input type="checkbox" checked={selectedOptions.includes('House Rent (% of basic)')}onChange={() => handleOptionChange('House Rent (% of basic)')} />House Rent (% of basic)</label></li>
// <li><label><input type="checkbox" checked={selectedOptions.includes('Utilities (% of basic)')} onChange={() => handleOptionChange('Utilities (% of basic)')} />Utilities (% of basic)</label></li>
// <li><label><input type="checkbox" checked={selectedOptions.includes('Medical (% of basic)')} onChange={() => handleOptionChange('Medical (% of basic)')} />Medical (% of basic)</label></li>
// <li><label><input type="checkbox" checked={selectedOptions.includes('LFA (% of basic)')} onChange={() => handleOptionChange('LFA (% of basic)')} />LFA (% of basic)</label></li>
// <li><label><input type="checkbox" checked={selectedOptions.includes('Adjustment for Fuel')}onChange={() => handleOptionChange('Adjustment for Fuel')} />Adjustment for Fuel</label></li>
// <li><label><input type="checkbox" checked={selectedOptions.includes('Other Amount')} onChange={() => handleOptionChange('Other Amount')} />Other Amount</label></li>
// </ol>
// </div>
// )}
 
// {activeCompensation === 'Allowance' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Allowance in lieu of second Car')} onChange={() => handleAllowanceOptionChange('Allowance in lieu of second Car')}/>Allowance in lieu of second Car</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Disturbance Allowance')}onChange={() => handleAllowanceOptionChange('Disturbance Allowance')}/>Disturbance Allowance</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Market Premium')} onChange={() => handleAllowanceOptionChange('Market Premium')}/>Market Premium</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Driver Salary (Allowance)')} onChange={() => handleAllowanceOptionChange('Driver Salary (Allowance)')}/>Driver Salary (Allowance)</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Servant')} onChange={() => handleAllowanceOptionChange('Servant')}/>Servant</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Tel (res)')} onChange={() => handleAllowanceOptionChange('Tel (res)')}/>Tel (res)</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Tel (cell)')} onChange={() => handleAllowanceOptionChange('Tel (cell)')}/>Tel (cell)</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Internet')} onChange={() => handleAllowanceOptionChange('Internet')}/>Internet</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Dearness Allowance')} onChange={() => handleAllowanceOptionChange('Dearness Allowance')}/>Dearness Allowance</label></li>
// <li><label><input type="checkbox" checked={selectedAllowanceOptions.includes('Project Allowance')} onChange={() => handleAllowanceOptionChange('Project Allowance')}/>Project Allowance</label></li>
// </ol>
// </div>
// )}

// {activeCompensation === 'Variable Pay' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" checked={selectedVariablepayOptions.includes('Variable Bonus')} onChange={() => handleVariablepayOptionChange('Variable Bonus')} />Variable Bonus</label></li>
// <li><label><input type="checkbox" checked={selectedVariablepayOptions.includes('Special Milestone')} onChange={() => handleVariablepayOptionChange('Special Milestone')} />Special Milestone</label></li>
// </ol>
// </div>
// )}

// {activeCompensation === 'Benefits' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Car')} onChange={() => handleBenefitOptionChange('Car')} />Car</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Car Insurance')} onChange={() => handleBenefitOptionChange('Car Insurance')} />Car Insurance</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Car Fuel')} onChange={() => handleBenefitOptionChange('Car Fuel')} />Car Fuel</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Car Maintenance')} onChange={() => handleBenefitOptionChange('Car Maintenance')} />Car Maintenance</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Car Reg / Road Tax')} onChange={() => handleBenefitOptionChange('Car Reg / Road Tax')} />Car Reg / Road Tax</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Tracker')} onChange={() => handleBenefitOptionChange('Tracker')} />Tracker</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Company Provided Traveling')} onChange={() => handleBenefitOptionChange('Company Provided Traveling')} />Company Provided Traveling</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Corporate Club Membership')} onChange={() => handleBenefitOptionChange('Corporate Club Membership')} />Corporate Club Membership</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Club Subscription')} onChange={() => handleBenefitOptionChange('Club Subscription')} />Club Subscription</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Apartment Rent')} onChange={() => handleBenefitOptionChange('Apartment Rent')} />Apartment Rent</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Hard Furnishings')} onChange={() => handleBenefitOptionChange('Hard Furnishings')} />Hard Furnishings</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Credit Cards / Statutory Contribution')} onChange={() => handleBenefitOptionChange('Credit Cards / Statutory Contribution')} />Credit Cards / Statutory Contribution</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Other Perquisites')} onChange={() => handleBenefitOptionChange('Other Perquisites')} />Other Perquisites</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Security Services / Guards')} onChange={() => handleBenefitOptionChange('Security Services / Guards')} />Security Services / Guards</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Meal Subsidy / Housing Loan')} onChange={() => handleBenefitOptionChange('Meal Subsidy / Housing Loan')} />Meal Subsidy / Housing Loan</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Entertainment Allowance')} onChange={() => handleBenefitOptionChange('Entertainment Allowance')} />Entertainment Allowance</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Leave Encashment')} onChange={() => handleBenefitOptionChange('Leave Encashment')} />Leave Encashment</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Home Travel')} onChange={() => handleBenefitOptionChange('Home Travel')} />Home Travel</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Group Life')} onChange={() => handleBenefitOptionChange('Group Life')} />Group Life</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Hospitalization Insurance (self, wife, children)')} onChange={() => handleBenefitOptionChange('Hospitalization Insurance (self, wife, children)')} />Hospitalization Insurance (self, wife, children)</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Medical (OPD)')} onChange={() => handleBenefitOptionChange('Medical (OPD)')} />Medical (OPD)</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Pension')} onChange={() => handleBenefitOptionChange('Pension')} />Pension</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('PF')} onChange={() => handleBenefitOptionChange('PF')} />PF</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('EOBI')} onChange={() => handleBenefitOptionChange('EOBI')} />EOBI</label></li>
// <li><label><input type="checkbox" checked={selectedBenefitOptions.includes('Gratuity')} onChange={() => handleBenefitOptionChange('Gratuity')} />Gratuity</label></li>
// </ol>
// </div>
// )}

// {errorMessage && <div className="error-message">{errorMessage}</div>}

// <div className="compensation-table">
// <table>

// <tr><th>#</th><th>Compensation Breakdown</th>{isSecondColumnVisible && <th>Enter Custom</th>}<th>Current Amount</th><th>Previous Amount</th></tr>

// <tbody>
// <tr><td className="bold-black centered" colSpan={2}>Basic Salary:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>
// {sortedSelectedOptions.map((option, index) => renderOptionRow(option, index))}

// <tr>
// <td></td><td className="bold-green centered">Sub Total (B)</td>
// {isSecondColumnVisible && (<td></td>)}

// <td className="bold-green centered"><div>{formatNumber(calculateSubTotalB(BasicSalaryCurrent, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent,RetentionAmountCurrent))}</div></td>
// <td className="bold-green centered"><div>{formatNumber(calculateSubTotalB(BasicSalaryPrevious,HouseRentPrevious,UtilitiesPrevious,MedicalPrevious,lfaPrevious,AdjustmentForFuelPrevious, RetentionAmountPrevious))}</div></td>
// </tr>

// <tr>
// <td></td><td className="bold-blue centered">Total (A + B)</td> 
// {isSecondColumnVisible && (<td></td>)}

// <td className="bold-blue centered">{formatNumber(totalABCurrent())}</td>
// <td className="bold-blue centered">{formatNumber(totalABPrevious())}</td>
// </tr>

// <tr><td className="bold-black centered" colSpan={2}>Allowances:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>
// {sortedSelectedAllowanceOptions.map((option, index) => renderAllowanceRow(option, index))}


// <tr>
// <td></td><td className="bold-green centered">Sub Total (C)</td> 
// {isSecondColumnVisible && (<td></td>)}
// <td className="bold-green centered"><div>{formatNumber(calculateSubTotalC(asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent))}</div></td>
// <td className="bold-green centered"><div>{formatNumber(calculateSubTotalC(asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious))}</div></td>
// </tr>

// <tr>
// <td></td>
// <td className="bold-blue centered">Total (A + B + C)</td>
// {isSecondColumnVisible && (<td></td>)}
// <td className="bold-blue centered">{formatNumber(totalABCCurrent())}</td>
// <td className="bold-blue centered">{formatNumber(totalABCPrevious())}</td>
// </tr>
                  
// <tr><td className="bold-black centered" colSpan={2}>Variable Pay:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>
// {sortedSelectedVariablepayOptions.map((option, index) => renderVariablepayRow(option, index))}

// <tr>
// <td></td><td className="bold-green centered">Sub Total (D)</td>
// {isSecondColumnVisible && (<td></td>)}
// <td className="bold-green centered"><div>{formatNumber(calculateSubTotalD(vbCurrent, smCurrent ))}</div></td>
// <td className="bold-green centered"><div>{formatNumber(calculateSubTotalD(vbPrevious, smPrevious))}</div></td>
// </tr>

// <tr>
// <td></td><td className="bold-blue centered">Total (A + B + C + D)</td>
// {isSecondColumnVisible && (<td></td>)}
// <td className="bold-blue centered">{formatNumber(totalABCDCurrent())}</td>
// <td className="bold-blue centered">{formatNumber(totalABCDPrevious())}</td>
// </tr>

// <tr><td className="bold-black centered" colSpan={2}>Benefits:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>
// {sortedSelectedBenefitOptions.map((option, index) => renderBenefitRow(option, index))}

// <tr>
// <td></td><td className="bold-green centered">Sub Total (E)</td>
// {isSecondColumnVisible && (<td></td>)}
// <td className="bold-green centered">
// <div>{formatNumber(calculateSubTotalE
// (
//   carCurrent, carInsuranceCurrent, carFuelCurrent, carMaintenanceCurrent, carRegRoadTaxCurrent, trackerCurrent,
//   companyProvidedTravelingCurrent, corporateClubMembershipCurrent, clubSubscriptionCurrent, apartmentRentCurrent,
//   hardFurnishingsCurrent, creditCardsStatutoryContributionCurrent, otherPerquisitesCurrent, securityServicesGuardsCurrent, 
//   mealSubsidyHousingLoanCurrent, entertainmentAllowanceCurrent, leaveEncashmentCurrent, homeTravelCurrent, groupLifeCurrent,
//   hospitalizationInsuranceCurrent, medicalOpdCurrent, pensionCurrent, pfCurrent, eobiCurrent, gratuityCurrent
// ))}</div></td>

// <td className="bold-green centered">
// <div>{formatNumber(calculateSubTotalE
// (
//   carPrevious, carInsurancePrevious, carFuelPrevious,carMaintenancePrevious, carRegRoadTaxPrevious, trackerPrevious,
//   companyProvidedTravelingPrevious, corporateClubMembershipPrevious, clubSubscriptionPrevious, apartmentRentPrevious,
//   hardFurnishingsPrevious, creditCardsStatutoryContributionPrevious, otherPerquisitesPrevious, securityServicesGuardsPrevious,
//   mealSubsidyHousingLoanPrevious, entertainmentAllowancePrevious, leaveEncashmentPrevious, homeTravelPrevious, groupLifePrevious,
//   hospitalizationInsurancePrevious, medicalOpdPrevious, pensionPrevious, pfPrevious, eobiPrevious, gratuityPrevious
// ))}</div></td>
// </tr>

// <tr>
// <td></td><td className="bold-blue centered">Total (A + B + C + D + E)</td> 
// {isSecondColumnVisible && (<td></td>)}
// <td className="bold-blue centered">{formatNumber(totalABCDECurrent())}</td>
// <td className="bold-blue centered">{formatNumber(totalABCDEPrevious())}</td>
// </tr>

// <tr>
// <td></td><td className="bold-black centered">Annual Package:</td> 
// {isSecondColumnVisible && (<td></td>)}
// <td className="centered">{formatNumber(annualPackageCurrent)}</td>
// <td className="centered">{formatNumber(annualPackagePrevious)}</td>
// </tr>

// <tr>
// <td></td><td className="bold-black centered">Compa-Ratio:</td>
// {isSecondColumnVisible && (<td></td>)}
// <td className="centered">{formatNumber(compaRatioCurrent)}%</td>
// <td className="centered">{formatNumber(compaRatioPrevious)}%</td>
// </tr>

// </tbody>

// </table>
// </div>

// </div>
// );};

// export default FinancialOffer;  
 
import React, { useState ,useEffect, useCallback } from 'react';

const FinancialOffer = () => {
const [activeCompensation, setActiveCompensation] = useState<string | null>(null);
const [selectedOptions, setSelectedOptions] = useState<string[]>([]);//For Basic Salary (B)
const [selectedAllowanceOptions, setSelectedAllowanceOptions] = useState<string[]>([]);//For Allowances (C)
const [selectedVariablepayOptions, setSelectedVariablepayOptions] = useState<string[]>([]); //For Variable Pay (D)
const [selectedBenefitOptions, setSelectedBenefitOptions] = useState<string[]>([]); //For Benefits (E)
const [isSecondColumnVisible, setIsSecondColumnVisible] = useState(true);  
const [errorMessage, setErrorMessage] = useState('');

//Compensation B (Current)                                                                                      // Compensation B (Previous)
const [BasicSalaryCurrent, setBasicSalaryCurrent] = useState('');                                               const [BasicSalaryPrevious, setBasicSalaryPrevious] = useState('');
const [HouseRentCurrent, setHouseRentCurrent] = useState('');                                                   const [HouseRentPrevious, setHouseRentPrevious] = useState('');
const [UtilitiesCurrent, setUtilitiesCurrent] = useState('');                                                   const [UtilitiesPrevious, setvUtilitiesPrevious] = useState('');
const [MedicalCurrent, setMedicalCurrentt] = useState('');                                                      const [MedicalPrevious, setvMedicalPervious] = useState('');
const [lfaCurrent, setlfaCurrent] = useState('');                                                               const [lfaPrevious, setlfaPervious] = useState('');
const [AdjustmentForFuelCurrent, setAdjustmentForFuelCurrent] = useState('');                                   const [AdjustmentForFuelPrevious, setAdjustmentForFuelPrevious] = useState('');
const [RetentionAmountCurrent, setRetentionAmountCurrent] = useState('');                                       const [RetentionAmountPrevious, setRetentionAmountPrevious] = useState('');

// Compensation C (Current)                                                                                     //Compensation C (Previous)
const [asrCurrent, setasrCurrent]=useState('');                                                                 const [asrPrevious, setasrPrevious]=useState('');
const [daCurrent, setdaCurrent]=useState('');                                                                   const [daPrevious, setdaPrevious]=useState('');
const [mpCurrent, setmpCurrent]=useState('');                                                                   const [mpPrevious, setmpPrevious]=useState(''); 
const [dsaCurrent, setdsaCurrent]=useState('');                                                                 const [dsaPrevious, setdsaPrevious]=useState('');
const [sCurrent, setsCurrent]=useState('');                                                                     const [sPrevious, setsPrevious]=useState('');
const [resCurrent, setresCurrent]=useState('');                                                                 const [resPrevious, setresPrevious]=useState('');
const [cellCurrent, setcellCurrent]=useState('');                                                               const [cellPrevious, setcellPrevious]=useState('');
const [iCurrent , setiCurrent]=useState('');                                                                    const [iPrevious, setiPrevious]=useState('');
const [deaCurrent, setdeaCurrent]=useState('');                                                                 const [deaPrevious, setdeaPrevious]=useState('');
const [paCurrent, setpaCurrent]=useState('');                                                                   const [paPrevious, setpaPrevious ]=useState(''); 

//Compensation D (Current)                                                                                       //Compensation D (Previous)
                                                  
const[vbCurrent, setvbCurrent] =useState('');                                                                   const[vbPrevious, setvbPrevious] =useState('');
const[smCurrent, setsmCurrent] =useState('');                                                                   const[smPrevious, setsmPrevious] =useState('');

//Compensation E (Current)                                                                                      //Compensation E (Previous)
const[carCurrent, setcarCurrent] = useState('');                                                                  const[carPrevious, setcarPrevious] = useState('');
const[carInsuranceCurrent, setcarInsuranceCurrent] = useState('');                                                const[carInsurancePrevious, setcarInsurancePrevious] = useState('');
const[carFuelCurrent, setcarFuelCurrent] = useState('');                                                          const[carFuelPrevious, setcarFuelPrevious] = useState('');
const[carMaintenanceCurrent, setcarMaintenanceCurrent] = useState('');                                            const[carMaintenancePrevious, setcarMaintenancePrevious] = useState('');
const[carRegRoadTaxCurrent, setcarRegRoadTaxCurrent] = useState('');                                              const[carRegRoadTaxPrevious, setcarRegRoadTaxPrevious] = useState('');
const[trackerCurrent, settrackerCurrent] = useState('');                                                          const[trackerPrevious, settrackerPrevious] = useState('');
const[companyProvidedTravelingCurrent, setcompanyProvidedTravelingCurrent] = useState('');                        const[companyProvidedTravelingPrevious, setcompanyProvidedTravelingPrevious] = useState('');
const[corporateClubMembershipCurrent, setcorporateClubMembershipCurrent] = useState('');                          const[corporateClubMembershipPrevious, setcorporateClubMembershipPrevious] = useState('');
const[clubSubscriptionCurrent, setclubSubscriptionCurrent] = useState('');                                        const[clubSubscriptionPrevious, setclubSubscriptionPrevious] = useState('');
const[apartmentRentCurrent, setapartmentRentCurrent] = useState('');                                              const[apartmentRentPrevious, setapartmentRentPrevious] = useState('');
const[hardFurnishingsCurrent, sethardFurnishingsCurrent] = useState('');                                          const[hardFurnishingsPrevious, sethardFurnishingsPrevious] = useState('');
const[creditCardsStatutoryContributionCurrent, setcreditCardsStatutoryContributionCurrent] = useState('');        const[creditCardsStatutoryContributionPrevious, setcreditCardsStatutoryContributionPrevious] = useState('');
const[otherPerquisitesCurrent, setotherPerquisitesCurrent] = useState('');                                        const[otherPerquisitesPrevious, setotherPerquisitesPrevious] = useState('');
const[securityServicesGuardsCurrent, setsecurityServicesGuardsCurrent] = useState('');                            const[securityServicesGuardsPrevious, setsecurityServicesGuardsPrevious] = useState('');        
const[mealSubsidyHousingLoanCurrent, setmealSubsidyHousingLoanCurrent] = useState('');                            const[mealSubsidyHousingLoanPrevious, setmealSubsidyHousingLoanPrevious] = useState('');
const[entertainmentAllowanceCurrent, setentertainmentAllowanceCurrent] = useState('');                            const[entertainmentAllowancePrevious, setentertainmentAllowancePrevious] = useState('');
const[leaveEncashmentCurrent, setleaveEncashmentCurrent] = useState('');                                          const[leaveEncashmentPrevious, setleaveEncashmentPrevious] = useState('');
const[homeTravelCurrent, sethomeTravelCurrent] = useState('');                                                    const[homeTravelPrevious, sethomeTravelPrevious] = useState('');
const[groupLifeCurrent, setgroupLifeCurrent] = useState('');                                                      const[groupLifePrevious, setgroupLifePrevious] = useState('');
const[hospitalizationInsuranceCurrent, sethospitalizationInsuranceCurrent] = useState('');                        const[hospitalizationInsurancePrevious, sethospitalizationInsurancePrevious] = useState('');
const[medicalOpdCurrent, setmedicalOpdCurrent] = useState('');                                                    const[medicalOpdPrevious, setmedicalOpdPrevious] = useState('');
const[pensionCurrent, setpensionCurrent] = useState('');                                                          const[pensionPrevious, setpensionPrevious] = useState('');
const[pfCurrent, setpfCurrent] = useState('');                                                                    const[pfPrevious, setpfPrevious] = useState('');
const[eobiCurrent, seteobiCurrent] = useState('');                                                                const[eobiPrevious, seteobiPrevious] = useState('');
const[gratuityCurrent, setgratuityCurrent] = useState('');                                                        const[gratuityPrevious, setgratuityPrevious] = useState('');

const [annualPackageCurrent, setAnnualPackageCurrent] = useState(0);                                              const [annualPackagePrevious, setAnnualPackagePrevious] = useState(0);
const [compaRatioCurrent, setCompaRatioCurrent] = useState(0);                                                 const [compaRatioPrevious, setCompaRatioPrevious] = useState(0);

//DropDown For Third Column
const toggleSecondColumn = () => {  
  setIsSecondColumnVisible(prevState => !prevState);  
};  

const optionOrder1 = // Basic Salary Compensation B  
['Enter Basic Salary', 'House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)',
 'LFA (% of basic)', 'Adjustment for Fuel', 'Other Amount'
];
const optionOrder2 = // Allowances Compensation C  
['Allowance in lieu of second Car', 'Disturbance Allowance', 'Market Premium', 'Driver Salary (Allowance)',
 'Servant','Tel (res)', 'Tel (cell)', 'Internet', 'Dearness Allowance', 'Project Allowance'    
];
const optionOrder3 = //Variable Pay Compensation D 
['Variable Bonus', 'Special Milestone'
];
const optionOrder4 = //Benefits Compensation E 
['Car', 'Car Insurance', 'Car Fuel', 'Car Maintenance', 'Car Reg / Road Tax', 'Tracker',
 'Company Provided Traveling', 'Corporate Club Membership', 'Club Subscription', 'Apartment Rent', 
 'Hard Furnishings', 'Credit Cards / Statutory Contribution', 'Other Perquisites','Security Services / Guards', 
 'Meal Subsidy / Housing Loan', 'Entertainment Allowance', 'Leave Encashment','Home Travel', 'Group Life', 
 'Hospitalization Insurance (self, wife, children)', 'Medical (OPD)', 'Pension','PF', 'EOBI', 'Gratuity'  
];

const sortedSelectedOptions= [...selectedOptions].sort(                 // Sort selected options based on the order of optionOrder1 array(Basic Salary B)
  (a, b) => optionOrder1.indexOf(a) - optionOrder1.indexOf(b)
);

const sortedSelectedAllowanceOptions= selectedAllowanceOptions.sort(   // Sort selected options based on the order of optionOrder1 array(Allowances C)
  (a, b) => optionOrder2.indexOf(a) - optionOrder2.indexOf(b)
);
 
const sortedSelectedVariablepayOptions= selectedVariablepayOptions.sort( // Sort selected options based on the order of optionOrder3 array(Variable Pay D)
  (a, b) => optionOrder3.indexOf(a) - optionOrder3.indexOf(b)
);

const sortedSelectedBenefitOptions= selectedBenefitOptions.sort(         // Sort selected options based on the order of optionOrder4 array(Benefits E)
  (a, b) => optionOrder4.indexOf(a) - optionOrder4.indexOf(b)
);
 
const toggleOptions = (compensation: typeof activeCompensation) => { 
  setActiveCompensation(activeCompensation === compensation ? null : compensation);
};
// const toggleOptions = (compensation) => {
// setActiveCompensation(activeCompensation === compensation ? null : compensation);
// };

//B. Basic Salary
const handleOptionChange = (option: string) => {
  const dependentOptions = ['House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)', 'LFA (% of basic)'];  // List of dependent options
  
  if (selectedOptions.includes(option)) {
    
    // If "Enter Basic Salary" is being unchecked, remove it and its dependent options
    if (option === 'Enter Basic Salary') {
      setSelectedOptions(selectedOptions.filter(item => item !== option && !dependentOptions.includes(item)));
    } 
    else {
      // Otherwise, just remove the selected option
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    }
  } 
  else {
    // If dependent option is selected without "Enter Basic Salary", show error message
    if (dependentOptions.includes(option) && !selectedOptions.includes('Enter Basic Salary')) {
      setErrorMessage('To calculate this, click also "Enter Basic Salary".'); 
      return;
    }
    // Add the selected option
    setSelectedOptions([...selectedOptions, option]);
    setErrorMessage(''); // Clear error message if Basic Salary is selected
  }
};

//C. Allowances 
const handleAllowanceOptionChange = (option: string) => {
  if (selectedAllowanceOptions.includes(option)) {
    setSelectedAllowanceOptions(selectedAllowanceOptions.filter(item => item !== option));
  } 
  else {
    setSelectedAllowanceOptions([...selectedAllowanceOptions, option]);
  }
};

//D. Variable Pay 
const handleVariablepayOptionChange = (option: string) => {
  if (selectedVariablepayOptions.includes(option)) {
    setSelectedVariablepayOptions(selectedVariablepayOptions.filter(item => item !== option));
  } 
  else {
    setSelectedVariablepayOptions([...selectedVariablepayOptions, option]);
  }
};

//E. Benefits 
const handleBenefitOptionChange = (option: string) => {
  if (selectedBenefitOptions.includes(option)) {
    setSelectedBenefitOptions(selectedBenefitOptions.filter(item => item !== option));
  } 
  else {
    setSelectedBenefitOptions([...selectedBenefitOptions, option]);
  }
};

// Ensure these functions are defined somewhere in your code
const roundNumber = (num: number) => Math.round(num);
const formatNumber = (num: number) => {
  if (num === undefined || num === null || isNaN(num)) {
    return '0';
  }
  return num.toLocaleString();
};

// Calculate the values based on percentages
const calculateValue = (percentage: number, salary: number) =>  {  return salary ? Math.round(salary * (percentage / 100)) : 0;};

//SUB-TOTAL B.
const calculateSubTotalB = useCallback( 
  (salary: number, houseRent: number, utilities: number, medical: number, lfa: number, adjustmentForFuel: number, retentionAmount: number
) => {
  return (
    calculateValue(houseRent, salary) + calculateValue(utilities, salary) + calculateValue(medical, salary) + calculateValue(lfa, salary) + 
    (adjustmentForFuel || 0) + (retentionAmount || 0)
  ); 
  },
  []
);

//---Current Total (A + B)
const totalABCurrent = () => { 
  const subtotalB = calculateSubTotalB(
    parseFloat(BasicSalaryCurrent) || 0, 
    parseFloat(HouseRentCurrent) || 0, 
    parseFloat(UtilitiesCurrent) || 0, 
    parseFloat(MedicalCurrent) || 0, 
    parseFloat(lfaCurrent) || 0, 
    parseFloat(AdjustmentForFuelCurrent) || 0, 
    parseFloat(RetentionAmountCurrent) || 0
  );
  return (parseFloat(BasicSalaryCurrent) || 0) + subtotalB;
};
    
  //----Previous Total (A + B)
  const totalABPrevious = () => {
  const subtotalB = calculateSubTotalB
  (
   parseFloat(BasicSalaryPrevious) || 0, 
   parseFloat(HouseRentPrevious) || 0, 
   parseFloat(UtilitiesPrevious) || 0, 
   parseFloat(MedicalPrevious) || 0, 
   parseFloat(lfaPrevious) || 0, 
   parseFloat(AdjustmentForFuelPrevious) || 0, 
   parseFloat(RetentionAmountPrevious) || 0
  );
    return (parseFloat(BasicSalaryPrevious) || 0) + subtotalB;
  };
  
//SUB-TOTAL C.
const calculateSubTotalC =  useCallback(
 (
  asr: number, da: number, mp: number, dsa: number, s: number, res: number, cell: number, i: number, dea: number, pa: number
 ) => {
  
  return(
    (asr || 0) +  (da || 0)  + ( mp || 0) + ( dsa || 0) + ( s || 0) + (res || 0) +  (cell || 0) + ( i || 0) + ( dea || 0) + ( pa || 0)
  ); },
  []
);
  
  //-----Current Total A + B + C 
  const totalABCCurrent = () => {
  //1.Current BASIC SALARY B
  const subtotalB = calculateSubTotalB //BASIC SALARY (B): FOR CURRENT COMPANY
  ( 
  parseFloat(BasicSalaryCurrent), 
  parseFloat(HouseRentCurrent) || 0, 
  parseFloat(UtilitiesCurrent) || 0, 
  parseFloat(MedicalCurrent) || 0, 
  parseFloat(lfaCurrent) || 0, 
  parseFloat(AdjustmentForFuelCurrent) || 0, 
  parseFloat(RetentionAmountCurrent) || 0
);
    
  //2.Current Allowances C
  const subtotalC = calculateSubTotalC  
  (
    parseFloat(asrCurrent) || 0, 
    parseFloat(daCurrent) || 0, 
    parseFloat(mpCurrent) || 0, 
    parseFloat(dsaCurrent) || 0, 
    parseFloat(sCurrent) || 0, 
    parseFloat(resCurrent) || 0, 
    parseFloat(cellCurrent) || 0, 
    parseFloat(iCurrent) || 0, 
    parseFloat(deaCurrent) || 0, 
    parseFloat(paCurrent) || 0
);
    
    return parseFloat(BasicSalaryCurrent) + subtotalB + subtotalC;
  };
  
  //------Previous Total (A + B + C)  
  const totalABCPrevious = () => {
  //1.Previous BASIC SALARY B
  const subtotalB = calculateSubTotalB  
  ( 
  parseFloat(BasicSalaryPrevious), 
  parseFloat(HouseRentPrevious) || 0, 
  parseFloat(UtilitiesPrevious) || 0, 
  parseFloat(MedicalPrevious) || 0, 
  parseFloat(lfaPrevious) || 0, 
  parseFloat(AdjustmentForFuelPrevious) || 0, 
  parseFloat(RetentionAmountPrevious) || 0
  );
  
  //2.Previous ALLOWANCES C
  const subtotalC = calculateSubTotalC 
  ( 
  parseFloat(asrPrevious) || 0, 
  parseFloat(daPrevious) || 0, 
  parseFloat(mpPrevious) || 0, 
  parseFloat(dsaPrevious) || 0, 
  parseFloat(sPrevious) || 0, 
  parseFloat(resPrevious) || 0, 
  parseFloat(cellPrevious) || 0, 
  parseFloat(iPrevious) || 0, 
  parseFloat(deaPrevious) || 0, 
  parseFloat(paPrevious) || 0
  );
    return parseFloat(BasicSalaryPrevious) + subtotalB + subtotalC;
  };
  
  //SUB-TOTAL D.
  const calculateSubTotalD = useCallback(
    (vb:number, sm: number) => {
      return (vb || 0) + (sm || 0);
    },
    []
  );
  
  //-----Current Total (A + B + C + D)
  const totalABCDCurrent = () => {
    return totalABCCurrent() + calculateSubTotalD(
      parseFloat(vbCurrent) || 0, 
      parseFloat(smCurrent) || 0
    );
  };
  
  //-----Previous Total (A + B + C + D)
  const totalABCDPrevious = () => {
    return totalABCPrevious() + calculateSubTotalD(
      parseFloat(vbPrevious) || 0, 
      parseFloat(smPrevious) || 0
    );
  };
  
  //SUB-TOTAL E.
  const calculateSubTotalE = useCallback(
  (
  car: number , carInsurance: number , carFuel: number , carMaintenance: number  , carRegRoadTax: number  , tracker: number  , companyProvidedTraveling: number ,
  corporateClubMembership: number  , clubSubscription: number  , apartmentRent: number , hardFurnishings: number  , creditCardsStatutoryContribution: number , 
  otherPerquisites: number , securityServicesGuards: number , mealSubsidyHousingLoan: number , entertainmentAllowance : number , 
  leaveEncashment: number , homeTravel: number , groupLife: number, hospitalizationInsurance: number , medicalOpd: number , pension: number , pf: number , eobi: number , gratuity: number ) => {
    
  return (
    (car || 0) + (carInsurance || 0) + (carFuel || 0) + (carMaintenance || 0) + (carRegRoadTax || 0) + (tracker || 0) +
    (companyProvidedTraveling || 0) +  (corporateClubMembership || 0) +  (clubSubscription || 0) + (apartmentRent || 0) + 
    (hardFurnishings || 0) + (creditCardsStatutoryContribution || 0) + (otherPerquisites || 0) + (securityServicesGuards || 0) +
    (mealSubsidyHousingLoan || 0) + (entertainmentAllowance || 0) + (leaveEncashment || 0) + (homeTravel || 0) + (groupLife || 0) +
    (hospitalizationInsurance || 0) + (medicalOpd || 0) + (pension || 0) + (pf || 0) + (eobi || 0) + (gratuity || 0)
  ); },
  []
);
  
  //------Current Total (A + B + C + D + E)
  const totalABCDECurrent = useCallback(() => {
    const subtotalA = parseFloat(BasicSalaryCurrent);
    const subtotalB = calculateSubTotalB(
      parseFloat(BasicSalaryCurrent), 
      parseFloat(HouseRentCurrent) || 0, 
      parseFloat(UtilitiesCurrent) || 0, 
      parseFloat(MedicalCurrent) || 0, 
      parseFloat(lfaCurrent) || 0, 
      parseFloat(AdjustmentForFuelCurrent) || 0, 
      parseFloat(RetentionAmountCurrent) || 0
    );
    const subtotalC = calculateSubTotalC(
      parseFloat(asrCurrent) || 0, 
      parseFloat(daCurrent) || 0, 
      parseFloat(mpCurrent) || 0, 
      parseFloat(dsaCurrent) || 0, 
      parseFloat(sCurrent) || 0, 
      parseFloat(resCurrent) || 0, 
      parseFloat(cellCurrent) || 0, 
      parseFloat(iCurrent) || 0, 
      parseFloat(deaCurrent) || 0, 
      parseFloat(paCurrent) || 0  
  );
    const subtotalD = calculateSubTotalD(
      parseFloat(vbCurrent) || 0, 
      parseFloat(smCurrent) || 0
    );
const subtotalE = calculateSubTotalE(
  parseFloat(carCurrent) || 0, 
  parseFloat(carInsuranceCurrent) || 0, 
  parseFloat(carFuelCurrent) || 0, 
  parseFloat(carMaintenanceCurrent) || 0, 
  parseFloat(carRegRoadTaxCurrent) || 0, 
  parseFloat(trackerCurrent) || 0, 
  parseFloat(companyProvidedTravelingCurrent) || 0, 
  parseFloat(corporateClubMembershipCurrent) || 0, 
  parseFloat(clubSubscriptionCurrent) || 0, 
  parseFloat(apartmentRentCurrent) || 0, 
  parseFloat(hardFurnishingsCurrent) || 0, 
  parseFloat(creditCardsStatutoryContributionCurrent) || 0,  
  parseFloat(otherPerquisitesCurrent) || 0, 
  parseFloat(securityServicesGuardsCurrent) || 0, 
  parseFloat(mealSubsidyHousingLoanCurrent) || 0, 
  parseFloat(entertainmentAllowanceCurrent) || 0, 
  parseFloat(leaveEncashmentCurrent) || 0, 
  parseFloat(homeTravelCurrent) || 0,  
  parseFloat(groupLifeCurrent) || 0, 
  parseFloat(hospitalizationInsuranceCurrent) || 0, 
  parseFloat(medicalOpdCurrent) || 0,  
  parseFloat(pensionCurrent) || 0, 
  parseFloat(pfCurrent) || 0, 
  parseFloat(eobiCurrent) || 0, 
  parseFloat(gratuityCurrent) || 0
);
  return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
  }, 
  [
    BasicSalaryCurrent, 
    HouseRentCurrent, 
    UtilitiesCurrent, 
    MedicalCurrent, 
    lfaCurrent, 
    AdjustmentForFuelCurrent, 
    RetentionAmountCurrent, 
    asrCurrent, 
    daCurrent, 
    mpCurrent, 
    dsaCurrent, 
    sCurrent, 
    resCurrent, 
    cellCurrent, 
    iCurrent, 
    deaCurrent, 
    paCurrent, 
    vbCurrent, 
    smCurrent, 
    carCurrent, 
    carInsuranceCurrent, 
    carFuelCurrent, 
    carMaintenanceCurrent, 
    carRegRoadTaxCurrent, 
    trackerCurrent, 
    companyProvidedTravelingCurrent, 
    corporateClubMembershipCurrent, 
    clubSubscriptionCurrent,
    apartmentRentCurrent, 
    hardFurnishingsCurrent, 
    creditCardsStatutoryContributionCurrent, 
    otherPerquisitesCurrent, 
    securityServicesGuardsCurrent, 
    mealSubsidyHousingLoanCurrent, 
    entertainmentAllowanceCurrent, 
    leaveEncashmentCurrent, 
    homeTravelCurrent, 
    groupLifeCurrent, 
    hospitalizationInsuranceCurrent, 
    medicalOpdCurrent, 
    pensionCurrent, 
    pfCurrent,
    eobiCurrent, 
    gratuityCurrent,
    calculateSubTotalB, calculateSubTotalC, calculateSubTotalD, calculateSubTotalE 
  ]);
  
  //------Previous Total (A + B + C + D + E) 
  const totalABCDEPrevious = useCallback(() => {
    const subtotalA = parseFloat(BasicSalaryPrevious); 
    const subtotalB = calculateSubTotalB(
    parseFloat(BasicSalaryPrevious), 
    parseFloat(HouseRentPrevious) || 0, 
    parseFloat(UtilitiesPrevious) || 0, 
    parseFloat(MedicalPrevious) || 0, 
    parseFloat(lfaPrevious) || 0, 
    parseFloat(AdjustmentForFuelPrevious) || 0, 
    parseFloat(RetentionAmountPrevious) || 0
  );
    const subtotalC = calculateSubTotalC(
    parseFloat(asrPrevious) || 0, 
    parseFloat(daPrevious) || 0, 
    parseFloat(mpPrevious) || 0, 
    parseFloat(dsaPrevious) || 0, 
    parseFloat(sPrevious) || 0, 
    parseFloat(resPrevious) || 0, 
    parseFloat(cellPrevious) || 0, 
    parseFloat(iPrevious) || 0, 
    parseFloat(deaPrevious) || 0, 
    parseFloat(paPrevious) || 0
    );
    const subtotalD = calculateSubTotalD(
    parseFloat(vbPrevious) || 0, 
    parseFloat(smPrevious) || 0
    );
    const subtotalE = calculateSubTotalE(
      parseFloat(carPrevious) || 0, 
      parseFloat(carInsurancePrevious) || 0, 
      parseFloat(carFuelPrevious) || 0, 
      parseFloat(carMaintenancePrevious) || 0, 
      parseFloat(carRegRoadTaxPrevious) || 0, 
      parseFloat(trackerPrevious) || 0, 
      parseFloat(companyProvidedTravelingPrevious) || 0, 
      parseFloat(corporateClubMembershipPrevious) || 0, 
      parseFloat(clubSubscriptionPrevious) || 0, 
      parseFloat(apartmentRentPrevious) || 0, 
      parseFloat(hardFurnishingsPrevious) || 0, 
      parseFloat(creditCardsStatutoryContributionPrevious) || 0,  
      parseFloat(otherPerquisitesPrevious) || 0, 
      parseFloat(securityServicesGuardsPrevious) || 0, 
      parseFloat(mealSubsidyHousingLoanPrevious) || 0, 
      parseFloat(entertainmentAllowancePrevious) || 0, 
      parseFloat(leaveEncashmentPrevious) || 0, 
      parseFloat(homeTravelPrevious) || 0,  
      parseFloat(groupLifePrevious) || 0, 
      parseFloat(hospitalizationInsurancePrevious) || 0, 
      parseFloat(medicalOpdPrevious) || 0,  
      parseFloat(pensionPrevious) || 0, 
      parseFloat(pfPrevious) || 0, 
      parseFloat(eobiPrevious) || 0, 
      parseFloat(gratuityPrevious) || 0
    );
  
    return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
  }, 
  [
  BasicSalaryPrevious, 
  HouseRentPrevious, 
  UtilitiesPrevious, 
  MedicalPrevious,
  lfaPrevious, 
  AdjustmentForFuelPrevious, 
  RetentionAmountPrevious, 
  asrPrevious, 
  daPrevious, 
  mpPrevious, 
  dsaPrevious, 
  sPrevious, 
  resPrevious, 
  cellPrevious, 
  iPrevious,
  deaPrevious, 
  paPrevious, 
  vbPrevious, 
  smPrevious, 
  carPrevious, 
  carInsurancePrevious, 
  carFuelPrevious, 
  carMaintenancePrevious, 
  carRegRoadTaxPrevious, 
  trackerPrevious, 
  companyProvidedTravelingPrevious,
  corporateClubMembershipPrevious, 
  clubSubscriptionPrevious, 
  apartmentRentPrevious, 
  hardFurnishingsPrevious, 
  creditCardsStatutoryContributionPrevious, 
  otherPerquisitesPrevious, 
  securityServicesGuardsPrevious,
  mealSubsidyHousingLoanPrevious, 
  entertainmentAllowancePrevious, 
  leaveEncashmentPrevious, 
  homeTravelPrevious, 
  groupLifePrevious, 
  hospitalizationInsurancePrevious, 
  medicalOpdPrevious, 
  pensionPrevious, 
  pfPrevious,
  eobiPrevious, 
  gratuityPrevious, calculateSubTotalB, calculateSubTotalC, calculateSubTotalD, calculateSubTotalE 
  ]);

  useEffect(() => {
    const newAnnualPackageCurrent = roundNumber(totalABCDECurrent() * 12);
    const newAnnualPackagePrevious = roundNumber(totalABCDEPrevious() * 12);
    const newCompaRatioCurrent = roundNumber((totalABCDECurrent() / 177746) * 100);
    const newCompaRatioPrevious = roundNumber((totalABCDEPrevious() / 177746) * 100);
  
    setAnnualPackageCurrent(newAnnualPackageCurrent);
    setAnnualPackagePrevious(newAnnualPackagePrevious);
    setCompaRatioCurrent(newCompaRatioCurrent);
    setCompaRatioPrevious(newCompaRatioPrevious);
  }, [totalABCDECurrent, totalABCDEPrevious]); // ✅ Correct use of useEffect()
  
   
const renderOptionRow = (option: string, index: number) => {
  let row: React.ReactElement | null = null;  
  switch (option) {
case 'Enter Basic Salary':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">1</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Basic Salary</td>
{isSecondColumnVisible && (<td className ="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={BasicSalaryCurrent} onChange={(e) => setBasicSalaryCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={BasicSalaryPrevious} onChange={(e) => setBasicSalaryPrevious(e.target.value)}/>
</td>
)}
          
<td className="p-4 text-center">
<div className= "text-Blue text-xs sm:text-base">{formatNumber(parseFloat(BasicSalaryCurrent))}</div></td>
<td className="p-4 text-center text-xs sm:text-base">
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(BasicSalaryPrevious))}</div></td></tr>
);break;

case 'House Rent (% of basic)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">2</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">House Rent (% of basic)</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Percentage" value={HouseRentCurrent} onChange={(e) => setHouseRentCurrent(e.target.value)}/>
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Percentage" value={HouseRentPrevious} onChange={(e) => setHouseRentPrevious(e.target.value) }/>
</td>
)}
          
<td className="p-4 text-center">
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(HouseRentCurrent), parseFloat(BasicSalaryCurrent)))}</div></td>
<td className="p-4 text-center text-xs sm:text-base">
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(HouseRentPrevious), parseFloat(BasicSalaryPrevious)))}</div></td>
</tr>
);break;

case 'Utilities (% of basic)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">3</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Utilities (% of basic)</td>
{isSecondColumnVisible && (<td className ="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Percentage" value={UtilitiesCurrent} onChange={(e) => setUtilitiesCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Percentage" value={UtilitiesPrevious} onChange={(e) => setvUtilitiesPrevious(e.target.value)}/>
</td>
)}
          
<td className= "p-4 text-center">
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(UtilitiesCurrent), parseFloat(BasicSalaryCurrent)))}</div></td>
<td className="p-4 text-center text-xs sm:text-base">
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(UtilitiesPrevious), parseFloat(BasicSalaryPrevious)))}</div></td>
</tr>
);break;

case 'Medical (% of basic)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">4</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Medical (% of basic)</td>
{isSecondColumnVisible && (<td className ="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number"  className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Percentage" value={MedicalCurrent} onChange={(e) => setMedicalCurrentt(e.target.value) }/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Percentage" value={MedicalPrevious} onChange={(e) => setvMedicalPervious(e.target.value) }/>
</td>
)}
          
<td className= "p-4 text-center">
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(MedicalCurrent), parseFloat(BasicSalaryCurrent)))}</div></td>
<td className="p-4 text-center text-xs sm:text-base">
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(MedicalPrevious), parseFloat(BasicSalaryPrevious)))}</div></td>
</tr>
);
break;

case 'LFA (% of basic)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">5</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">LFA (% of basic)</td>
{isSecondColumnVisible && (<td className ="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number"  className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Percentage" value={lfaCurrent} onChange={(e) => setlfaCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Percentage" value={lfaPrevious} onChange={(e) => setlfaPervious(e.target.value)}/>
</td>
)}
          
<td className= "p-4 text-center">
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(lfaCurrent), parseFloat(BasicSalaryCurrent)))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(calculateValue(parseFloat(lfaPrevious), parseFloat(BasicSalaryPrevious)))}</div></td>
</tr>
);break;
  
case 'Adjustment for Fuel':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">6</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Adjustment for Fuel</td>
{isSecondColumnVisible && (<td className ="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={AdjustmentForFuelCurrent} onChange={(e) => setAdjustmentForFuelCurrent(e.target.value)}/>
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={AdjustmentForFuelPrevious} onChange={(e) => setAdjustmentForFuelPrevious(e.target.value)}/>
</td>
)}
        
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(AdjustmentForFuelCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(AdjustmentForFuelPrevious))}</div></td>
</tr>
); break;

case 'Other Amount':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">7</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Other Amount (Retention Amount)</td>
{isSecondColumnVisible && (<td className ="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Amount" value={RetentionAmountCurrent} onChange={(e) => setRetentionAmountCurrent(e.target.value)}/>
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={RetentionAmountPrevious} onChange={(e) => setRetentionAmountPrevious(e.target.value)}/>
</td>
)}
        
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(RetentionAmountCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(RetentionAmountPrevious))}</div></td>
</tr>
);break;

default: break;
}

return row;
};

const renderAllowanceRow = (option: string, index: number) => {
  let row: React.ReactElement | null = null;

switch (option) {
case 'Allowance in lieu of second Car':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">1</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Allowance in lieu of second Car</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={asrCurrent} onChange={(e) => setasrCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={asrPrevious} onChange={(e) => setasrPrevious(e.target.value)}/>
</td>
)}
        
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(asrCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(asrPrevious))}</div></td>
</tr>
);break;

case 'Disturbance Allowance':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">2</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Disturbance Allowance</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={daCurrent} onChange={(e) => setdaCurrent(e.target.value) }/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Amount" value={daPrevious} onChange={(e) => setdaPrevious(e.target.value)}/>
</td>
)}
        
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(daCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(daPrevious))}</div></td>
</tr>
);break;

case 'Market Premium':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">3</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Market Premium</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={mpCurrent} onChange={(e) => setmpCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={mpPrevious} onChange={(e) => setmpPrevious(e.target.value)}/>
</td>
)}
        
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(mpCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(mpPrevious))}</div></td>
</tr>
);break;

case 'Driver Salary (Allowance)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">4</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Driver Salary (Allowance)</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={dsaCurrent} onChange={(e) => setdsaCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={dsaPrevious} onChange={(e) => setdsaPrevious(e.target.value)}/>
</td>
)}
        
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(dsaCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(dsaPrevious))}</div></td>
</tr>
);break;


case 'Servant':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">5</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Servant</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={sCurrent} onChange={(e) => setsCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Amount" value={sPrevious} onChange={(e) => setsPrevious(e.target.value)}/>
</td>
)}
        
<td className= "p-4 text-center">
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(sCurrent))}</div></td>
<td className="p-4 text-center text-xs sm:text-base">
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(sPrevious))}</div></td>
</tr>
);break;

case 'Tel (res)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">6</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Tel (res)</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={resCurrent} onChange={(e) => setresCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={resPrevious} onChange={(e) => setresPrevious(e.target.value)}/>
</td>
)}
        
<td className= "p-4 text-center">
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(resCurrent))}</div></td>
<td className="p-4 text-center text-xs sm:text-base">
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(resPrevious))}</div></td>
</tr>
);break;

case 'Tel (cell)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">7</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Tel (cell)</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={cellCurrent} onChange={(e) => setcellCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={cellPrevious} onChange={(e) => setcellPrevious(e.target.value)}/>
</td>
)}
        
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(cellCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(cellPrevious))}</div></td>
</tr>
);break;

 
case 'Internet':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">8</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Internet</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={iCurrent} onChange={(e) => setiCurrent(e.target.value) }/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={iPrevious} onChange={(e) => setiPrevious(e.target.value)}/>
</td>
)}
        
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(iCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(iPrevious))}</div></td>
</tr>
);break;

case 'Dearness Allowance':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">9</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Dearness Allowance</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={deaCurrent} onChange={(e) => setdeaCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Amount" value={deaPrevious} onChange={(e) => setdeaPrevious(e.target.value)}/>
</td>
)}
        
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(deaCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(deaPrevious))}</div></td>
</tr>
);break;

case 'Project Allowance':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">10</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Project Allowance</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={paCurrent} onChange={(e) => setpaCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={paPrevious} onChange={(e) => setpaPrevious(e.target.value)}/>
</td>
)}
        
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(paCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(paPrevious))}</div></td>
</tr>
);break; default:

}
return row;
};

const renderVariablepayRow = (option: string, index: number) => {
  let row: React.ReactElement | null = null;
  
switch (option) {
case 'Variable Bonus':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">1</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Variable Bonus</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={vbCurrent} onChange={(e) => setvbCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Amount" value={vbPrevious} onChange={(e) => setvbPrevious(e.target.value)}/>
</td>
)}
          
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(vbCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(vbPrevious))}</div></td>
</tr>
);break;
  
case 'Special Milestone':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">2</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Special Milestone</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={smCurrent} onChange={(e) => setsmCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Amount" value={smPrevious} onChange={(e) => setsmPrevious(e.target.value)}/>
</td>
)}
          
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(smCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(smPrevious))}</div></td>
</tr>
);break; default:
  
}
return row;
};


const renderBenefitRow = (option: string, index: number) => {
  let row: React.ReactElement | null = null;
    
switch (option) {
case 'Car':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">1</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carCurrent} onChange={(e) => setcarCurrent (e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carPrevious} onChange={(e) => setcarPrevious (e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carPrevious))}</div></td>
</tr>
);break;
    
case 'Car Insurance':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">2</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car Insurance</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carInsuranceCurrent} onChange={(e) => setcarInsuranceCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carInsurancePrevious} onChange={(e) => setcarInsurancePrevious(e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carInsuranceCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carInsurancePrevious))}</div></td>
</tr>
);break;

case 'Car Fuel':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">3</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car Fuel</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carFuelCurrent} onChange={(e) => setcarFuelCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carFuelPrevious} onChange={(e) => setcarFuelPrevious(e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carFuelCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carFuelPrevious))}</div></td>
</tr>
);break;
    
case 'Car Maintenance':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">4</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car Maintenance</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carMaintenanceCurrent} onChange={(e) => setcarMaintenanceCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carMaintenancePrevious} onChange={(e) => setcarMaintenancePrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carMaintenanceCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carMaintenancePrevious))}</div></td>
</tr>
);break;

case 'Car Reg / Road Tax':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">5</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Car Reg / Road Tax</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number"  className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={carRegRoadTaxCurrent} onChange={(e) => setcarRegRoadTaxCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg"  placeholder="Enter Amount" value={carRegRoadTaxPrevious} onChange={(e) => setcarRegRoadTaxPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carRegRoadTaxCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(carRegRoadTaxPrevious))}</div></td>
</tr>
);break;
    
case 'Tracker':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">6</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Tracker</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={trackerCurrent} onChange={(e) => settrackerCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={trackerPrevious} onChange={(e) => settrackerPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(trackerCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(trackerPrevious))}</div></td>
</tr>
);break;

case 'Company Provided Traveling':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">7</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Company Provided Traveling</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={companyProvidedTravelingCurrent} onChange={(e) => setcompanyProvidedTravelingCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={companyProvidedTravelingPrevious} onChange={(e) => setcompanyProvidedTravelingPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(companyProvidedTravelingCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(companyProvidedTravelingPrevious))}</div></td>
</tr>
);break;
    
case 'Corporate Club Membership':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">8</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Corporate Club Membership</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={corporateClubMembershipCurrent} onChange={(e) => setcorporateClubMembershipCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={corporateClubMembershipPrevious} onChange={(e) => setcorporateClubMembershipPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(corporateClubMembershipCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(corporateClubMembershipPrevious))}</div></td>
</tr>
);break;

case 'Club Subscription':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">9</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Club Subscription</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={clubSubscriptionCurrent} onChange={(e) => setclubSubscriptionCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={clubSubscriptionPrevious} onChange={(e) => setclubSubscriptionPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(clubSubscriptionCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(clubSubscriptionPrevious))}</div></td>
</tr>
);break;
    
case 'Apartment Rent':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">10</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Apartment Rent</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={apartmentRentCurrent} onChange={(e) => setapartmentRentCurrent(e.target.value)}/>
<div className="guidance-text">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={apartmentRentPrevious} onChange={(e) => setapartmentRentPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(apartmentRentCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(apartmentRentPrevious))}</div></td>
</tr>
);break;

case 'Hard Furnishings':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">11</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Hard Furnishings</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={hardFurnishingsCurrent} onChange={(e) => sethardFurnishingsCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={hardFurnishingsPrevious} onChange={(e) => sethardFurnishingsPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(hardFurnishingsCurrent))}</div>
</td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(hardFurnishingsPrevious))}</div>
</td>
</tr>
);break;
    
case 'Credit Cards / Statutory Contribution':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">12</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Credit Cards / Statutory Contribution</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={creditCardsStatutoryContributionCurrent} onChange={(e) => setcreditCardsStatutoryContributionCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={creditCardsStatutoryContributionPrevious} onChange={(e) => setcreditCardsStatutoryContributionPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(creditCardsStatutoryContributionCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(creditCardsStatutoryContributionPrevious))}</div></td>
</tr>
);break;

case 'Other Perquisites':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">13</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Other Perquisites</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={otherPerquisitesCurrent} onChange={(e) => setotherPerquisitesCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={otherPerquisitesPrevious} onChange={(e) => setotherPerquisitesPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(otherPerquisitesCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(otherPerquisitesPrevious))}</div></td>
</tr>
);break;
    
case 'Security Services / Guards':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">14</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Security Services / Guards</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={securityServicesGuardsCurrent} onChange={(e) => setsecurityServicesGuardsCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={securityServicesGuardsPrevious} onChange={(e) => setsecurityServicesGuardsPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(securityServicesGuardsCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(securityServicesGuardsPrevious))}</div></td>
</tr>
);break;

case 'Meal Subsidy / Housing Loan':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">15</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Meal Subsidy / Housing Loan</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={mealSubsidyHousingLoanCurrent} onChange={(e) => setmealSubsidyHousingLoanCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={mealSubsidyHousingLoanPrevious} onChange={(e) => setmealSubsidyHousingLoanPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(mealSubsidyHousingLoanCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(mealSubsidyHousingLoanPrevious))}</div></td>
</tr>
);break;
    
case 'Entertainment Allowance':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">16</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Entertainment Allowance</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={entertainmentAllowanceCurrent} onChange={(e) => setentertainmentAllowanceCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={entertainmentAllowancePrevious} onChange={(e) => setentertainmentAllowancePrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(entertainmentAllowanceCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(entertainmentAllowancePrevious))}</div></td>
</tr>
);break;

case 'Leave Encashment':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">17</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Leave Encashment</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={leaveEncashmentCurrent} onChange={(e) => setleaveEncashmentCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={leaveEncashmentPrevious} onChange={(e) => setleaveEncashmentPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="centered">{formatNumber(parseFloat(leaveEncashmentCurrent))}</div></td>
<td>
<div className="centered">{formatNumber(parseFloat(leaveEncashmentPrevious))}</div></td>
</tr>
);break;
    
case 'Home Travel':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">18</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Home Travel</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={homeTravelCurrent} onChange={(e) => sethomeTravelCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={homeTravelPrevious} onChange={(e) => sethomeTravelPrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(homeTravelCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(homeTravelPrevious))}</div></td>
</tr>
);break;

case 'Group Life':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">19</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Group Life</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={groupLifeCurrent} onChange={(e) => setgroupLifeCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={groupLifePrevious} onChange={(e) => setgroupLifePrevious(e.target.value)}/>
</td>
)}
            
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(groupLifeCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(groupLifePrevious))}</div></td>
</tr>
);break;
    
case 'Hospitalization Insurance (self, wife, children)':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">20</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Hospitalization Insurance (self, wife, children)</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={hospitalizationInsuranceCurrent} onChange={(e) => sethospitalizationInsuranceCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={hospitalizationInsurancePrevious} onChange={(e) => sethospitalizationInsurancePrevious(e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(hospitalizationInsuranceCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(hospitalizationInsurancePrevious))}</div></td>
</tr>
);break;

case 'Medical (OPD)':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">21</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Medical (OPD)</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" 
placeholder="Enter Amount" value={medicalOpdCurrent} onChange={(e) => setmedicalOpdCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={medicalOpdPrevious} onChange={(e) => setmedicalOpdPrevious(e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(medicalOpdCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(medicalOpdPrevious))}</div></td>
</tr>
);break;
    
case 'Pension':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">22</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Pension</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={pensionCurrent} onChange={(e) => setpensionCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={pensionPrevious} onChange={(e) => setpensionPrevious(e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(pensionCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(pensionPrevious))}</div></td>
</tr>
);break;

case 'PF':          
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">23</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">PF</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={pfCurrent} onChange={(e) => setpfCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={pfPrevious} onChange={(e) => setpfPrevious(e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(pfCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(pfPrevious))}</div></td>
</tr>
);break;
    
case 'EOBI':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">24</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">EOBI</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={eobiCurrent} onChange={(e) => seteobiCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={eobiPrevious} onChange={(e) => seteobiPrevious(e.target.value)}/>
</td>
)}
            
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(eobiCurrent))}</div></td>
<td><div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(eobiPrevious))}</div></td>
</tr>
);break;

case 'Gratuity':
row = (
<tr key={index} className="border-b border-black shadow-darkBlue">
<td className="p-4 text-center font-medium text-xs sm:text-base text-Blue">25</td>
<td className="p-4 text-left font-medium text-xs sm:text-base text-Blue">Gratuity</td>
{isSecondColumnVisible && (<td className="p-4 sm:p-10 text-center">
<div className="guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Current</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={gratuityCurrent} onChange={(e) => setgratuityCurrent(e.target.value)}/>
<div className= "guidance-text text-Blue mt-4 mb-2 text-xs sm:text-base font-bold">Offer</div>
<input type="number" className="w-full p-2 sm:p-4 border border-gray rounded-lg" placeholder="Enter Amount" value={gratuityPrevious} onChange={(e) => setgratuityPrevious(e.target.value)}/>
</td>
)}
              
<td className= "p-4 text-center">
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(gratuityCurrent))}</div></td>
<td>
<div className="text-Blue text-xs sm:text-base">{formatNumber(parseFloat(gratuityPrevious))}</div></td>
</tr>
);break; default:
    
}
return row;
};

return(
<div className="p-28">

<h1 className="text-2xl font-bold text-center mb-6 text-Blue">Financial Offer Calculator</h1>
<h3 className='font-semibold text-Red text-center mb-4'>Here You Can enter your custom ones..</h3>

<div className = "flex justify-center mb-6" >  
<button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red  transition"onClick={toggleSecondColumn}>Custom</button>  
</div> 

<div className="flex flex-wrap justify-center gap-4 mb-6">
<button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red transition" onClick={() => toggleOptions('Basic Salary')}>Basic Salary</button>
<button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red transition" onClick={() => toggleOptions('Allowance')}>Allowance</button>
<button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red transition" onClick={() => toggleOptions('Variable Pay')}>Variable Pay</button>
<button className="bg-Blue text-white py-2 px-4 rounded hover:bg-Red transition" onClick={() => toggleOptions('Benefits')}>Benefit</button>
</div>

{activeCompensation === 'Basic Salary' && (
<div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6">
<ol className="list-decimal pl-6">
            {['Enter Basic Salary', 'House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)', 'LFA (% of basic)', 'Adjustment for Fuel', 'Other Amount'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedOptions.includes(option)} 
                    onChange={() => handleOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
</div>
)}
 
{activeCompensation === 'Allowance' && (
<div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6">
<ol className="list-decimal pl-6">
            {['Allowance in lieu of second Car', 'Disturbance Allowance', 'Market Premium', 'Driver Salary (Allowance)', 'Servant', 'Tel (res)', 'Tel (cell)', 'Internet', 'Dearness Allowance', 'Project Allowance'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedAllowanceOptions.includes(option)} 
                    onChange={() => handleAllowanceOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
</div>
)}

{activeCompensation === 'Variable Pay' && (
<div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6">
<ol className="list-decimal pl-6">
            {['Variable Bonus', 'Special Milestone'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedVariablepayOptions.includes(option)} 
                    onChange={() => handleVariablepayOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
</div>
)}

{activeCompensation === 'Benefits' && (
<div className="bg-white p-4 rounded-lg shadow-darkBlue shadow mb-6">
<ol className="list-decimal pl-6">
            {['Car', 'Car Insurance', 'Car Fuel', 'Car Maintenance', 'Car Reg / Road Tax', 'Tracker', 'Company Provided Traveling', 'Corporate Club Membership', 'Club Subscription', 'Apartment Rent', 'Hard Furnishings', 'Credit Cards / Statutory Contribution', 'Other Perquisites', 'Security Services / Guards', 'Meal Subsidy / Housing Loan', 'Entertainment Allowance', 'Leave Encashment', 'Home Travel', 'Group Life', 'Hospitalization Insurance (self, wife, children)', 'Medical (OPD)', 'Pension', 'PF', 'EOBI', 'Gratuity'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedBenefitOptions.includes(option)} 
                    onChange={() => handleBenefitOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
</div>
)}

{errorMessage && <div className="text-Red text-center mb-4">{errorMessage}</div>}

<div className="overflow-x-auto bg-white shadow-darkBlue shadow-lg rounded-lg lg:w-full w-full mx-auto">
<table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-Red text-white">
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base"></th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Compensation Breakdown</th>
              {isSecondColumnVisible && <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Enter Custom</th>}
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Current Amount</th>
              <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">Previous Amount</th>
            </tr>
          </thead>
          <tbody>
           
            <tr className="bg-gray2"><td colSpan={2} className="px-2 sm:px-4 py-2 font-bold text-center text-Blue text-xs sm:text-base">
          Basic Salary:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>
            {sortedSelectedOptions.map((option, index) => renderOptionRow(option, index))}

            <tr className="bg-white font-bold"><td></td><td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (B)</td>
            {isSecondColumnVisible && <td></td>}
            <td className="font-bold text-Red text-center text-xs sm:text-base">
              <div>{formatNumber(calculateSubTotalB(parseFloat(BasicSalaryCurrent), parseFloat(HouseRentCurrent), parseFloat(UtilitiesCurrent), parseFloat(MedicalCurrent), parseFloat(lfaCurrent), parseFloat(AdjustmentForFuelCurrent), parseFloat(RetentionAmountCurrent)))}</div></td>
              <td className="font-bold text-Red text-center text-xs sm:text-base">
                <div>{formatNumber(calculateSubTotalB(parseFloat(BasicSalaryPrevious), parseFloat(HouseRentPrevious), parseFloat(UtilitiesPrevious), parseFloat(MedicalPrevious), parseFloat(lfaPrevious), parseFloat(AdjustmentForFuelPrevious), parseFloat(RetentionAmountPrevious)))}</div></td></tr>

            <tr className="bg-gray font-bold"><td></td><td className="font-bold text-center text-xs sm:text-base text-white">Total (A + B)</td>
            {isSecondColumnVisible && <td></td>}
            <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCurrent())}</td><td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABPrevious())}</td></tr>

            <tr className="bg-gray2 font-bold"><td className="font-bold text-Blue text-center text-xs sm:text-base" colSpan={2}>Allowances:</td><td></td>{isSecondColumnVisible && <td></td>}<td></td></tr>{sortedSelectedAllowanceOptions.map((option, index) => renderAllowanceRow(option, index))}

            <tr className="bg-white font-bold"><td></td>
            <td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (C)</td>{isSecondColumnVisible && <td></td>}
            <td className="font-bold text-Red text-center text-xs sm:text-base">
              <div>{formatNumber(calculateSubTotalC(parseFloat(asrCurrent), parseFloat(daCurrent), parseFloat(mpCurrent), parseFloat(dsaCurrent), parseFloat(sCurrent), parseFloat(resCurrent), parseFloat(cellCurrent), parseFloat(iCurrent), parseFloat(deaCurrent), parseFloat(paCurrent)))}</div>
              </td><td className="font-bold text-Red text-center text-xs sm:text-base">
                <div>{formatNumber(calculateSubTotalC(parseFloat(asrPrevious), parseFloat(daPrevious), parseFloat(mpPrevious), parseFloat(dsaPrevious), parseFloat(sPrevious), parseFloat(resPrevious), parseFloat(cellPrevious), parseFloat(iPrevious), parseFloat(deaPrevious), parseFloat(paPrevious)))}</div></td></tr>

            <tr className="bg-gray font-bold"><td></td><td className="font-bold text-white text-center text-xs sm:text-base">Total (A + B + C)</td>
            {isSecondColumnVisible && <td></td>}
            <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCCurrent())}</td>
            <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCPrevious())}</td></tr>

            <tr className="bg-gray2 font-bold"><td className="font-bold text-Blue text-center text-xs sm:text-base" colSpan={2}>Variable Pay:</td><td></td>
            {isSecondColumnVisible && <td></td>}<td></td></tr>{sortedSelectedVariablepayOptions.map((option, index) => renderVariablepayRow(option, index))}

            <tr className="bg-white font-bold"><td></td><td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (D)</td>
            {isSecondColumnVisible && <td></td>}
            <td className="font-bold text-Red text-center text-xs sm:text-base">
              <div>{formatNumber(calculateSubTotalD(parseFloat(vbCurrent), parseFloat(smCurrent)))}</div></td>
              <td className="font-bold text-Red text-center text-xs sm:text-base">
                <div>{formatNumber(calculateSubTotalD(parseFloat(vbPrevious), parseFloat(smPrevious)))}</div></td>
                </tr>

            <tr className="bg-gray font-bold">
              <td></td><td className="font-bold text-white text-center text-xs sm:text-base">Total (A + B + C + D)</td>{isSecondColumnVisible && <td></td>}
              <td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCDCurrent())}</td><td className="font-bold text-white text-center text-xs sm:text-base">{formatNumber(totalABCDPrevious())}</td></tr>

            <tr className="bg-gray2 font-bold">
              <td className="font-bold text-Blue  text-center text-xs sm:text-base" colSpan={2}>Benefits:</td><td></td>
              {isSecondColumnVisible && <td></td>}
              <td></td></tr>
              {sortedSelectedBenefitOptions.map((option, index) => renderBenefitRow(option, index))}

            <tr className="bg-white font-bold">
              <td></td>
              <td className="font-bold text-Red text-center text-xs sm:text-base">Sub Total (E)</td>
              {isSecondColumnVisible && <td></td>}
              <td className="font-bold text-Red  text-center text-xs sm:text-base">
                <div>
                  {formatNumber(calculateSubTotalE(parseFloat(carCurrent), parseFloat(carInsuranceCurrent), parseFloat(carFuelCurrent), parseFloat(carMaintenanceCurrent), parseFloat(carRegRoadTaxCurrent), parseFloat(trackerCurrent),
                  parseFloat(companyProvidedTravelingCurrent), parseFloat(corporateClubMembershipCurrent), parseFloat(clubSubscriptionCurrent), parseFloat(apartmentRentCurrent),
                  parseFloat(hardFurnishingsCurrent), parseFloat(creditCardsStatutoryContributionCurrent), parseFloat(otherPerquisitesCurrent), parseFloat(securityServicesGuardsCurrent), parseFloat(mealSubsidyHousingLoanCurrent), parseFloat(entertainmentAllowanceCurrent), parseFloat(leaveEncashmentCurrent), parseFloat(homeTravelCurrent), parseFloat(groupLifeCurrent),parseFloat(hospitalizationInsuranceCurrent), parseFloat(medicalOpdCurrent), parseFloat(pensionCurrent), parseFloat(pfCurrent), parseFloat(eobiCurrent), parseFloat(gratuityCurrent)
                  ))}</div></td>
                  <td className="font-bold text-Red text-center text-xs sm:text-base">
                    <div>
                    {formatNumber(calculateSubTotalE(
                      parseFloat(carPrevious), 
                      parseFloat(carInsurancePrevious), 
                      parseFloat(carFuelPrevious), 
                      parseFloat(carMaintenancePrevious), 
                      parseFloat(carRegRoadTaxPrevious), 
                      parseFloat(trackerPrevious),
                      parseFloat(companyProvidedTravelingPrevious), 
                      parseFloat(corporateClubMembershipPrevious), 
                      parseFloat(clubSubscriptionPrevious), 
                      parseFloat(apartmentRentPrevious),
                      parseFloat(hardFurnishingsPrevious), 
                      parseFloat(creditCardsStatutoryContributionPrevious), 
                      parseFloat(otherPerquisitesPrevious), 
                      parseFloat(securityServicesGuardsPrevious),
                      parseFloat(mealSubsidyHousingLoanPrevious), 
                      parseFloat(entertainmentAllowancePrevious), 
                      parseFloat(leaveEncashmentPrevious), 
                      parseFloat(homeTravelPrevious), 
                      parseFloat(groupLifePrevious),
                      parseFloat(hospitalizationInsurancePrevious), 
                      parseFloat(medicalOpdPrevious), 
                      parseFloat(pensionPrevious), 
                      parseFloat(pfPrevious), 
                      parseFloat(eobiPrevious), 
                      parseFloat(gratuityPrevious)))}
                    </div></td></tr>
                    <tr className="bg-gray font-bold">
              <td></td><td className="px-4 py-2 text-center text-white text-xs sm:text-base">Total (A + B + C + D + E)</td> 
              {isSecondColumnVisible && (<td></td>)}
              <td className="px-4 py-2 text-center text-white text-xs sm:text-base">{formatNumber(totalABCDECurrent())}</td>
              <td className="px-4 py-2 text-center text-white text-xs sm:text-base">{formatNumber(totalABCDEPrevious())}</td></tr>
  
            {/* Dynamic Rows for Selected Options */}
           
            <tr className="bg-gray2 font-bold">
              <td></td><td className="px-4 py-2 text-center text-Blue text-xs sm:text-base">Annual Package:</td> 
              {isSecondColumnVisible && (<td></td>)}
              <td className="px-4 py-2 text-center text-Blue text-xs sm:text-base">{formatNumber(annualPackageCurrent)}</td>
              <td className="px-4 py-2 text-center text-Blue text-xs sm:text-base">{formatNumber(annualPackagePrevious)}</td></tr>
  
            {/* Subtotals and Totals */}
            <tr className="bg-white font-bold">
              <td></td>
              <td className="px-4 py-2 text-center text-Red text-xs sm:text-base">Compa-Ratio:</td>
              {isSecondColumnVisible && <td></td>}
              <td className="px-4 py-2 text-center text-Red text-xs sm:text-base">{formatNumber(compaRatioCurrent)}%</td>
              <td className="px-4 py-2 text-center text-Red text-xs sm:text-base">{formatNumber(compaRatioPrevious)}%</td>
            </tr>
            
  
            {/* Add more table rows as needed */}
          </tbody>
        </table>
</div>

</div>
);};

export default FinancialOffer;  
 
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './FinancialOffer.css';

// const FinancialOffer = () => {
// const [activeCompensation, setActiveCompensation] = useState(null);
// const [selectedOptions, setSelectedOptions] = useState([]);
// const navigate = useNavigate();

// const toggleOptions = (compensation) => {
// setActiveCompensation(activeCompensation === compensation ? null : compensation);
// };

// const handleOptionChange = (option) => {
// setSelectedOptions((prevSelected) =>
// prevSelected.includes(option)
// ? prevSelected.filter((item) => item !== option)
// : [...prevSelected, option]
// );
// };

// const navigateToCalculator = () => {
//   navigate('/offer-acceptance-letter-calculator');
// };

// return (
// <div className="financial-offer-container">

// <div className="left-button-container">
// <Link to="/graph"><button className="widget-button">View Graph</button></Link>
// </div>

// <div className="left-button-container">
// <Link to="/small-calculator"><button className="widget-button">View Small Calculator</button> </Link>
// </div>

// <h1 className="heading">Financial Offer Calculator</h1><h2 className="subheading">Salary Breakdown Compensation</h2>

// <div className="message-box">
// <ul>
// <li>Select here your current Compensation</li>
// <li>What do you get in your current company</li>
// <li>Any additional comps being offered</li>
// </ul>
// </div>

// <div className="compensation-buttons">
// <button className="compensation-button" onClick={() => toggleOptions('Basic Salary')}>Basic Salary:</button>
// <button className="compensation-button" onClick={() => toggleOptions('Allowance')}>Allowance:</button>
// <button className="compensation-button" onClick={() => toggleOptions('Variable Pay')}>Variable Pay:</button>
// <button className="compensation-button" onClick={() => toggleOptions('Benefits')}>Benefit:</button>
// </div>

// {activeCompensation === 'Basic Salary' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('House Rent (% of basic)')} />House Rent (45% of basic)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Utilities (% of basic)')} />Utilities (10% of basic)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Medical (% of basic)')} />Medical (10% of basic)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('LFA (% of basic)')} />LFA (10% of basic)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Adjustment for Fuel')} />Adjustment for Fuel</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Other Amount')} />Retention amount</label></li>
// </ol>
// </div>
// )}

// {activeCompensation === 'Allowance' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Allowance in lieu of second Car')} />Allowance in lieu of second Car</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Disturbance Allowance')} />Disturbance Allowance</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Market Premium')} />Market Premium</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Driver Salary (Allowance)')} />Driver Salary (Allowance)</label></li><li><label><input type="checkbox" onChange={() => handleOptionChange('Servant')} />Servant</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Tel (res)')} />Tel (res)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Tel (cell)')} />Tel (cell)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Internet')} />Internet</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Dearness Allowance')} />Dearness Allowance</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Project Allowance')} />Project Allowance</label></li>
// </ol>
// </div>
// )}

// {activeCompensation === 'Variable Pay' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Variable Bonus')} />Variable Bonus</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Special Milestone')} />Special Milestone</label></li>
// </ol>
// </div>
// )}

// {activeCompensation === 'Benefits' && (
// <div className="options active">
// <ol>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Car')} />Car</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Insurance')} />Car Insurance</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Fuel')} />Car Fuel</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Maintenance')} />Car Maintenance</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Reg / Road Tax')} />Car Reg / Road Tax</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Tracker')} />Tracker</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Company Provided Traveling')} />Company Provided Traveling</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Corporate Club Membership')} />Corporate Club Membership</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Club Subscription')} />Club Subscription</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Apartment Rent')} />Apartment Rent</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Hard Furnishings')} />Hard Furnishings</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Credit Cards / Statutory Contribution')} />Credit Cards / Statutory Contribution</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Other Perquisites')} />Other Perquisites</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Security Services / Guards')} />Security Services / Guards</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Meal Subsidy / Housing Loan')} />Meal Subsidy / Housing Loan</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Entertainment Allowance')} />Entertainment Allowance</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Leave Encashment')} />Leave Encashment</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Home Travel')} />Home Travel</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Group Life')} />Group Life</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Hospitalization Insurance (self, wife, children)')} />Hospitalization Insurance (self, wife, children)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Medical (OPD)')} />Medical (OPD)</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Pension')} />Pension</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('PF')} />PF</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('EOBI')} />EOBI</label></li>
// <li><label><input type="checkbox" onChange={() => handleOptionChange('Gratuity')} />Gratuity</label></li>
// </ol>
// </div>
// )}

// <div className="selected-compensation">
// <h3>Your Offer Compensation Selection:</h3>
// <ul>
// {selectedOptions.map((option, index) => (
//  <li key={index}>{option}</li>
// ))}
// </ul>
// </div>

// <div className="centered-button-container">
// <button className="widget-button" onClick={navigateToCalculator}>Calculate Salary Compensation Breakdown</button>
// </div>

// </div>
//   );
// };

// export default FinancialOffer;

// import React, { useState } from 'react';
// import './FinancialOffer.css';

// const FinancialOffer = () => {
//   const [activeCompensation, setActiveCompensation] = useState(null);
//   const [showSalaryContent, setShowSalaryContent] = useState(false);

//   const toggleOptions = (compensation) => {
//     if (activeCompensation === compensation) {
//       setActiveCompensation(null); // Close if already active
//     } else {
//       setActiveCompensation(compensation); // Open the selected one
//     }
//   };

//   const toggleSalaryContent = () => {
//     setShowSalaryContent(!showSalaryContent);
//   };
  
// return (
// <div className="financial-offer-container">
// <h1 className="heading">{">>"} Financial Offer Calculator</h1>
// <h1>Salary Compensation Breakdown</h1>

// <div className="message-box light-blue-box"><label>Select Current Compensation Company:</label></div>
// <div className="message-box dark-blue-box"><label>What Do You Get In Your Current Company:</label></div>
// <div className="message-box light-blue-box"><label>Any Additional Comps Being Offered:</label></div>

// <div className="side-buttons"><div className="compensation-group"></div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Basic Salary')}>Basic Salary</button>
// {activeCompensation === 'Basic Salary' && (
// <div className="options">
// <ul>
// <li>House Rent (45% of basic)</li><li>Utilities (10% of basic)</li><li>Medical (10% of basic)</li>
// <li>Adjustment for Fuel</li><li>Retention amount</li>
// </ul>
// </div>
// )}
// </div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Allowance')}>Allowances</button>
// {activeCompensation === 'Allowance' && (
// <div className="options">
// <ul>
// <li>LFA (10% of basic)</li><li>Allowance in lieu of  second Car</li><li>Disturbance Allowance</li>
// <li>Market Premium</li><li>Driver Salary (Allowance)</li><li>Project Allowance</li>
// </ul>
// </div>
// )}
// </div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Variable Pay')}>Variable Pay</button>
// {activeCompensation === 'Variable Pay' && (
// <div className="options">
// <ul>
// <li>Variable Bonus</li><li>Special Milestone</li>
// </ul>
// </div>
// )}
// </div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Benefits')}>Benefits</button>
// {activeCompensation === 'Benefits' && (
// <div className="options">
// <ul>
// <li>Car</li><li>Car Insurance</li><li>Car Fuel</li>
// <li>Car Maintenance</li><li>Car Reg / Road Tax</li>
// <li>Tracker</li><li>Company Provided Traveling</li>
// <li>Corporate Club Membership</li><li>Club Subscription</li>
// <li>Apartment rent</li><li>Meal Subsidy / Housing Loan</li>
// <li>Gratuity</li><li>Medical (OPD)</li><li>Leave Encashment</li>
// </ul>
// </div>
// )}
// </div>
// </div>

// <div className="widget-button-container">
// <button className="widget-button"  onClick={toggleSalaryContent}>Calculate Salary Compensation Breakdown:</button>
// </div>
 
// </div>
//   );
// };

// export default FinancialOffer;

 


// import React, { useState } from 'react';
// import './FinancialOffer.css';

// const FinancialOffer = () => {
// const [currentCompany, setCurrentCompany] = useState('');
// const [currentCompensation, setCurrentCompensation] = useState('');
// const [additionalComps, setAdditionalComps] = useState('');

// return (
//   <div className="financial-offer-container">
//     <h1 className="heading">{">>"} Financial Offer Calculator</h1>
      // {/* <div className="message-box light-blue-box">
      //   <label>Select Current Compensation Company:</label>
      //   <input type="text" value={currentCompany} onChange={(e) => setCurrentCompany(e.target.value)} />
      // </div>
      // <div className="message-box dark-blue-box">
      //   <label>What Do You Get In Your Current Company:</label>
      //   <input type="text" value={currentCompensation} onChange={(e) => setCurrentCompensation(e.target.value)} />
      // </div>
      // <div className="message-box light-blue-box">
      //   <label>Any Additional Comps Being Offered:</label>
      //   <input type="text" value={additionalComps} onChange={(e) => setAdditionalComps(e.target.value)} />
      // </div> */}
//       {/* Add a button or other element to trigger calculations or display results */}
//     </div>
//   );
// };

// export default FinancialOffer;





// import React from 'react';
// import './FinancialOffer.css';

// const FinancialOffer = () => {
//   return (
//     <div className="financial-offer-container">
//       <h1 className="heading">{'>>'} Financial Offer Calculator</h1>
//       <div className="message-box light-blue-box">
//         <p>Select Current Compensation Company</p>
//       </div>
//       <div className="message-box dark-blue-box">
//         <p>What Do You Get In Your Current Company</p>
//       </div>
//       <div className="message-box light-blue-box">
//         <p>Any Additional Comps Being Offered?</p>
//       </div>
//     </div>
//   );
// };

// export default FinancialOffer;
