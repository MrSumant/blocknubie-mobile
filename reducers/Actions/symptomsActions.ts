const SymptomActions = {
    GET_SYMPTOMS_REQUEST: "GET_SYMPTOMS_REQUEST",
    GET_SYMPTOMS_SUCCESS: "GET_SYMPTOMS_SUCCESS",
    GET_SYMPTOMS_FAILURE: "GET_SYMPTOMS_FAILURE",
    SAVE_SYMPTOM_SEVERITY_REQUEST: "SAVE_SYMPTOM_SEVERITY_REQUEST",
    SAVE_SYMPTOM_SEVERITY_FAILURE: "SAVE_SYMPTOM_SEVERITY_FAILURE",
    SAVE_SYMPTOM_SEVERITY_SUCCESS: "SAVE_SYMPTOM_SEVERITY_SUCCESS",
};

export const getSymptomsRequest = ({ symptomText }) => ({
    type: SymptomActions.GET_SYMPTOMS_REQUEST,
    payload: { symptomText }
});

export const getSymptomsSuccess = (result: any) => ({
    type: SymptomActions.GET_SYMPTOMS_SUCCESS,
    payload: result
});

export const getSymptomsFailure = (message: any) => ({
    type: SymptomActions.GET_SYMPTOMS_FAILURE,
    payload: message
});

export const saveSymptomsSeverityRequest = (symptomSeverity: any, _id: any ) => ({
    type: SymptomActions.SAVE_SYMPTOM_SEVERITY_REQUEST,
    payload: symptomSeverity, _id
});

export const saveSymptomsSeveritySuccess = (result: any) => ({
    type: SymptomActions.SAVE_SYMPTOM_SEVERITY_SUCCESS,
    payload: result
});

export const saveSymptomsSeverityFailure = (message: any) => ({
    type: SymptomActions.SAVE_SYMPTOM_SEVERITY_FAILURE,
    payload: message
});

export default SymptomActions;
