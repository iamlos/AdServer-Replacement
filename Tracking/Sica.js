
var ttCampaignName="Test";

function ttTrackStageClickSica(sVar, campaignName) {
    var overrides = {};

    sVar.linkTrackVars="eVar11,eVar13,eVar14,eVar47,pageName,prop16,prop58,prop70,prop72,pro73,events";
    sVar.linkTrackEvents="event18";
    overrides.events="event18";
    overrides.eVar11="AdTarget|StageClick|${campaign.name}|"+campaignName;
    overrides.eVar13="AdTarget|${campaign.name}|"+campaignName;
    sVar.tl(true, "o", "AdTarget|StageClick|${campaign.name}|"+campaignName, overrides);
}

function ttTrackStageViewSica(sVar, campaignName) {
    var overrides = {};
    sVar.linkTrackVars="eVar11,eVar13,eVar14,eVar47,pageName,prop16,prop58,prop70,prop72,pro73,events";
    sVar.linkTrackEvents="event17";
    sVar.events="event17";
    if (!(sVar11.indexOf("StageClick") > -1))
        overrides.eVar11="AdTarget|StageView|${campaign.name}|"+campaignName;
    sVar.eVar13="AdTarget|${campaign.name}|"+campaignName;
    sVar.tl(true, "o", "AdTarget|StageView|${campaign.name}|"+campaignName, overrides);
}

// mboxDefine rauslöschen
// Snippet zu oberst reinkopieren
// ttCampaignName setzen
// erstze mboxUpdate('AD_Stage_Click') -> ttTrackStageClickSica(s_one, ttCampaignName);
// nach ttStart(); am Schluss -> ttTrackStageViewSica(s_one, ttCampaignName);