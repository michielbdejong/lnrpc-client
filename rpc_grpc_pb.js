// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rpc_pb = require('./rpc_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_lnrpc_AddInvoiceResponse(arg) {
  if (!(arg instanceof rpc_pb.AddInvoiceResponse)) {
    throw new Error('Expected argument of type lnrpc.AddInvoiceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_AddInvoiceResponse(buffer_arg) {
  return rpc_pb.AddInvoiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ChanInfoRequest(arg) {
  if (!(arg instanceof rpc_pb.ChanInfoRequest)) {
    throw new Error('Expected argument of type lnrpc.ChanInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ChanInfoRequest(buffer_arg) {
  return rpc_pb.ChanInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ChannelBalanceRequest(arg) {
  if (!(arg instanceof rpc_pb.ChannelBalanceRequest)) {
    throw new Error('Expected argument of type lnrpc.ChannelBalanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ChannelBalanceRequest(buffer_arg) {
  return rpc_pb.ChannelBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ChannelBalanceResponse(arg) {
  if (!(arg instanceof rpc_pb.ChannelBalanceResponse)) {
    throw new Error('Expected argument of type lnrpc.ChannelBalanceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ChannelBalanceResponse(buffer_arg) {
  return rpc_pb.ChannelBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ChannelEdge(arg) {
  if (!(arg instanceof rpc_pb.ChannelEdge)) {
    throw new Error('Expected argument of type lnrpc.ChannelEdge');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ChannelEdge(buffer_arg) {
  return rpc_pb.ChannelEdge.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ChannelGraph(arg) {
  if (!(arg instanceof rpc_pb.ChannelGraph)) {
    throw new Error('Expected argument of type lnrpc.ChannelGraph');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ChannelGraph(buffer_arg) {
  return rpc_pb.ChannelGraph.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ChannelGraphRequest(arg) {
  if (!(arg instanceof rpc_pb.ChannelGraphRequest)) {
    throw new Error('Expected argument of type lnrpc.ChannelGraphRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ChannelGraphRequest(buffer_arg) {
  return rpc_pb.ChannelGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ChannelPoint(arg) {
  if (!(arg instanceof rpc_pb.ChannelPoint)) {
    throw new Error('Expected argument of type lnrpc.ChannelPoint');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ChannelPoint(buffer_arg) {
  return rpc_pb.ChannelPoint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_CloseChannelRequest(arg) {
  if (!(arg instanceof rpc_pb.CloseChannelRequest)) {
    throw new Error('Expected argument of type lnrpc.CloseChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_CloseChannelRequest(buffer_arg) {
  return rpc_pb.CloseChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_CloseStatusUpdate(arg) {
  if (!(arg instanceof rpc_pb.CloseStatusUpdate)) {
    throw new Error('Expected argument of type lnrpc.CloseStatusUpdate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_CloseStatusUpdate(buffer_arg) {
  return rpc_pb.CloseStatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ConnectPeerRequest(arg) {
  if (!(arg instanceof rpc_pb.ConnectPeerRequest)) {
    throw new Error('Expected argument of type lnrpc.ConnectPeerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ConnectPeerRequest(buffer_arg) {
  return rpc_pb.ConnectPeerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ConnectPeerResponse(arg) {
  if (!(arg instanceof rpc_pb.ConnectPeerResponse)) {
    throw new Error('Expected argument of type lnrpc.ConnectPeerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ConnectPeerResponse(buffer_arg) {
  return rpc_pb.ConnectPeerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_DebugLevelRequest(arg) {
  if (!(arg instanceof rpc_pb.DebugLevelRequest)) {
    throw new Error('Expected argument of type lnrpc.DebugLevelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_DebugLevelRequest(buffer_arg) {
  return rpc_pb.DebugLevelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_DebugLevelResponse(arg) {
  if (!(arg instanceof rpc_pb.DebugLevelResponse)) {
    throw new Error('Expected argument of type lnrpc.DebugLevelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_DebugLevelResponse(buffer_arg) {
  return rpc_pb.DebugLevelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_DeleteAllPaymentsRequest(arg) {
  if (!(arg instanceof rpc_pb.DeleteAllPaymentsRequest)) {
    throw new Error('Expected argument of type lnrpc.DeleteAllPaymentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_DeleteAllPaymentsRequest(buffer_arg) {
  return rpc_pb.DeleteAllPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_DeleteAllPaymentsResponse(arg) {
  if (!(arg instanceof rpc_pb.DeleteAllPaymentsResponse)) {
    throw new Error('Expected argument of type lnrpc.DeleteAllPaymentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_DeleteAllPaymentsResponse(buffer_arg) {
  return rpc_pb.DeleteAllPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_GetInfoRequest(arg) {
  if (!(arg instanceof rpc_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type lnrpc.GetInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_GetInfoRequest(buffer_arg) {
  return rpc_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_GetInfoResponse(arg) {
  if (!(arg instanceof rpc_pb.GetInfoResponse)) {
    throw new Error('Expected argument of type lnrpc.GetInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_GetInfoResponse(buffer_arg) {
  return rpc_pb.GetInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_GetTransactionsRequest(arg) {
  if (!(arg instanceof rpc_pb.GetTransactionsRequest)) {
    throw new Error('Expected argument of type lnrpc.GetTransactionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_GetTransactionsRequest(buffer_arg) {
  return rpc_pb.GetTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_Invoice(arg) {
  if (!(arg instanceof rpc_pb.Invoice)) {
    throw new Error('Expected argument of type lnrpc.Invoice');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_Invoice(buffer_arg) {
  return rpc_pb.Invoice.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_InvoiceSubscription(arg) {
  if (!(arg instanceof rpc_pb.InvoiceSubscription)) {
    throw new Error('Expected argument of type lnrpc.InvoiceSubscription');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_InvoiceSubscription(buffer_arg) {
  return rpc_pb.InvoiceSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListChannelsRequest(arg) {
  if (!(arg instanceof rpc_pb.ListChannelsRequest)) {
    throw new Error('Expected argument of type lnrpc.ListChannelsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListChannelsRequest(buffer_arg) {
  return rpc_pb.ListChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListChannelsResponse(arg) {
  if (!(arg instanceof rpc_pb.ListChannelsResponse)) {
    throw new Error('Expected argument of type lnrpc.ListChannelsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListChannelsResponse(buffer_arg) {
  return rpc_pb.ListChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListInvoiceRequest(arg) {
  if (!(arg instanceof rpc_pb.ListInvoiceRequest)) {
    throw new Error('Expected argument of type lnrpc.ListInvoiceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListInvoiceRequest(buffer_arg) {
  return rpc_pb.ListInvoiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListInvoiceResponse(arg) {
  if (!(arg instanceof rpc_pb.ListInvoiceResponse)) {
    throw new Error('Expected argument of type lnrpc.ListInvoiceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListInvoiceResponse(buffer_arg) {
  return rpc_pb.ListInvoiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListPaymentsRequest(arg) {
  if (!(arg instanceof rpc_pb.ListPaymentsRequest)) {
    throw new Error('Expected argument of type lnrpc.ListPaymentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListPaymentsRequest(buffer_arg) {
  return rpc_pb.ListPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListPaymentsResponse(arg) {
  if (!(arg instanceof rpc_pb.ListPaymentsResponse)) {
    throw new Error('Expected argument of type lnrpc.ListPaymentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListPaymentsResponse(buffer_arg) {
  return rpc_pb.ListPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListPeersRequest(arg) {
  if (!(arg instanceof rpc_pb.ListPeersRequest)) {
    throw new Error('Expected argument of type lnrpc.ListPeersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListPeersRequest(buffer_arg) {
  return rpc_pb.ListPeersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_ListPeersResponse(arg) {
  if (!(arg instanceof rpc_pb.ListPeersResponse)) {
    throw new Error('Expected argument of type lnrpc.ListPeersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_ListPeersResponse(buffer_arg) {
  return rpc_pb.ListPeersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_NetworkInfo(arg) {
  if (!(arg instanceof rpc_pb.NetworkInfo)) {
    throw new Error('Expected argument of type lnrpc.NetworkInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_NetworkInfo(buffer_arg) {
  return rpc_pb.NetworkInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_NetworkInfoRequest(arg) {
  if (!(arg instanceof rpc_pb.NetworkInfoRequest)) {
    throw new Error('Expected argument of type lnrpc.NetworkInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_NetworkInfoRequest(buffer_arg) {
  return rpc_pb.NetworkInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_NewAddressRequest(arg) {
  if (!(arg instanceof rpc_pb.NewAddressRequest)) {
    throw new Error('Expected argument of type lnrpc.NewAddressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_NewAddressRequest(buffer_arg) {
  return rpc_pb.NewAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_NewAddressResponse(arg) {
  if (!(arg instanceof rpc_pb.NewAddressResponse)) {
    throw new Error('Expected argument of type lnrpc.NewAddressResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_NewAddressResponse(buffer_arg) {
  return rpc_pb.NewAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_NewWitnessAddressRequest(arg) {
  if (!(arg instanceof rpc_pb.NewWitnessAddressRequest)) {
    throw new Error('Expected argument of type lnrpc.NewWitnessAddressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_NewWitnessAddressRequest(buffer_arg) {
  return rpc_pb.NewWitnessAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_NodeInfo(arg) {
  if (!(arg instanceof rpc_pb.NodeInfo)) {
    throw new Error('Expected argument of type lnrpc.NodeInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_NodeInfo(buffer_arg) {
  return rpc_pb.NodeInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_NodeInfoRequest(arg) {
  if (!(arg instanceof rpc_pb.NodeInfoRequest)) {
    throw new Error('Expected argument of type lnrpc.NodeInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_NodeInfoRequest(buffer_arg) {
  return rpc_pb.NodeInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_OpenChannelRequest(arg) {
  if (!(arg instanceof rpc_pb.OpenChannelRequest)) {
    throw new Error('Expected argument of type lnrpc.OpenChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_OpenChannelRequest(buffer_arg) {
  return rpc_pb.OpenChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_OpenStatusUpdate(arg) {
  if (!(arg instanceof rpc_pb.OpenStatusUpdate)) {
    throw new Error('Expected argument of type lnrpc.OpenStatusUpdate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_OpenStatusUpdate(buffer_arg) {
  return rpc_pb.OpenStatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_PayReq(arg) {
  if (!(arg instanceof rpc_pb.PayReq)) {
    throw new Error('Expected argument of type lnrpc.PayReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_PayReq(buffer_arg) {
  return rpc_pb.PayReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_PayReqString(arg) {
  if (!(arg instanceof rpc_pb.PayReqString)) {
    throw new Error('Expected argument of type lnrpc.PayReqString');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_PayReqString(buffer_arg) {
  return rpc_pb.PayReqString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_PaymentHash(arg) {
  if (!(arg instanceof rpc_pb.PaymentHash)) {
    throw new Error('Expected argument of type lnrpc.PaymentHash');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_PaymentHash(buffer_arg) {
  return rpc_pb.PaymentHash.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_PendingChannelRequest(arg) {
  if (!(arg instanceof rpc_pb.PendingChannelRequest)) {
    throw new Error('Expected argument of type lnrpc.PendingChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_PendingChannelRequest(buffer_arg) {
  return rpc_pb.PendingChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_PendingChannelResponse(arg) {
  if (!(arg instanceof rpc_pb.PendingChannelResponse)) {
    throw new Error('Expected argument of type lnrpc.PendingChannelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_PendingChannelResponse(buffer_arg) {
  return rpc_pb.PendingChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_Route(arg) {
  if (!(arg instanceof rpc_pb.Route)) {
    throw new Error('Expected argument of type lnrpc.Route');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_Route(buffer_arg) {
  return rpc_pb.Route.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_RouteRequest(arg) {
  if (!(arg instanceof rpc_pb.RouteRequest)) {
    throw new Error('Expected argument of type lnrpc.RouteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_RouteRequest(buffer_arg) {
  return rpc_pb.RouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendCoinsRequest(arg) {
  if (!(arg instanceof rpc_pb.SendCoinsRequest)) {
    throw new Error('Expected argument of type lnrpc.SendCoinsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SendCoinsRequest(buffer_arg) {
  return rpc_pb.SendCoinsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendCoinsResponse(arg) {
  if (!(arg instanceof rpc_pb.SendCoinsResponse)) {
    throw new Error('Expected argument of type lnrpc.SendCoinsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SendCoinsResponse(buffer_arg) {
  return rpc_pb.SendCoinsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendManyRequest(arg) {
  if (!(arg instanceof rpc_pb.SendManyRequest)) {
    throw new Error('Expected argument of type lnrpc.SendManyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SendManyRequest(buffer_arg) {
  return rpc_pb.SendManyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendManyResponse(arg) {
  if (!(arg instanceof rpc_pb.SendManyResponse)) {
    throw new Error('Expected argument of type lnrpc.SendManyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SendManyResponse(buffer_arg) {
  return rpc_pb.SendManyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendRequest(arg) {
  if (!(arg instanceof rpc_pb.SendRequest)) {
    throw new Error('Expected argument of type lnrpc.SendRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SendRequest(buffer_arg) {
  return rpc_pb.SendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SendResponse(arg) {
  if (!(arg instanceof rpc_pb.SendResponse)) {
    throw new Error('Expected argument of type lnrpc.SendResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SendResponse(buffer_arg) {
  return rpc_pb.SendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SetAliasRequest(arg) {
  if (!(arg instanceof rpc_pb.SetAliasRequest)) {
    throw new Error('Expected argument of type lnrpc.SetAliasRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SetAliasRequest(buffer_arg) {
  return rpc_pb.SetAliasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_SetAliasResponse(arg) {
  if (!(arg instanceof rpc_pb.SetAliasResponse)) {
    throw new Error('Expected argument of type lnrpc.SetAliasResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_SetAliasResponse(buffer_arg) {
  return rpc_pb.SetAliasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_Transaction(arg) {
  if (!(arg instanceof rpc_pb.Transaction)) {
    throw new Error('Expected argument of type lnrpc.Transaction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_Transaction(buffer_arg) {
  return rpc_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_TransactionDetails(arg) {
  if (!(arg instanceof rpc_pb.TransactionDetails)) {
    throw new Error('Expected argument of type lnrpc.TransactionDetails');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_TransactionDetails(buffer_arg) {
  return rpc_pb.TransactionDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_WalletBalanceRequest(arg) {
  if (!(arg instanceof rpc_pb.WalletBalanceRequest)) {
    throw new Error('Expected argument of type lnrpc.WalletBalanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_WalletBalanceRequest(buffer_arg) {
  return rpc_pb.WalletBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lnrpc_WalletBalanceResponse(arg) {
  if (!(arg instanceof rpc_pb.WalletBalanceResponse)) {
    throw new Error('Expected argument of type lnrpc.WalletBalanceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_lnrpc_WalletBalanceResponse(buffer_arg) {
  return rpc_pb.WalletBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LightningService = exports.LightningService = {
  walletBalance: {
    path: '/lnrpc.Lightning/WalletBalance',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.WalletBalanceRequest,
    responseType: rpc_pb.WalletBalanceResponse,
    requestSerialize: serialize_lnrpc_WalletBalanceRequest,
    requestDeserialize: deserialize_lnrpc_WalletBalanceRequest,
    responseSerialize: serialize_lnrpc_WalletBalanceResponse,
    responseDeserialize: deserialize_lnrpc_WalletBalanceResponse,
  },
  channelBalance: {
    path: '/lnrpc.Lightning/ChannelBalance',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ChannelBalanceRequest,
    responseType: rpc_pb.ChannelBalanceResponse,
    requestSerialize: serialize_lnrpc_ChannelBalanceRequest,
    requestDeserialize: deserialize_lnrpc_ChannelBalanceRequest,
    responseSerialize: serialize_lnrpc_ChannelBalanceResponse,
    responseDeserialize: deserialize_lnrpc_ChannelBalanceResponse,
  },
  getTransactions: {
    path: '/lnrpc.Lightning/GetTransactions',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.GetTransactionsRequest,
    responseType: rpc_pb.TransactionDetails,
    requestSerialize: serialize_lnrpc_GetTransactionsRequest,
    requestDeserialize: deserialize_lnrpc_GetTransactionsRequest,
    responseSerialize: serialize_lnrpc_TransactionDetails,
    responseDeserialize: deserialize_lnrpc_TransactionDetails,
  },
  sendCoins: {
    path: '/lnrpc.Lightning/SendCoins',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.SendCoinsRequest,
    responseType: rpc_pb.SendCoinsResponse,
    requestSerialize: serialize_lnrpc_SendCoinsRequest,
    requestDeserialize: deserialize_lnrpc_SendCoinsRequest,
    responseSerialize: serialize_lnrpc_SendCoinsResponse,
    responseDeserialize: deserialize_lnrpc_SendCoinsResponse,
  },
  subscribeTransactions: {
    path: '/lnrpc.Lightning/SubscribeTransactions',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.GetTransactionsRequest,
    responseType: rpc_pb.Transaction,
    requestSerialize: serialize_lnrpc_GetTransactionsRequest,
    requestDeserialize: deserialize_lnrpc_GetTransactionsRequest,
    responseSerialize: serialize_lnrpc_Transaction,
    responseDeserialize: deserialize_lnrpc_Transaction,
  },
  sendMany: {
    path: '/lnrpc.Lightning/SendMany',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.SendManyRequest,
    responseType: rpc_pb.SendManyResponse,
    requestSerialize: serialize_lnrpc_SendManyRequest,
    requestDeserialize: deserialize_lnrpc_SendManyRequest,
    responseSerialize: serialize_lnrpc_SendManyResponse,
    responseDeserialize: deserialize_lnrpc_SendManyResponse,
  },
  newAddress: {
    path: '/lnrpc.Lightning/NewAddress',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.NewAddressRequest,
    responseType: rpc_pb.NewAddressResponse,
    requestSerialize: serialize_lnrpc_NewAddressRequest,
    requestDeserialize: deserialize_lnrpc_NewAddressRequest,
    responseSerialize: serialize_lnrpc_NewAddressResponse,
    responseDeserialize: deserialize_lnrpc_NewAddressResponse,
  },
  newWitnessAddress: {
    path: '/lnrpc.Lightning/NewWitnessAddress',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.NewWitnessAddressRequest,
    responseType: rpc_pb.NewAddressResponse,
    requestSerialize: serialize_lnrpc_NewWitnessAddressRequest,
    requestDeserialize: deserialize_lnrpc_NewWitnessAddressRequest,
    responseSerialize: serialize_lnrpc_NewAddressResponse,
    responseDeserialize: deserialize_lnrpc_NewAddressResponse,
  },
  connectPeer: {
    path: '/lnrpc.Lightning/ConnectPeer',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ConnectPeerRequest,
    responseType: rpc_pb.ConnectPeerResponse,
    requestSerialize: serialize_lnrpc_ConnectPeerRequest,
    requestDeserialize: deserialize_lnrpc_ConnectPeerRequest,
    responseSerialize: serialize_lnrpc_ConnectPeerResponse,
    responseDeserialize: deserialize_lnrpc_ConnectPeerResponse,
  },
  listPeers: {
    path: '/lnrpc.Lightning/ListPeers',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ListPeersRequest,
    responseType: rpc_pb.ListPeersResponse,
    requestSerialize: serialize_lnrpc_ListPeersRequest,
    requestDeserialize: deserialize_lnrpc_ListPeersRequest,
    responseSerialize: serialize_lnrpc_ListPeersResponse,
    responseDeserialize: deserialize_lnrpc_ListPeersResponse,
  },
  getInfo: {
    path: '/lnrpc.Lightning/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.GetInfoRequest,
    responseType: rpc_pb.GetInfoResponse,
    requestSerialize: serialize_lnrpc_GetInfoRequest,
    requestDeserialize: deserialize_lnrpc_GetInfoRequest,
    responseSerialize: serialize_lnrpc_GetInfoResponse,
    responseDeserialize: deserialize_lnrpc_GetInfoResponse,
  },
  // TODO(roasbeef): merge with below with bool?
  pendingChannels: {
    path: '/lnrpc.Lightning/PendingChannels',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.PendingChannelRequest,
    responseType: rpc_pb.PendingChannelResponse,
    requestSerialize: serialize_lnrpc_PendingChannelRequest,
    requestDeserialize: deserialize_lnrpc_PendingChannelRequest,
    responseSerialize: serialize_lnrpc_PendingChannelResponse,
    responseDeserialize: deserialize_lnrpc_PendingChannelResponse,
  },
  listChannels: {
    path: '/lnrpc.Lightning/ListChannels',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ListChannelsRequest,
    responseType: rpc_pb.ListChannelsResponse,
    requestSerialize: serialize_lnrpc_ListChannelsRequest,
    requestDeserialize: deserialize_lnrpc_ListChannelsRequest,
    responseSerialize: serialize_lnrpc_ListChannelsResponse,
    responseDeserialize: deserialize_lnrpc_ListChannelsResponse,
  },
  openChannelSync: {
    path: '/lnrpc.Lightning/OpenChannelSync',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.OpenChannelRequest,
    responseType: rpc_pb.ChannelPoint,
    requestSerialize: serialize_lnrpc_OpenChannelRequest,
    requestDeserialize: deserialize_lnrpc_OpenChannelRequest,
    responseSerialize: serialize_lnrpc_ChannelPoint,
    responseDeserialize: deserialize_lnrpc_ChannelPoint,
  },
  openChannel: {
    path: '/lnrpc.Lightning/OpenChannel',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.OpenChannelRequest,
    responseType: rpc_pb.OpenStatusUpdate,
    requestSerialize: serialize_lnrpc_OpenChannelRequest,
    requestDeserialize: deserialize_lnrpc_OpenChannelRequest,
    responseSerialize: serialize_lnrpc_OpenStatusUpdate,
    responseDeserialize: deserialize_lnrpc_OpenStatusUpdate,
  },
  closeChannel: {
    path: '/lnrpc.Lightning/CloseChannel',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.CloseChannelRequest,
    responseType: rpc_pb.CloseStatusUpdate,
    requestSerialize: serialize_lnrpc_CloseChannelRequest,
    requestDeserialize: deserialize_lnrpc_CloseChannelRequest,
    responseSerialize: serialize_lnrpc_CloseStatusUpdate,
    responseDeserialize: deserialize_lnrpc_CloseStatusUpdate,
  },
  sendPayment: {
    path: '/lnrpc.Lightning/SendPayment',
    requestStream: true,
    responseStream: true,
    requestType: rpc_pb.SendRequest,
    responseType: rpc_pb.SendResponse,
    requestSerialize: serialize_lnrpc_SendRequest,
    requestDeserialize: deserialize_lnrpc_SendRequest,
    responseSerialize: serialize_lnrpc_SendResponse,
    responseDeserialize: deserialize_lnrpc_SendResponse,
  },
  sendPaymentSync: {
    path: '/lnrpc.Lightning/SendPaymentSync',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.SendRequest,
    responseType: rpc_pb.SendResponse,
    requestSerialize: serialize_lnrpc_SendRequest,
    requestDeserialize: deserialize_lnrpc_SendRequest,
    responseSerialize: serialize_lnrpc_SendResponse,
    responseDeserialize: deserialize_lnrpc_SendResponse,
  },
  addInvoice: {
    path: '/lnrpc.Lightning/AddInvoice',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.Invoice,
    responseType: rpc_pb.AddInvoiceResponse,
    requestSerialize: serialize_lnrpc_Invoice,
    requestDeserialize: deserialize_lnrpc_Invoice,
    responseSerialize: serialize_lnrpc_AddInvoiceResponse,
    responseDeserialize: deserialize_lnrpc_AddInvoiceResponse,
  },
  listInvoices: {
    path: '/lnrpc.Lightning/ListInvoices',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ListInvoiceRequest,
    responseType: rpc_pb.ListInvoiceResponse,
    requestSerialize: serialize_lnrpc_ListInvoiceRequest,
    requestDeserialize: deserialize_lnrpc_ListInvoiceRequest,
    responseSerialize: serialize_lnrpc_ListInvoiceResponse,
    responseDeserialize: deserialize_lnrpc_ListInvoiceResponse,
  },
  lookupInvoice: {
    path: '/lnrpc.Lightning/LookupInvoice',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.PaymentHash,
    responseType: rpc_pb.Invoice,
    requestSerialize: serialize_lnrpc_PaymentHash,
    requestDeserialize: deserialize_lnrpc_PaymentHash,
    responseSerialize: serialize_lnrpc_Invoice,
    responseDeserialize: deserialize_lnrpc_Invoice,
  },
  subscribeInvoices: {
    path: '/lnrpc.Lightning/SubscribeInvoices',
    requestStream: false,
    responseStream: true,
    requestType: rpc_pb.InvoiceSubscription,
    responseType: rpc_pb.Invoice,
    requestSerialize: serialize_lnrpc_InvoiceSubscription,
    requestDeserialize: deserialize_lnrpc_InvoiceSubscription,
    responseSerialize: serialize_lnrpc_Invoice,
    responseDeserialize: deserialize_lnrpc_Invoice,
  },
  decodePayReq: {
    path: '/lnrpc.Lightning/DecodePayReq',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.PayReqString,
    responseType: rpc_pb.PayReq,
    requestSerialize: serialize_lnrpc_PayReqString,
    requestDeserialize: deserialize_lnrpc_PayReqString,
    responseSerialize: serialize_lnrpc_PayReq,
    responseDeserialize: deserialize_lnrpc_PayReq,
  },
  listPayments: {
    path: '/lnrpc.Lightning/ListPayments',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ListPaymentsRequest,
    responseType: rpc_pb.ListPaymentsResponse,
    requestSerialize: serialize_lnrpc_ListPaymentsRequest,
    requestDeserialize: deserialize_lnrpc_ListPaymentsRequest,
    responseSerialize: serialize_lnrpc_ListPaymentsResponse,
    responseDeserialize: deserialize_lnrpc_ListPaymentsResponse,
  },
  deleteAllPayments: {
    path: '/lnrpc.Lightning/DeleteAllPayments',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.DeleteAllPaymentsRequest,
    responseType: rpc_pb.DeleteAllPaymentsResponse,
    requestSerialize: serialize_lnrpc_DeleteAllPaymentsRequest,
    requestDeserialize: deserialize_lnrpc_DeleteAllPaymentsRequest,
    responseSerialize: serialize_lnrpc_DeleteAllPaymentsResponse,
    responseDeserialize: deserialize_lnrpc_DeleteAllPaymentsResponse,
  },
  describeGraph: {
    path: '/lnrpc.Lightning/DescribeGraph',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ChannelGraphRequest,
    responseType: rpc_pb.ChannelGraph,
    requestSerialize: serialize_lnrpc_ChannelGraphRequest,
    requestDeserialize: deserialize_lnrpc_ChannelGraphRequest,
    responseSerialize: serialize_lnrpc_ChannelGraph,
    responseDeserialize: deserialize_lnrpc_ChannelGraph,
  },
  getChanInfo: {
    path: '/lnrpc.Lightning/GetChanInfo',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.ChanInfoRequest,
    responseType: rpc_pb.ChannelEdge,
    requestSerialize: serialize_lnrpc_ChanInfoRequest,
    requestDeserialize: deserialize_lnrpc_ChanInfoRequest,
    responseSerialize: serialize_lnrpc_ChannelEdge,
    responseDeserialize: deserialize_lnrpc_ChannelEdge,
  },
  getNodeInfo: {
    path: '/lnrpc.Lightning/GetNodeInfo',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.NodeInfoRequest,
    responseType: rpc_pb.NodeInfo,
    requestSerialize: serialize_lnrpc_NodeInfoRequest,
    requestDeserialize: deserialize_lnrpc_NodeInfoRequest,
    responseSerialize: serialize_lnrpc_NodeInfo,
    responseDeserialize: deserialize_lnrpc_NodeInfo,
  },
  queryRoute: {
    path: '/lnrpc.Lightning/QueryRoute',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RouteRequest,
    responseType: rpc_pb.Route,
    requestSerialize: serialize_lnrpc_RouteRequest,
    requestDeserialize: deserialize_lnrpc_RouteRequest,
    responseSerialize: serialize_lnrpc_Route,
    responseDeserialize: deserialize_lnrpc_Route,
  },
  getNetworkInfo: {
    path: '/lnrpc.Lightning/GetNetworkInfo',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.NetworkInfoRequest,
    responseType: rpc_pb.NetworkInfo,
    requestSerialize: serialize_lnrpc_NetworkInfoRequest,
    requestDeserialize: deserialize_lnrpc_NetworkInfoRequest,
    responseSerialize: serialize_lnrpc_NetworkInfo,
    responseDeserialize: deserialize_lnrpc_NetworkInfo,
  },
  setAlias: {
    path: '/lnrpc.Lightning/SetAlias',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.SetAliasRequest,
    responseType: rpc_pb.SetAliasResponse,
    requestSerialize: serialize_lnrpc_SetAliasRequest,
    requestDeserialize: deserialize_lnrpc_SetAliasRequest,
    responseSerialize: serialize_lnrpc_SetAliasResponse,
    responseDeserialize: deserialize_lnrpc_SetAliasResponse,
  },
  debugLevel: {
    path: '/lnrpc.Lightning/DebugLevel',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.DebugLevelRequest,
    responseType: rpc_pb.DebugLevelResponse,
    requestSerialize: serialize_lnrpc_DebugLevelRequest,
    requestDeserialize: deserialize_lnrpc_DebugLevelRequest,
    responseSerialize: serialize_lnrpc_DebugLevelResponse,
    responseDeserialize: deserialize_lnrpc_DebugLevelResponse,
  },
};

exports.LightningClient = grpc.makeGenericClientConstructor(LightningService);
