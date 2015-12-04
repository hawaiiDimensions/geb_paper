
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Anuenue_CO1_arlequin_Kipukas.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:29:28", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28"))
	insDoc(aux1, gLnk("R", "Settings", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "KIPUKA1", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared0"))
		insDoc(aux2, gLnk("R", "KIPUKA2", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared1"))
		insDoc(aux2, gLnk("R", "KIPUKA3", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared2"))
		insDoc(aux2, gLnk("R", "KIPUKA5", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared3"))
		insDoc(aux2, gLnk("R", "KIPUKA6", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared4"))
		insDoc(aux2, gLnk("R", "KIPUKA7", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared5"))
		insDoc(aux2, gLnk("R", "KIPUKA_PLRC", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared6"))
		insDoc(aux2, gLnk("R", "KIPUKA_PLRS", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_gr_shared7"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Anuenue_CO1_arlequin_Kipukas.htm#28_05_14at07_29_28_pop_amova"))
