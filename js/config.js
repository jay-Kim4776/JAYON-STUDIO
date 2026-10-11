/* Public release metadata only. Never put credentials or private repository URLs here. */
window.JCORE_CONFIG = Object.freeze({
  githubOwner: 'jay-Kim4776',
  releaseRepository: 'JCore-Releases',
  timeoutMs: 6000,
  fallback: {
    tag: 'v1.0.29', version: '1.0.29',
    assets: { runtime: 'JCore-Setup.exe', manual: 'JCore_User_Manual_1.0.27.pdf', client: 'JCoreClient.zip', brochure: 'JCore.pptx', simulatorBrochure: 'PLC_Simulator.pptx', simulator: 'PLCSimulator_Setup.exe' }
  },
  assets: {
    simulatorBrochure: { names: ['PLC_Simulator.pptx'] },
    simulator: { names: ['PLCSimulator_Setup.exe', 'PLCSimualator_Setup.exe'] },
    runtime: { names: ['JCore-Setup.exe', 'JCore.msi'], pattern: /^JCore-\d+\.\d+\.\d+-x64\.msi$/i },
    client: { names: ['JCoreClient.zip'], pattern: /^JCoreClient-\d+\.\d+\.\d+\.zip$/i },
    brochure: { names: ['JCore.pptx', 'JCore-Product-Brochure.pdf', 'JAYON.pptx'] },
    manual: { names: ['JCore-Manual.pdf'], pattern: /^JCore_User_Manual_\d+\.\d+\.\d+\.pdf$/i }
  }
});
