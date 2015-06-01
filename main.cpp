#include <cstdio>
#include <cstdlib>
#include <memory>
#include <iostream>
#include <thread>
#include <mutex>
#include <cstdio>
void func(){
        FILE *in;
        std::string str;
	    char buff[512];
	    if(!(in = popen("airmon-ng", "r"))){
            std::cout<<"ERROR";
	    }
	    while(fgets(buff, sizeof(buff), in)!=NULL){
	        std::cout <<buff;
}
	    pclose(in);
	    std::cout<<"Enter the interface to set up in monitor mode"<<std::endl;
	    std::cin>>str;
    //std::system ("airmon-ng");
    //std::system("airmon-ng check kill");
        std::system(std::string("airmon-ng start ")+str);
    //std::system("airodump-ng mon0");
}
int main ()
{
    std::thread t1(func);
    //func();
    t1.join();
    std::cout<<"MAY BE NON BLOCKING";

    return 0;
}
