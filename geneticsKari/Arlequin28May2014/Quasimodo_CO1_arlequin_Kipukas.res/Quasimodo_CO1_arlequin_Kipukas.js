
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Quasimodo_CO1_arlequin_Kipukas.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:22:25", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25"))
	insDoc(aux1, gLnk("R", "Settings", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "KIPUKA1", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared0"))
		insDoc(aux2, gLnk("R", "KIPUKA2", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared1"))
		insDoc(aux2, gLnk("R", "KIPUKA3", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared2"))
		insDoc(aux2, gLnk("R", "KIPUKA5", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared3"))
		insDoc(aux2, gLnk("R", "KIPUKA6", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared4"))
		insDoc(aux2, gLnk("R", "KIPUKA7", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared5"))
		insDoc(aux2, gLnk("R", "KIPUKA_PLRC", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared6"))
		insDoc(aux2, gLnk("R", "KIPUKA_PLRS", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_gr_shared7"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Quasimodo_CO1_arlequin_Kipukas.htm#28_05_14at07_22_25_pop_amova"))
