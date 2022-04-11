import React, { useEffect, useReducer, useState } from "react";
import Logo from "../../Assets/logo.svg";
import { CharacterSheetBody,CharacterSheetRow, CharacterSheetColumn, CharacterSheetLogo,CharacterSheetTtile, CharacterSheetInput,CharacterSheetBlockRow,CharacterSheetBlockColumn, CharacterSheetInputNumber, CharacterSheetSubTtile,CharacterSheetTextInput, StyledDiv } from "./style";
import {FaPlus, FaTrashAlt } from 'react-icons/fa';
import readCharacter from "../../Services/readCharacter";
import { useParams } from 'react-router-dom'
import MainButton from "../../Components/MainButton";
import updateCharacter from "../../Services/updateCharacter";
import deleteAttacksSpellcasting from "../../Services/deleteAttacksSpellcasting";
import createAttacksSpellcasting from "../../Services/createAttacksSpellcasting";
import updateAttacksSpellcasting from "../../Services/updateAttacksSpellcasting";
import createEquipment from "../../Services/createEquipment";
import updateEquipment from "../../Services/updateEquipment";

const UpdateCharacter = () => {
  const [token,setToken] = useState("");

  const [characterName,setCharacterName]=useState();
  const [vClass,setVClass]=useState();
  const [level,setLevel]=useState();
  const [background,setBackground]=useState();
  const [race,setRace]=useState();
  const [playerName,setPlayerName]=useState();
  const [alignment,setAlignment]=useState();
  const [experience,setExperience]=useState();
  const [bnProficiencyBonus,setBnProficiencyBonus]=useState();
  const [bnInspiration,setBnInspiration]=useState();
  const [bnStrength,setBnStrength]=useState();
  const [bnDexterity,setBnDexterity]=useState();
  const [bnConstituition,setBnConstituition]=useState();
  const [bnIntelligence,setBnIntelligence]=useState();
  const [bnWisdom,setBnWisdom]=useState();
  const [bnCharisma,setBnCharisma]=useState();
  const [skAcrobatics,setSkAcrobatics]=useState();
  const [skAnimalHandling,setSkAnimalHandling]=useState();
  const [skArcana,setSkArcana]=useState();
  const [skAthletics,setSkAthletics]=useState();
  const [skDeception,setSkDeception]=useState();
  const [skHistory,setSkHistory]=useState();
  const [skInsight,setSkInsight]=useState();
  const [skIntimidation,setSkIntimidation]=useState();
  const [skInvestigation,setSkInvestigation]=useState();
  const [skMedicine,setSkMedicine]=useState();
  const [skNature,setSkNature]=useState();
  const [skPersuasion,setSkPersuasion]=useState();
  const [skReligion,setSkReligion]=useState();
  const [skPerception,setSkPerception]=useState();
  const [skPerformance,setSkPerformance]=useState();
  const [skSleightOfHand,setSkSleightOfHand]=useState();
  const [skStealth,setSkStealth]=useState();
  const [skSurvival,setSkSurvival]=useState();
  const [attStrength,setAttStrength]=useState();
  const [attModStrength,setAttModStrength]=useState();
  const [attDexterity,setAttDexterity]=useState();
  const [attModDexterity,setAttModDexterity]=useState();
  const [attConstitution,setAttConstitution]=useState();
  const [attModConstitution,setAttModConstitution]=useState();
  const [attIntelligence,setAttIntelligence]=useState();
  const [attModIntelligence,setAttModIntelligence]=useState();
  const [attWisdom,setAttWisdom]=useState();
  const [attModWisdom,setAttModWisdom]=useState();
  const [attCharisma,setAttCharisma]=useState();
  const [attModCharisma,setAttModCharisma]=useState();
  const [attPassiveWisdom,setAttPassiveWisdom]=useState();
  const [attArmorClass,setAttArmorClass]=useState();
  const [attInitiative,setAttInitiative]=useState();
  const [attSpeed,setAttSpeed]=useState();
  const [attMaxLife,setAttMaxLife]=useState();
  const [attCurrentLife,setAttCurrentLife]=useState();
  const [attLifeDice,setAttLifeDice]=useState();
  const [stkPersonalityTraits,setStkPersonalityTraits]=useState();
  const [stkIdeals,setStkIdeals]=useState();
  const [stkBonds,setStkBonds]=useState();
  const [stkFlaws,setStkFlaws]=useState();
  const [stkOtherProeficienciesLanguages,setStkOtherProeficienciesLanguages]=useState();
  const [stkFeaturesTraits,setStkFeaturesTraits]=useState();
  const [equipmentName,setEquipmentName]=useState();
  const [equipmentDescription,setEquipmentDescription]=useState();
  const [equipmentId,setEquipmentId]=useState(-1);
  const [equipmentAttunement,setEquipmentAttunement]=useState();
  const [cp,setCp]=useState();
  const [sp,setSp]=useState();
  const [ep,setEp]=useState();
  const [gp,setGp]=useState();
  const [pp,setPp]=useState();
  const [attacksSpellcasting,setAttacksSpellcasting]=useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const {characterId} = useParams();
  let [deletedAttacks,setDeletedAttacks]=useState([]);

  const addAttackSpellcasting= async ()=>{
    let attacksSpellcastingList=attacksSpellcasting;
    attacksSpellcastingList.push({
      id:-1,
      name:"",
      attackBonus:0,
      damageType:""
    });
    await setAttacksSpellcasting(attacksSpellcastingList);
    forceUpdate();
  }

  const changeAttackName=async (value,index)=>{
    let attacksSpellcastingList=attacksSpellcasting;
    attacksSpellcastingList[index].name=value;
    await setAttacksSpellcasting(attacksSpellcastingList);
    forceUpdate();
  }

  const changeAttackBonus=async (value,index)=>{
    let attacksSpellcastingList=attacksSpellcasting;
    attacksSpellcastingList[index].attackBonus=value;
    await setAttacksSpellcasting(attacksSpellcastingList);
    forceUpdate();
  }
  const changeAttackDamage=async (value,index)=>{
    let attacksSpellcastingList=attacksSpellcasting;
    attacksSpellcastingList[index].damageType=value;
    await setAttacksSpellcasting(attacksSpellcastingList);
    forceUpdate();
  }

  const deleteAttackSpellcasting=async (index)=>{
    await setAttacksSpellcasting([]);
    let attacksSpellcastingList=attacksSpellcasting;
    let deletedAttacksList=deletedAttacks;
    deletedAttacksList.push(attacksSpellcastingList[index].id);
    attacksSpellcastingList.splice(index,1);
    await setAttacksSpellcasting(attacksSpellcastingList);
    await setDeletedAttacks(deletedAttacksList);
    forceUpdate();
  }



  const setCharacterData=async ()=>{
    let characterData = await readCharacter(token,characterId);
    setCharacterName(characterData.characterName);
    setVClass(characterData.class);
    setLevel(characterData.level);
    setBackground(characterData.background);
    setRace(characterData.race);
    setPlayerName(characterData.playerName);
    setAlignment(characterData.alignment);
    setExperience(characterData.experience);
    setBnProficiencyBonus(characterData.bnProficiencyBonus);
    setBnInspiration(characterData.bnInspiration);
    setBnStrength(characterData.bnStrength);
    setBnDexterity(characterData.bnDexterity);
    setBnConstituition(characterData.bnConstituition);
    setBnIntelligence(characterData.bnIntelligence);
    setBnWisdom(characterData.bnWisdom);
    setBnCharisma(characterData.bnCharisma);
    setSkAcrobatics(characterData.skAcrobatics);
    setSkAnimalHandling(characterData.skAnimalHandling);
    setSkArcana(characterData.skArcana);
    setSkAthletics(characterData.skAthletics);
    setSkDeception(characterData.skDeception);
    setSkHistory(characterData.skHistory);
    setSkInsight(characterData.skInsight);
    setSkIntimidation(characterData.skIntimidation);
    setSkInvestigation(characterData.skInvestigation);
    setSkMedicine(characterData.skMedicine);
    setSkNature(characterData.skNature);
    setSkPersuasion(characterData.skPersuasion);
    setSkReligion(characterData.skReligion);
    setSkPerception(characterData.skPerception);
    setSkPerformance(characterData.skPerformance);
    setSkSleightOfHand(characterData.skSleightOfHand);
    setSkStealth(characterData.skStealth);
    setSkSurvival(characterData.skSurvival);
    setAttStrength(characterData.attStrength);
    setAttModStrength(characterData.attModStrength);
    setAttDexterity(characterData.attDexterity);
    setAttModDexterity(characterData.v);
    setAttConstitution(characterData.attConstitution);
    setAttModConstitution(characterData.attModConstitution);
    setAttIntelligence(characterData.attIntelligence);
    setAttModIntelligence(characterData.attModIntelligence);
    setAttWisdom(characterData.attWisdom);
    setAttModWisdom(characterData.attModWisdom);
    setAttCharisma(characterData.attCharisma);
    setAttModCharisma(characterData.attModCharisma);
    setAttPassiveWisdom(characterData.attPassiveWisdom);
    setAttArmorClass(characterData.attArmorClass);
    setAttInitiative(characterData.attInitiative);
    setAttSpeed(characterData.attSpeed);
    setAttMaxLife(characterData.attMaxLife);
    setAttCurrentLife(characterData.attCurrentLife);
    setAttLifeDice(characterData.attLifeDice);
    setStkPersonalityTraits(characterData.stkPersonalityTraits);
    setStkIdeals(characterData.stkIdeals);
    setStkBonds(characterData.stkBonds);
    setStkFlaws(characterData.stkFlaws);
    setStkOtherProeficienciesLanguages(characterData.stkOtherProeficienciesLanguages);
    setStkFeaturesTraits(characterData.stkFeaturesTraits);
    if(characterData.equipments && characterData.equipments.length>0){
      setEquipmentId(characterData.equipments[0].id);
      setEquipmentName(characterData.equipments[0].name);
      setEquipmentDescription(characterData.equipments[0].description);
      setEquipmentAttunement(characterData.equipments[0].attunement);
      setCp(characterData.equipments[0].cp);
      setSp(characterData.equipments[0].sp);
      setEp(characterData.equipments[0].ep);
      setGp(characterData.equipments[0].gp);
      setPp(characterData.equipments[0].pp);
    }
    if(characterData.attacksAndSpellcasting && characterData.attacksAndSpellcasting.length>0){
      setAttacksSpellcasting(characterData.attacksAndSpellcasting);
    }
  }

  const saveChanges= async()=>{
    const data={
      "characterName":characterName,
      "class":vClass,
      "level":level,
      "background": background,
      "race":race,
      "playerName":playerName,
      "alignment":alignment,
      "experience":experience,
      "bnProficiencyBonus":bnProficiencyBonus,
      "bnInspiration":bnInspiration,
      "bnStrength":bnStrength,
      "bnDexterity":bnDexterity,
      "bnConstituition":bnConstituition,
      "bnIntelligence":bnIntelligence,
      "bnWisdom":bnWisdom,
      "bnCharisma":bnCharisma,
      "skAcrobatics":skAcrobatics,
      "skAnimalHandling":skAnimalHandling,
      "skArcana":skArcana,
      "skAthletics":skAthletics,
      "skDeception":skDeception,
      "skHistory":skHistory,
      "skInsight":skInsight,
      "skIntimidation":skIntimidation,
      "skInvestigation":skInvestigation,
      "skMedicine":skMedicine,
      "skNature":skNature,
      "skPersuasion":skPersuasion,
      "skReligion":skReligion,
      "skPerception":skPerception,
      "skPerformance":skPerformance,
      "skSleightOfHand":skSleightOfHand,
      "skStealth":skStealth,
      "skSurvival":skSurvival,
      "attStrength":attStrength,
      "attModStrength":attModStrength,
      "attDexterity":attDexterity,
      "attModDexterity":attModDexterity,
      "attConstitution":attConstitution,
      "attModConstitution":attModConstitution,
      "attIntelligence":attIntelligence,
      "attModIntelligence":attModIntelligence,
      "attWisdom":attWisdom,
      "attModWisdom":attModWisdom,
      "attCharisma":attCharisma,
      "attModCharisma":attModCharisma,
      "attPassiveWisdom":attPassiveWisdom,
      "attArmorClass":attArmorClass,
      "attInitiative":attInitiative,
      "attSpeed":attSpeed,
      "attMaxLife":attMaxLife,
      "attCurrentLife":attCurrentLife,
      "attLifeDice":attLifeDice,
      "stkPersonalityTraits":stkPersonalityTraits,
      "stkIdeals":stkIdeals,
      "stkBonds":stkBonds,
      "stkFlaws":stkFlaws,
      "stkOtherProeficienciesLanguages":stkOtherProeficienciesLanguages,
      "stkFeaturesTraits":stkFeaturesTraits,
    };
    await updateCharacter(token,characterId,data);
    deletedAttacks.forEach(async (attack)=>{
      if(attack!==-1)
        await deleteAttacksSpellcasting(token,attack);
    });
    attacksSpellcasting.forEach(async (attack)=>{
      let data;
      if(attack.id===-1){
        data={
          "characterSheetId":characterId,
          "name":attack.name,
          "attackBonus":attack.attackBonus,
          "damageType":attack.damageType
        }
        await createAttacksSpellcasting(token,data);
      }
      else{
        data={
          "name":attack.name,
          "attackBonus":attack.attackBonus,
          "damageType":attack.damageType
        };
        await updateAttacksSpellcasting(token,attack.id,data);
      }
    });

    if(equipmentId===-1){
      let data ={
        "characterSheetId":characterId,
        "name":equipmentName,
        "description":equipmentDescription,
        "attunement":equipmentAttunement,
        "cp":cp,
        "ep":ep,
        "pp":pp,
        "gp":gp,
        "sp":sp
      };
      await createEquipment(token,data);
    }
    else{
      let data ={
        "name":equipmentName,
        "description":equipmentDescription,
        "attunement":equipmentAttunement,
        "cp":cp,
        "ep":ep,
        "pp":pp,
        "gp":gp,
        "sp":sp
      };
      await updateEquipment(token,equipmentId,data);
    }
    window.location.reload(false);
  }

  useEffect(()=>{
    let token=localStorage.getItem('userToken')
    if(!token){
      window.location.href = '/'; 
    }

    setToken(token);
  },[]);

  useEffect(()=>{
    setCharacterData();
  },[token])

  useEffect(()=>{
    setCharacterData();
  },[token])


  return (
    <CharacterSheetBody>
      <CharacterSheetRow>
        <CharacterSheetColumn>
          <CharacterSheetRow>
            <CharacterSheetLogo src={Logo}/>
            <CharacterSheetColumn>
              <CharacterSheetTtile>Nome do Personagem:</CharacterSheetTtile>
              <CharacterSheetInput value={characterName} onChange={(event) => setCharacterName(event.target.value)} placeholder="Nome do Personagem"/>
              <CharacterSheetTtile>Nome do Jogador:</CharacterSheetTtile>
              <CharacterSheetInput value={playerName} onChange={(event) => setPlayerName(event.target.value)}  placeholder="Nome do Jogador"/>
            </CharacterSheetColumn>
          </CharacterSheetRow>
        </CharacterSheetColumn>
        <CharacterSheetBlockRow style={{width:"160%"}} >
          <CharacterSheetColumn>
            <CharacterSheetTtile>Classe:</CharacterSheetTtile>
            <CharacterSheetInput value={vClass} onChange={(event) => setVClass(event.target.value)}  placeholder="Classe"/>
            <CharacterSheetTtile>Raça:</CharacterSheetTtile>
            <CharacterSheetInput value={race} onChange={(event) => setRace(event.target.value)}  placeholder="Raça"/>
          </CharacterSheetColumn>
          <CharacterSheetColumn>
            <CharacterSheetTtile>Antecedentes:</CharacterSheetTtile>
            <CharacterSheetInput value={background} onChange={(event) => setBackground(event.target.value)} placeholder="Antecedentes"/>
            <CharacterSheetTtile>Tendência:</CharacterSheetTtile>
            <CharacterSheetInput value={alignment} onChange={(event) => setAlignment(event.target.value)} placeholder="Tendência"/>
          </CharacterSheetColumn>
          <CharacterSheetColumn>
            <CharacterSheetTtile>Nível:</CharacterSheetTtile>
            <CharacterSheetInput value={level} onChange={(event) => setLevel(event.target.value)} placeholder="Nível" type="number" defaultValue={0}/>
            <CharacterSheetTtile>Experiência:</CharacterSheetTtile>
            <CharacterSheetInput value={experience} onChange={(event) => setExperience(event.target.value)} placeholder="Experiência" type="number" defaultValue={0}/>
          </CharacterSheetColumn>
        </CharacterSheetBlockRow>
      </CharacterSheetRow>
      <CharacterSheetRow>
        <CharacterSheetColumn>
          <CharacterSheetRow>
            <CharacterSheetColumn>
              <CharacterSheetBlockColumn>
                <CharacterSheetRow>

                </CharacterSheetRow>
                <CharacterSheetTtile>
                  Força
                </CharacterSheetTtile>
                <CharacterSheetRow>
                  <CharacterSheetInputNumber value={attModStrength} onChange={(event) => setAttModStrength(event.target.value)} style={{width:"2vw"}} type="number" defaultValue={0}/>
                  <CharacterSheetInputNumber value={attStrength} onChange={(event) => setAttStrength(event.target.value)} type="number" defaultValue={0}/>
                </CharacterSheetRow>
                <CharacterSheetTtile>
                  Destreza
                </CharacterSheetTtile>
                <CharacterSheetRow>
                  <CharacterSheetInputNumber value={attModDexterity} onChange={(event) => setAttModDexterity(event.target.value)} style={{width:"2vw"}} type="number" defaultValue={0}/>
                  <CharacterSheetInputNumber value={attDexterity} onChange={(event) => setAttDexterity(event.target.value)} type="number" defaultValue={0}/>
                </CharacterSheetRow>                
                <CharacterSheetTtile>
                  Constituição
                </CharacterSheetTtile>
                <CharacterSheetRow>
                  <CharacterSheetInputNumber value={attModConstitution} onChange={(event) => setAttModConstitution(event.target.value)} style={{width:"2vw"}} type="number" defaultValue={0}/>
                  <CharacterSheetInputNumber value={attConstitution} onChange={(event) => setAttConstitution(event.target.value)} type="number" defaultValue={0}/>
                </CharacterSheetRow>
                <CharacterSheetTtile>
                  Inteligência
                </CharacterSheetTtile>
                <CharacterSheetRow>
                  <CharacterSheetInputNumber value={attModIntelligence} onChange={(event) => setAttModIntelligence(event.target.value)} style={{width:"2vw"}} type="number" defaultValue={0}/>
                  <CharacterSheetInputNumber value={attIntelligence} onChange={(event) => setAttIntelligence(event.target.value)} type="number" defaultValue={0}/>
                </CharacterSheetRow>
                <CharacterSheetTtile>
                  Sabedoria
                </CharacterSheetTtile>
                <CharacterSheetRow>
                  <CharacterSheetInputNumber value={attModWisdom} onChange={(event) => setAttModWisdom(event.target.value)}  style={{width:"2vw"}} type="number" defaultValue={0}/>
                  <CharacterSheetInputNumber value={attWisdom} onChange={(event) => setAttWisdom(event.target.value)}  type="number" defaultValue={0}/>
                </CharacterSheetRow>
                <CharacterSheetTtile>
                  Carisma
                </CharacterSheetTtile>
                <CharacterSheetRow>
                  <CharacterSheetInputNumber value={attModCharisma} onChange={(event) => setAttModCharisma(event.target.value)}  style={{width:"2vw"}} type="number" defaultValue={0}/>
                  <CharacterSheetInputNumber value={attCharisma} onChange={(event) => setAttCharisma(event.target.value)}  type="number" defaultValue={0}/>
                </CharacterSheetRow>
              </CharacterSheetBlockColumn>
              <CharacterSheetBlockColumn>
                <CharacterSheetTtile>Testes de Resistência</CharacterSheetTtile>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={bnStrength} onChange={(event) => setBnStrength(event.target.value)}  style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Força</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={bnDexterity} onChange={(event) => setBnDexterity(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Destreza</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={bnConstituition} onChange={(event) => setBnConstituition(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Constituição</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={bnIntelligence} onChange={(event) => setBnIntelligence(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Inteligência</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={bnWisdom} onChange={(event) => setBnWisdom(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Sabedoria</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={bnCharisma} onChange={(event) => setBnCharisma(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Carisma</CharacterSheetSubTtile>
                </CharacterSheetRow>
              </CharacterSheetBlockColumn>
            </CharacterSheetColumn>
            <CharacterSheetColumn>
              <CharacterSheetBlockRow style={{marginBottom:"6vh"}}>
                <CharacterSheetInputNumber value={bnProficiencyBonus} onChange={(event) => setBnProficiencyBonus(event.target.value)} type="number" defaultValue={0}/>
                <CharacterSheetTtile>Bonus de<br/>Proeficiencia</CharacterSheetTtile>
              </CharacterSheetBlockRow>
              <CharacterSheetBlockColumn>
                <CharacterSheetTtile>Perícias</CharacterSheetTtile>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skAcrobatics} onChange={(event) => setSkAcrobatics(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Acrobacia</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skAnimalHandling} onChange={(event) => setSkAnimalHandling(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Adestrar Animais</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skArcana} onChange={(event) => setSkArcana(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Arcanismo</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skAthletics} onChange={(event) => setSkAthletics(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Atletismo</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skPerformance} onChange={(event) => setSkPerformance(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Atuação</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skDeception} onChange={(event) => setSkDeception(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Enganação</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skStealth} onChange={(event) => setSkStealth(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Furtividade</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skHistory} onChange={(event) => setSkHistory(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>História</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skIntimidation} onChange={(event) => setSkIntimidation(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Intimidação</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skInsight} onChange={(event) => setSkInsight(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Intuição</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skInvestigation} onChange={(event) => setSkInvestigation(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Investigação</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skMedicine} onChange={(event) => setSkMedicine(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Medicina</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skNature} onChange={(event) => setSkNature(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Natureza</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skPerception} onChange={(event) => setSkPerception(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Percepção</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skPersuasion} onChange={(event) => setSkPersuasion(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Persuasão</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skSleightOfHand} onChange={(event) => setSkSleightOfHand(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Prestidigitação</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skReligion} onChange={(event) => setSkReligion(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Religião</CharacterSheetSubTtile>
                </CharacterSheetRow>
                <CharacterSheetRow style={{marginBottom:"0px"}}>
                  <CharacterSheetInputNumber value={skSurvival} onChange={(event) => setSkSurvival(event.target.value)} style={{marginLeft:"0px"}} type="number" defaultValue={0}/>
                  <CharacterSheetSubTtile style={{margin:"auto"}}>Sobrevivência</CharacterSheetSubTtile>
                </CharacterSheetRow>
              </CharacterSheetBlockColumn>
            </CharacterSheetColumn>
          </CharacterSheetRow>
          <CharacterSheetRow>
              <CharacterSheetBlockRow style={{width:"85%"}}>
                <CharacterSheetInputNumber value={bnInspiration} onChange={(event) => setBnInspiration(event.target.value)} type="number" defaultValue={0}/>
                <CharacterSheetTtile>Inspiração</CharacterSheetTtile>
              </CharacterSheetBlockRow>
              <CharacterSheetBlockRow>
                <CharacterSheetInputNumber value={attPassiveWisdom} onChange={(event) => setAttPassiveWisdom(event.target.value)}  type="number" defaultValue={0}/>
                <CharacterSheetTtile>Sabedoria Passiva</CharacterSheetTtile>
              </CharacterSheetBlockRow>
          </CharacterSheetRow>
          <CharacterSheetBlockColumn style={{width:"95%"}}>
            <CharacterSheetTtile>
              Outras Proeficiências e Idiomas
            </CharacterSheetTtile>
            <CharacterSheetTextInput value={stkOtherProeficienciesLanguages} onChange={(event) => setStkOtherProeficienciesLanguages(event.target.value)} style={{height:"15vh"}}/>
          </CharacterSheetBlockColumn>
        </CharacterSheetColumn>
        <CharacterSheetColumn>
          <CharacterSheetBlockRow>
            <CharacterSheetColumn>
              <CharacterSheetTtile>Armadura</CharacterSheetTtile>
              <CharacterSheetInputNumber value={attArmorClass} onChange={(event) => setAttArmorClass(event.target.value)}  style={{marginBottom:"0px",marginTop:"auto"}} type="number" defaultValue={0}/>
            </CharacterSheetColumn>
            <CharacterSheetColumn>
              <CharacterSheetTtile>Iniciativa</CharacterSheetTtile>
              <CharacterSheetInputNumber value={attInitiative} onChange={(event) => setAttInitiative(event.target.value)}  style={{marginBottom:"0px",marginTop:"auto"}} type="number" defaultValue={0}/>
            </CharacterSheetColumn>
            <CharacterSheetColumn>
              <CharacterSheetTtile>Deslocamento</CharacterSheetTtile>
              <CharacterSheetInputNumber value={attSpeed} onChange={(event) => setAttSpeed(event.target.value)}  style={{marginBottom:"0px",marginTop:"auto"}} type="number" defaultValue={0}/>
            </CharacterSheetColumn>
          </CharacterSheetBlockRow>
          <CharacterSheetBlockRow>
            <CharacterSheetTtile>Pontos de vida Máximo</CharacterSheetTtile>
            <CharacterSheetInput value={attMaxLife} onChange={(event) => setAttMaxLife(event.target.value)}  style={{marginRight:"0px",marginLeft:"auto"}} type="number" defaultValue={0}/>
          </CharacterSheetBlockRow>
          <CharacterSheetBlockRow>
            <CharacterSheetTtile>Pontos de vida Atual</CharacterSheetTtile>
            <CharacterSheetInput value={attCurrentLife} onChange={(event) => setAttCurrentLife(event.target.value)}  style={{marginRight:"0px",marginLeft:"auto"}} type="number" defaultValue={0}/>
          </CharacterSheetBlockRow>
          <CharacterSheetBlockRow>
            <CharacterSheetTtile>Dados de Vida</CharacterSheetTtile>
            <CharacterSheetInput value={attLifeDice} onChange={(event) => setAttLifeDice(event.target.value)}  style={{marginRight:"0px",marginLeft:"auto"}} type="number" defaultValue={0}/>
          </CharacterSheetBlockRow>
          <CharacterSheetBlockColumn style={{height:"44vh"}}>
            <CharacterSheetTtile>Ataques e Magias</CharacterSheetTtile>
            <CharacterSheetColumn style={{height:"5vh"}}>
              <CharacterSheetRow>
                <CharacterSheetSubTtile style={{margin:"0px",width:"10vw"}}>
                    Nome
                </CharacterSheetSubTtile>
                <CharacterSheetSubTtile style={{margin:"0px",width:"3vw"}}>
                    Bonus
                </CharacterSheetSubTtile>
                <CharacterSheetSubTtile style={{margin:"0px",width:"8vw"}}>
                    Dano/Tipo
                </CharacterSheetSubTtile>
              </CharacterSheetRow>
            </CharacterSheetColumn>
            <CharacterSheetColumn style={{margin:"0px",marginBottom:"auto",overflowY:"auto",overflowX:"hidden",display:"block",maxHeight:"100%"}}>
               {(attacksSpellcasting.map((attackSpellcasting,index)=>(
                <CharacterSheetRow style={{ marginTop: "1vh" }}>
                  <CharacterSheetInput defaultValue={attackSpellcasting.name} onChange={(event)=>{changeAttackName(event.target.value,index)}} style={{ margin: "0px", width: "10vw" }} />
                  <CharacterSheetInput defaultValue={attackSpellcasting.attackBonus} onChange={(event)=>{changeAttackBonus(event.target.value,index)}} style={{ margin: "0px", width: "3vw" }}  />
                  <CharacterSheetInput defaultValue={attackSpellcasting.damageType} onChange={(event)=>{changeAttackDamage(event.target.value,index)}} style={{ margin: "0px", width: "8vw" }}  />
                  <CharacterSheetTtile style={{ margin: "0px", cursor: "pointer", marginLeft: "2vw" }}><FaTrashAlt onClick={()=>{deleteAttackSpellcasting(index)}} /></CharacterSheetTtile>
                </CharacterSheetRow> 
               )))}
              <CharacterSheetRow>
                <CharacterSheetTtile onClick={()=>addAttackSpellcasting()} style={{margin:"auto",marginTop:"2vh",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.3)",padding:"1rem",borderRadius:"3rem",width:"1rem",height:"1rem",display:"flex",alignItems:"center"}}><FaPlus/></CharacterSheetTtile>
              </CharacterSheetRow>
            </CharacterSheetColumn>
          </CharacterSheetBlockColumn>
          <CharacterSheetBlockColumn style={{height:"50vh"}}>
            <CharacterSheetTtile>Equipamento</CharacterSheetTtile>
            <CharacterSheetRow>
              <CharacterSheetTtile>Nome:</CharacterSheetTtile>
              <CharacterSheetInput value={equipmentName} onChange={(event) => setEquipmentName(event.target.value)}   style={{width:"80%",marginLeft:"auto",marginRight:"3%"}} />
            </CharacterSheetRow>
            <CharacterSheetRow>
              <CharacterSheetTtile>Sintonia:</CharacterSheetTtile>
              <CharacterSheetInput value={equipmentAttunement} onChange={(event) => setEquipmentAttunement(event.target.value)}   style={{width:"80%",marginLeft:"auto",marginRight:"3%"}} />
            </CharacterSheetRow>
            <CharacterSheetRow style={{marginTop:"3vh"}}>
              <CharacterSheetColumn>
                <CharacterSheetRow>
                  <CharacterSheetSubTtile style={{margin:"0px"}}>CP:</CharacterSheetSubTtile>
                  <CharacterSheetInputNumber value={cp} onChange={(event) => setCp(event.target.value)} type="number"/>
                </CharacterSheetRow>
                <CharacterSheetRow>
                  <CharacterSheetSubTtile style={{margin:"0px"}}>SP:</CharacterSheetSubTtile>
                  <CharacterSheetInputNumber value={sp} onChange={(event) => setSp(event.target.value)} type="number" />
                </CharacterSheetRow>
                <CharacterSheetRow>
                  <CharacterSheetSubTtile style={{margin:"0px"}}>EP:</CharacterSheetSubTtile>
                  <CharacterSheetInputNumber value={ep} onChange={(event) => setEp(event.target.value)} type="number" />
                </CharacterSheetRow>
              </CharacterSheetColumn>
              <CharacterSheetColumn>
                <CharacterSheetRow>
                  <CharacterSheetSubTtile style={{margin:"0px"}}>GP:</CharacterSheetSubTtile>
                  <CharacterSheetInputNumber value={gp} onChange={(event) => setGp(event.target.value)} type="number" />
                </CharacterSheetRow>
                <CharacterSheetRow>
                  <CharacterSheetSubTtile style={{margin:"0px"}}>PP:</CharacterSheetSubTtile>
                  <CharacterSheetInputNumber  value={pp} onChange={(event) => setPp(event.target.value)} type="number"/>
                </CharacterSheetRow>
              </CharacterSheetColumn>
            </CharacterSheetRow>
            <CharacterSheetColumn>
              <CharacterSheetSubTtile  style={{margin:"0px"}}>Descrição</CharacterSheetSubTtile>
              <CharacterSheetTextInput value={equipmentDescription} onChange={(event) => setEquipmentDescription(event.target.value)}  style={{height:"20vh"}} />
            </CharacterSheetColumn>
          </CharacterSheetBlockColumn>
        </CharacterSheetColumn>
        <CharacterSheetColumn>
          <CharacterSheetBlockColumn style={{width:"18.5vw"}}>
            <CharacterSheetTtile>Traços de Personalidade</CharacterSheetTtile>
            <CharacterSheetTextInput value={stkPersonalityTraits} onChange={(event) => setStkPersonalityTraits(event.target.value)}  style={{height:"12vh"}}/>
            <CharacterSheetTtile>Ideais</CharacterSheetTtile>
            <CharacterSheetTextInput value={stkIdeals} onChange={(event) => setStkIdeals(event.target.value)}  style={{height:"12vh"}}/>
            <CharacterSheetTtile>Vinculos</CharacterSheetTtile>
            <CharacterSheetTextInput value={stkBonds} onChange={(event) => setStkBonds(event.target.value)}  style={{height:"12vh"}}/>
            <CharacterSheetTtile>Fraquezas</CharacterSheetTtile>
            <CharacterSheetTextInput value={stkFlaws} onChange={(event) => setStkFlaws(event.target.value)}  style={{height:"12vh"}}/>
          </CharacterSheetBlockColumn>
          <CharacterSheetBlockColumn style={{width:"18.5vw"}}>
            <CharacterSheetTtile>Características e Traços</CharacterSheetTtile>
            <CharacterSheetTextInput value={stkFeaturesTraits} onChange={(event) => setStkFeaturesTraits(event.target.value)}  style={{height:"50vh"}}/>
          </CharacterSheetBlockColumn>
        </CharacterSheetColumn>
      </CharacterSheetRow>
      <CharacterSheetRow>
        <StyledDiv>
          <MainButton
            title={"Cancelar"}
            type="button"
            onClick={() => window.history.back()}
          />
          <MainButton title={"Salvar"} onClick={()=>{saveChanges()}}/>
        </StyledDiv>
      </CharacterSheetRow>
    </CharacterSheetBody>
  );
};

export default UpdateCharacter;
