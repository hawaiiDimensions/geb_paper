
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file://///psf/Shared%20PC%20folder/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (Argyrodes_CO1_arlequin_withinHI.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:44:51", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51"))
	insDoc(aux1, gLnk("R", "Settings", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "PUUMAKAALA", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51_gr_shared0"))
		insDoc(aux2, gLnk("R", "THURSTON", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51_gr_shared1"))
		insDoc(aux2, gLnk("R", "KIPUKAS", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51_gr_shared2"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_44_51_pop_amova"))
	aux1 = insFld(foldersTree, gFld("Run of 28/05/14 at 07:45:51", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51"))
	insDoc(aux1, gLnk("R", "Settings", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51_run_information"))
		aux2 = insFld(aux1, gFld("Shared haplotypes", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51_shared%20haplotypes"))
		insDoc(aux2, gLnk("R", "PUUMAKAALA", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51_gr_shared0"))
		insDoc(aux2, gLnk("R", "THURSTON", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51_gr_shared1"))
		insDoc(aux2, gLnk("R", "KIPUKAS", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51_gr_shared2"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "Argyrodes_CO1_arlequin_withinHI.htm#28_05_14at07_45_51_pop_amova"))
