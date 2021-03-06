build:
	make release && \
	uglifyjs bundle.js -o bundle.js -c toplevel,collapse_vars=true,reduce_vars=true -m 
dev:
	cd src && \
	rollup index.js -o ../bundle.js -f cjs -e net,fs,os,process,path,child_process,util,http,querystring,buffer -w

release:
	cd src && \
	rollup index.js -o ../bundle.js -f cjs -e net,fs,os,process,path,child_process,util,http,querystring,buffer && \
	echo '#!/usr/bin/env node' | cat - ../bundle.js > ../ssr && chmod +x ../ssr

