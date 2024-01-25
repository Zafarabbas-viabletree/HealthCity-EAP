import _ from "lodash";
import {
  ANXIETY_TEXT,
  DEPRESSION_LOW_MOOD_TEXT,
  QUESTIONAIRE_ONE,
  QUESTIONAIRE_THREE,
  QUESTIONAIRE_TWO,
} from "../constants";
import {
  PREMIUM_COUNSELLOR_PSYCHOTHERAPIST_SLUG,
  QUALIFIED_THERAPIST,
  QUALIFIED_COUNSELLOR_PSYCHOTHERAPIST_SLUG,
  PREMIUM_SERVICE_THERAPIST,
} from "../pages/BookingForm/BookingFormController";
import DataHandler from "../services/DataHandler";
import { getCardIntentRequest } from "../actions/PaymentActions";
import { BASE_URL, UPLOAD_FILES } from "../config/WebService";

import {
  faCertificate,
  faSortAmountUpAlt,
} from "@fortawesome/free-solid-svg-icons";

const getManipulatedTeamList = (data) => {
  const finalData = [];
  const sortedBySequenceData = [];
  const sequenceToMaintain = [
    "Lucy",
    "Lindita",
    "Farida",
    "Francis",
    "Daniel",
    "Raymond",
    "Emma",
    "Danelle",
  ];

  data.forEach((element) => {
    finalData.push({
      id: element.id,
      cv: element.cv,
      name: element.name,
      titles: element.titles,
      description: element.description,
      profileImage: element.profile_image,
    });
  });

  sequenceToMaintain.forEach((seqItem) => {
    finalData.forEach((finalDataElement) => {
      if (_.includes(finalDataElement.name, seqItem)) {
        sortedBySequenceData.push(finalDataElement);
      }
    });
  });

  return sortedBySequenceData;
};

const getServiceImage = (serviceName) => {
  let img = faCertificate;
  if (serviceName === QUALIFIED_COUNSELLOR_PSYCHOTHERAPIST_SLUG) {
    img = faCertificate;
  }

  if (serviceName === PREMIUM_COUNSELLOR_PSYCHOTHERAPIST_SLUG) {
    img = faSortAmountUpAlt;
  }

  if (serviceName === QUALIFIED_THERAPIST) {
    img = faCertificate;
  }

  if (serviceName === PREMIUM_SERVICE_THERAPIST) {
    img = faSortAmountUpAlt;
  }

  return img;
};

const getQuestionnaireDataById = (questionnairId) => {
  let finalData = null;

  if (questionnairId == 1) {
    finalData = _.cloneDeep(QUESTIONAIRE_ONE);
  } else if (questionnairId == 2) {
    finalData = _.cloneDeep(QUESTIONAIRE_TWO);
  } else if (questionnairId == 3) {
    finalData = _.cloneDeep(QUESTIONAIRE_THREE);
  }

  return finalData;
};

const getQuestionnaireResultHeadingById = (questionnairId) => {
  let resultHead;
  switch (questionnairId) {
    case "1":
      resultHead = `Would You Like To Complete A Mood Questionnaire (${DEPRESSION_LOW_MOOD_TEXT}) To See How You Are Feeling?`;
      break;

    case "2":
      resultHead = `Would You Like To Complete A Mood Questionnaire (${ANXIETY_TEXT}) To See How You Are Feeling?`;
      break;
    default:
  }
  return resultHead;
};

const goToLandingPage = (historyInstance) => {
  historyInstance.push("/");
};

const getCardIntentRequestHelper = (payload, cb) => {
  DataHandler.getStore().dispatch(
    getCardIntentRequest(payload, (response) => {
      cb(response);
    })
  );
};

const uploadFiles = async (files) => {
  const finalResponse = {
    status: false,
    message: "Something went wrong",
  };
  const formData = new FormData();
  files.forEach((element) => {
    formData.append("documents[]", element);
  });

  try {
    const responseNew = await fetch(`${BASE_URL}${UPLOAD_FILES.route}`, {
      method: "POST",
      body: formData,
    });

    const responseJson = await responseNew.json();
    console.log("Success:", responseJson);

    return {
      ...finalResponse,
      ...responseJson,
    };
  } catch (err) {
    return {
      ...finalResponse,
      ...err,
    };
  }
};

export {
  getManipulatedTeamList,
  getServiceImage,
  getQuestionnaireDataById,
  goToLandingPage,
  getCardIntentRequestHelper,
  getQuestionnaireResultHeadingById,
  uploadFiles,
};
