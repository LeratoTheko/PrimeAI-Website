import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { businessContext, dataRecording, businessIntelligence, dataSafety } = body;

    if (!businessContext) {
      return NextResponse.json({ error: "BusinessContext data is required" }, { status: 400 });
    }

    if (!dataRecording) {
      return NextResponse.json({ error: "DataRecording data is required" }, { status: 400 });
    }

    if (!businessIntelligence) {
      return NextResponse.json({ error: "BusinessIntelligence data is required" }, { status: 400 });
    }

    if (!dataSafety) {
      return NextResponse.json({ error: "DataSafety data is required" }, { status: 400 });
    }

    // 1️⃣ Create the main DigitalOperationsAssessment record
    const assessment = await prisma.digitalOperationsAssessment.create({
      data: {},
    });

    const assessmentId = assessment.id;

    // 2️⃣ Create BusinessContext
    await prisma.businessContext.create({
      data: {
        assessmentId,
        devices: businessContext.devices || [],
        deviceCount: businessContext.deviceCount ?? null,
        internetType: businessContext.internetType,
        internetSpeedMbps: businessContext.internetSpeedMbps ?? null,
        internetReliability: businessContext.internetReliability,
        automationTools: businessContext.automationTools || [],
        automatedProcesses: businessContext.automatedProcesses ?? null,
        integratedSystems: businessContext.integratedSystems || [],
        productAnalysisMethods: businessContext.productAnalysisMethods || [],
        dashboardsAvailable: businessContext.dashboardsAvailable ?? false,
      },
    });

    // 3️⃣ Create DataRecording
    await prisma.dataRecording.create({
      data: {
        assessmentId,
        salesRecording: dataRecording.salesRecording,
        expensesRecording: dataRecording.expensesRecording,
        inventoryRecording: dataRecording.inventoryRecording,
        recordBackup: dataRecording.recordBackup,
        updateFrequency: dataRecording.updateFrequency,
        profitReview: dataRecording.profitReview,
        dataAccuracy: dataRecording.dataAccuracy,
        dataCompleteness: dataRecording.dataCompleteness,
        dataConsistency: dataRecording.dataConsistency,
        recordingTools: dataRecording.recordingTools || [],
        automationLevel: dataRecording.automationLevel,
        centralizedStorage: dataRecording.centralizedStorage ?? false,
        accessibility: dataRecording.accessibility,
        sharedAcrossTeams: dataRecording.sharedAcrossTeams ?? false,
        reportsGenerated: dataRecording.reportsGenerated || [],
        decisionSupport: dataRecording.decisionSupport,
        complianceStandards: dataRecording.complianceStandards || [],
        dataRetentionPolicy: dataRecording.dataRetentionPolicy,
      },
    });

    // 4️⃣ Create BusinessIntelligence
    await prisma.businessIntelligence.create({
      data: {
        digitalOpsId: assessmentId,

        biTools: businessIntelligence.biTools || [],
        integrationLevel: businessIntelligence.integrationLevel,
        dataSources: businessIntelligence.dataSources || [],

        historicalDataAvailability: businessIntelligence.historicalDataAvailability,
        forecastModelsUsed: businessIntelligence.forecastModelsUsed || [],
        forecastAccuracy: businessIntelligence.forecastAccuracy,
        forecastFrequency: businessIntelligence.forecastFrequency,

        dashboardUsage: businessIntelligence.dashboardUsage,
        reportsGenerated: businessIntelligence.reportsGenerated || [],
        reportFrequency: businessIntelligence.reportFrequency,
        dataVisualization: businessIntelligence.dataVisualization,
        insightQuality: businessIntelligence.insightQuality,

        decisionBasedOnBI: businessIntelligence.decisionBasedOnBI,
        departmentsUsingBI: businessIntelligence.departmentsUsingBI || [],
        decisionSpeed: businessIntelligence.decisionSpeed,
        biAutomationLevel: businessIntelligence.biAutomationLevel,

        dataGovernanceLevel: businessIntelligence.dataGovernanceLevel,
        biSkills: businessIntelligence.biSkills || [],
        staffBITraining: businessIntelligence.staffBITraining ?? false,
        biChallenges: businessIntelligence.biChallenges || [],
      },
    });

    // 5️⃣ Create DataSafety (NEW BLOCK)
    await prisma.dataSafety.create({
      data: {
        digitalOpsId: assessmentId,

        dataStorage: dataSafety.dataStorage,
        dataClassification: dataSafety.dataClassification,
        dataRetentionPolicy: dataSafety.dataRetentionPolicy,

        recoveryPlan: dataSafety.recoveryPlan,
        backupFrequency: dataSafety.backupFrequency,
        recoveryTesting: dataSafety.recoveryTesting ?? false,

        dataAccessControl: dataSafety.dataAccessControl,
        authenticationMethod: dataSafety.authenticationMethod,
        devicePolicy: dataSafety.devicePolicy,

        encryption: dataSafety.encryption,
        endpointSecurity: dataSafety.endpointSecurity,

        staffTrainingSafety: dataSafety.staffTrainingSafety,
        staffSecurityPolicy: dataSafety.staffSecurityPolicy ?? false,

        regularAudits: dataSafety.regularAudits,
        incidentReporting: dataSafety.incidentReporting,
        lastSecurityIncident: dataSafety.lastSecurityIncident,

        complianceStandards: dataSafety.complianceStandards,
        dataSharingPolicy: dataSafety.dataSharingPolicy,
      },
    });

    return NextResponse.json(
      { success: true, assessmentId },
      { status: 201 }
    );

  } catch (err) {
    console.error("Digital Operations submission error:", err);
    return NextResponse.json({ error: "Failed to submit assessment" }, { status: 500 });
  }
}
