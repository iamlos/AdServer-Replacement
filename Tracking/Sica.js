
var ttCampaignName="Test";

function ttTrackStageClickSica(sVar, campaignName) {
    var overrides = {};

    sVar.linkTrackVars="eVar11,eVar14,eVar47,pageName,events";
    sVar.linkTrackEvents="event18";

    overrides.pageName=sVar.pageName;
    overrides.events="event18";
    overrides.eVar11="AdTarget|StageClick|${campaign.name}|"+campaignName;
    overrides.eVar14=sVar.eVar14;
    overrides.eVar47=sVar.eVar47;
    sVar.tl(true, "o", "AdTarget|StageClick", overrides);
}

function ttTrackStageViewSica(sVar, campaignName) {
    var overrides = {};

    sVar.linkTrackVars="eVar11,eVar14,eVar47,pageName,events";
    sVar.linkTrackEvents="event17";

    overrides.pageName=sVar.pageName;
    overrides.events="event17";
    if (!(sVar11.indexOf("StageClick") > -1))
        overrides.eVar11="AdTarget|StageView|${campaign.name}|"+campaignName;
    overrides.eVar14=sVar.eVar14;
    overrides.eVar47=sVar.eVar47;
    sVar.tl(true, "o", "AdTarget|StageView", overrides);
}

// mboxDefine rauslöschen
// Snippet zu oberst reinkopieren
// ttCampaignName setzen
// erstze mboxUpdate('AD_Stage_Click') -> ttTrackStageClickSica(s_one, ttCampaignName);
// nach ttStart(); am Schluss -> ttTrackStageViewSica(s_one, ttCampaignName);