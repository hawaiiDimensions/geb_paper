
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (N_bridwelli_MauiCO1_5sites.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 27/05/14 at 14:45:28", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28"))
	insDoc(aux1, gLnk("R", "Settings", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "InsideCrater_PalikuSide", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_gr_shared0"))
		insDoc(aux2, gLnk("R", "InsideCrater_nrSlidingSands", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_gr_shared1"))
		insDoc(aux2, gLnk("R", "InsideCrater_nrHoluaCabin", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_gr_shared2"))
		insDoc(aux2, gLnk("R", "OutsideCrater_nrHalemau", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_gr_shared3"))
		insDoc(aux2, gLnk("R", "OutsideCrater_rdSummit", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_gr_shared4"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "N_bridwelli_MauiCO1_5sites.htm#27_05_14at14_45_28_pop_amova"))
