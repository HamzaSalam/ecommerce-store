interface ApiUrls {
  GET_PRODUCTS: string;
  GET_PRODUCT: string;
  CREATE_PRODUCT: string;
  UPDATE_PRODUCT: string;
  DELETE_PRODUCT: string;

  // Auth
  SEND_OTP: string;
  VERIFY_OTP: string;
  REGISTER: string;
  LOGIN: string;
  LOGOUT: string;

  // Cart
  GET_CART: string;
  ADD_TO_CART: string;
  UPDATE_CART: string;
  REMOVE_FROM_CART: string;
  CLEAR_CART: string;

  // Orders
  GET_ORDERS: string;
  GET_ORDER: string;
  CREATE_ORDER: string;
  UPDATE_ORDER: string;
  CANCEL_ORDER: string;
}

export const API_URLS: ApiUrls = {
  // Products
  GET_PRODUCTS: '/v1/products',
  GET_PRODUCT: '/v1/products',
  CREATE_PRODUCT: '/v1/products',
  UPDATE_PRODUCT: '/v1/products',
  DELETE_PRODUCT: '/v1/products',

  // Auth
  SEND_OTP: '/v1/auth/send-otp',
  VERIFY_OTP: '/v1/auth/verify-otp',
  REGISTER: '/v1/auth/register',
  LOGIN: '/v1/auth/login',
  LOGOUT: '/v1/auth/logout',

  // Cart
  GET_CART: '/v1/cart',
  ADD_TO_CART: '/v1/cart',
  UPDATE_CART: '/v1/cart',
  REMOVE_FROM_CART: '/v1/cart',
  CLEAR_CART: '/v1/cart/clear',

  // Orders
  GET_ORDERS: '/v1/orders',
  GET_ORDER: '/v1/orders',
  CREATE_ORDER: '/v1/orders',
  UPDATE_ORDER: '/v1/orders',
  CANCEL_ORDER: '/v1/orders',
};

export default API_URLS;