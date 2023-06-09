import { ADD_ADMIN_FAILURE, ADD_ADMIN_REQUEST, ADD_ADMIN_SUCCESS, ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADMIN_FAILURE_REQUEST, ADMIN_LOGIN_REQUEST, ADMIN_REQUEST, DELETE_ADMIN_FAILURE, DELETE_ADMIN_REQUEST, DELETE_ADMIN_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ADMINLIST_FAILURE, GET_ADMINLIST_REQUEST, GET_ADMINLIST_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_USERLIST_FAILURE, GET_USERLIST_REQUEST, GET_USERLIST_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./actionTypes";


const inisitalState = {
  isLoading: false,
  isError: false,
  products: [],
  users: [],
  isLoadingUserList: false,
  isErrorUserList: false,
  isLoadingUserDelete: false,
  isErrorUserDelete: false,
  admins: [],
  isLoadingAdminList: false,
  isErrorAdminList: false,
  isLoadingAdminAdd: false,
  isErrorAdminAdd: false,
  adminToken: ""
}

const reducer = (state = inisitalState, { type, payload }) => {

  switch (type) {

    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: [...state.products, payload] };
    case ADD_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case DELETE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: state.products.filter((product) => product._id !== payload) };
    case DELETE_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case UPDATE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state, isLoading: false, products: state.products.map((product => {
          if (product._id === payload.id) {
            return payload;
          }
          return product;
        }))
      };
    case GET_USERLIST_REQUEST:
      return { ...state, isLoadingUserList: true };
    case GET_USERLIST_SUCCESS:
      return { ...state, isLoadingUserList: false, users: payload };
    case GET_USERLIST_FAILURE:
      return { ...state, isLoadingUserList: false, isErrorUserList: true };
    case DELETE_USER_REQUEST:
      return { ...state, isLoadingUserDelete: true };
    case DELETE_USER_SUCCESS:
      return {
        ...state, isLoadingUserDelete: false, users: state.users.filter((user) => user._id !== payload)
      };
    case DELETE_USER_FAILURE:
      return { ...state, isLoadingUserDelete: false, isErrorUserDelete: true };
    case ADD_ADMIN_REQUEST:
      return { ...state, isLoadingAdminAdd: true };
    case ADD_ADMIN_SUCCESS:
      return { ...state, isLoadingAdminAdd: false, products: [...state.admins, payload] };
    case ADD_ADMIN_FAILURE:
      return { ...state, isLoadingAdminAdd: false, isErrorAdminAdd: true };
    case GET_ADMINLIST_REQUEST:
      return { ...state, isLoadingAdminList: true };
    case GET_ADMINLIST_SUCCESS:
      return { ...state, isLoadingAdminList: false, admins: payload };
    case GET_ADMINLIST_FAILURE:
      return { ...state, isLoadingAdminList: false, isErrorAdminList: true };
    case DELETE_ADMIN_REQUEST:
      return { ...state, isLoadingAdminDelete: true };
    case DELETE_ADMIN_SUCCESS:
      return {
        ...state, isLoadingAdminDelete: false, admins: state.admins.filter((admin) => admin._id !== payload)
      };
    case DELETE_ADMIN_FAILURE:
      return { ...state, isLoadingAdminDelete: false, isErrorAdminDelete: true };
    case ADMIN_REQUEST:
      return { ...state, isLoading: true }
    case ADMIN_LOGIN_REQUEST:
      return { ...state, isLoading: false, adminToken: payload }
    case ADMIN_FAILURE_REQUEST:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }

}

export { reducer };