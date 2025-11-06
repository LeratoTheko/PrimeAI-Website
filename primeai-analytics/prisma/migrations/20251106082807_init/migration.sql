-- CreateTable
CREATE TABLE "DigitalCustomerAssessment" (
    "id" TEXT NOT NULL,
    "assessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "overallNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DigitalCustomerAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcquisitionChannelProfile" (
    "id" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "channelTypes" TEXT[],
    "channelCount" INTEGER,
    "diversityNotes" TEXT,
    "digitalToTraditionalRatio" DOUBLE PRECISION,
    "effectivenessMeasure" TEXT,
    "averageConversionRate" DOUBLE PRECISION,
    "journeyIntegrationLevel" TEXT,
    "trackingTools" TEXT[],
    "hasTrackingSystem" BOOLEAN NOT NULL DEFAULT false,
    "trackingNotes" TEXT,
    "knowsTopPerformingChannel" BOOLEAN NOT NULL DEFAULT false,
    "contentMarketFitQuality" TEXT,
    "paidPercentage" DOUBLE PRECISION,
    "organicPercentage" DOUBLE PRECISION,
    "experimentsRunRecently" BOOLEAN NOT NULL DEFAULT false,
    "hasReferralProgram" BOOLEAN NOT NULL DEFAULT false,
    "partnershipExamples" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcquisitionChannelProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerRetentionAssessment" (
    "id" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "overallNotes" TEXT,
    "strategyPlanningScore" INTEGER NOT NULL,
    "strategyPlanningNotes" TEXT,
    "retentionTrackingScore" INTEGER NOT NULL,
    "retentionTrackingNotes" TEXT,
    "relationshipSystemsScore" INTEGER NOT NULL,
    "relationshipSystemsNotes" TEXT,
    "loyaltyRecognitionScore" INTEGER NOT NULL,
    "loyaltyRecognitionNotes" TEXT,
    "experienceMonitoringScore" INTEGER NOT NULL,
    "experienceMonitoringNotes" TEXT,
    "trustRecoveryScore" INTEGER NOT NULL,
    "trustRecoveryNotes" TEXT,
    "customerDataUsageScore" INTEGER NOT NULL,
    "customerDataUsageNotes" TEXT,
    "valueTrackingScore" INTEGER NOT NULL,
    "valueTrackingNotes" TEXT,
    "postSaleEngagementScore" INTEGER NOT NULL,
    "postSaleEngagementNotes" TEXT,
    "outreachFrequencyScore" INTEGER NOT NULL,
    "outreachFrequencyNotes" TEXT,
    "retentionAdaptationScore" INTEGER NOT NULL,
    "retentionAdaptationNotes" TEXT,
    "brandCommunityScore" INTEGER NOT NULL,
    "brandCommunityNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerRetentionAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sme" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "agreed_terms" BOOLEAN NOT NULL,
    "otp_code" TEXT,
    "otp_expires_at" TIMESTAMP(3),
    "is_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Sme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SmeProfile" (
    "id" SERIAL NOT NULL,
    "smes_id" INTEGER NOT NULL,
    "business_name" TEXT NOT NULL,
    "registration_number" TEXT,
    "owner_name" TEXT NOT NULL,
    "owner_gender" TEXT,
    "owner_age_group" TEXT,
    "contact_number" TEXT NOT NULL,
    "email" TEXT,
    "location" TEXT,
    "industry" TEXT,
    "sub_industry" TEXT,
    "nature_of_business" TEXT,
    "customer_types" TEXT,
    "business_size" TEXT,
    "number_of_employees" INTEGER,
    "estimated_monthly_revenue" INTEGER,
    "estimated_monthly_expenses" INTEGER,
    "premises_type" TEXT,

    CONSTRAINT "SmeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sme_email_key" ON "Sme"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SmeProfile_registration_number_key" ON "SmeProfile"("registration_number");

-- AddForeignKey
ALTER TABLE "AcquisitionChannelProfile" ADD CONSTRAINT "AcquisitionChannelProfile_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalCustomerAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerRetentionAssessment" ADD CONSTRAINT "CustomerRetentionAssessment_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "DigitalCustomerAssessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SmeProfile" ADD CONSTRAINT "SmeProfile_smes_id_fkey" FOREIGN KEY ("smes_id") REFERENCES "Sme"("id") ON DELETE CASCADE ON UPDATE CASCADE;
