
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Program%20Files/Arlequin/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (N_bridwelli_MauiCO1_5sites.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 26/04/14 at 15:13:12", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12"))
	insDoc(aux1, gLnk("R", "Settings", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "InsideCrater_PalikuSide", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_gr_shared0"))
		insDoc(aux2, gLnk("R", "InsideCrater_nrSlidingSands", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_gr_shared1"))
		insDoc(aux2, gLnk("R", "InsideCrater_nrHoluaCabin", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_gr_shared2"))
		insDoc(aux2, gLnk("R", "OutsideCrater_nrHalemau", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_gr_shared3"))
		insDoc(aux2, gLnk("R", "OutsideCrater_rdSummit", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_gr_shared4"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "InsideCrater_PalikuSide", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_group0"))
		insDoc(aux2, gLnk("R", "InsideCrater_nrSlidingSands", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_group1"))
		insDoc(aux2, gLnk("R", "InsideCrater_nrHoluaCabin", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_group2"))
		insDoc(aux2, gLnk("R", "OutsideCrater_nrHalemau", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_group3"))
		insDoc(aux2, gLnk("R", "OutsideCrater_rdSummit", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_group4"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_comp_sum_het"))
		insDoc(aux2, gLnk("R", "Theta(H)", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_comp_sum_thetaH"))
		insDoc(aux2, gLnk("R", "No. of alleles", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_comp_sum_numAll"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "N_bridwelli_MauiCO1_5sites.htm#26_04_14at15_13_12_pop_exct_tests"))
