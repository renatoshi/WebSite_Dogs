import axios from "axios";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: json.data,
      });
    } catch (error) {
      return { error: error.message};
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/temperaments");
      return dispatch({
        type: "GET_TEMPERAMENTS",
        payload: json.data,
      });
    } catch (error) {
      return { error: error.message};
    }
  };
};

export const postDog = (payload) => {
  return async (dispatch) => {
    try {
      const json = await axios.post("/dog", payload);
      return json;
    } catch (error) {
      return { error: error.message};
    }
  };
};

export const getQuery = (payload) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/dogs?name=${payload}`)
      return dispatch({
        type: "GET_QUERY",
        payload: json.data
      })
    } catch (error) {
      return { error: error.message}
    }
  }
}

export const orderAlphabetically = (payload) => {
  return {
    type: "ALPHABETICAL_ORDER",
    payload: payload,
  };
};

export const orderByWeight = (payload) => {
  return {
    type: "ORDER_BY_WEIGHT",
    payload: payload,
  };
};


export const filterTemperaments = (payload) => {
  //lo que llega en payload es lo que yo le mando desde el componente
  return {
    type: "FILTER_TEMPERAMENTS",
    payload: payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: "FILTER_CREATED",
    payload: payload,
  };
};