cd ./database

while true
do
	IncVar=0
	for file in $(ls -r ../dbbackup) 
	do 
		IncVar=$((IncVar+1))
		if [ $IncVar -ge 12 ]
		then 
			rm ../dbbackup/$file
		fi
	done
	FileName="../dbbackup/"
	FileName+=$(date +%s)
	FileName+=".zip"
	zip -5 -q -r $FileName ./
	echo "Finished $FileName"
	sleep 3600
done
