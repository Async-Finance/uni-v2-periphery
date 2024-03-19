import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Router02", (m) => {
  const factory = m.getParameter("factory");
  const wrapToken = m.getParameter("wrapToken");
  const router02 = m.contract("UniswapV2Router02", [factory, wrapToken]);

  return { router02 };
});