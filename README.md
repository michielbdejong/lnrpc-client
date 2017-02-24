
No code was written in the making this npm package.
It was generated automatically from the `lnrpc/rpc.proto` file in https://github.com/lightningnetwork/lnd, using gRPC tools.

By running `npm test` you can see that this package exposes the entire API of LND v0.1.1-alpha.

To regenerate it, run:

```sh
git clone https://github.com/michielbdejong/lnrpc-client
git clone https://github.com/googleapis/googleapis
cd lnrpc-client
rm -r google/api
cp -r ../../googleapis/google/api google/ # because the `.js` files will be generated next to the `.proto` files
rm rpc.proto
wget https://raw.githubusercontent.com/lightningnetwork/lnd/v0.1.1-alpha/lnrpc/rpc.proto # use wget instead of git clone as long as this is just one file
npm install
npm install -g grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../npm --grpc_out=../npm --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` rpc.proto
npm test
```
