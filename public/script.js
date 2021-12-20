var total=0
var target=Math.floor(Math.random()*26)+1
var count=0
var user
window.onload=function(){
    document.getElementById("succ").style.display="none";
    document.getElementById("fail").style.display="none";
    document.getElementById("bat").style.display="none";
    document.getElementById("bowl").style.display="none";
    document.getElementById("ins").style.display="none";
}
function home(){
    document.getElementById("succ").style.display="none";
    document.getElementById("fail").style.display="none";
    document.getElementById("bat").style.display="none";
    document.getElementById("bowl").style.display="none";
    document.getElementById("ins").style.display="none";
    document.getElementById("card").style.display="block";
}
function bat(){
    document.getElementById("succ").style.display="none";
    document.getElementById("ins").style.display="none";
    document.getElementById("fail").style.display="none";
    document.getElementById("bowl").style.display="none";
    document.getElementById("card").style.display="none";
    document.getElementById("bat").style.display="block";
    document.getElementById("target").innerHTML="Target : "+target
    var pname=document.getElementById("input").value
    user=pname
}
function bowl(){
    document.getElementById("succ").style.display="none";
    document.getElementById("card").style.display="none";
    document.getElementById("ins").style.display="none";
    document.getElementById("fail").style.display="none";
    document.getElementById("bat").style.display="none";
    document.getElementById("bowl").style.display="block";
    document.getElementById("defend").innerHTML="Target : "+target
    var pname=document.getElementById("input").value
    user=pname
}
function ins(){
    document.getElementById("succ").style.display="none";
    document.getElementById("card").style.display="none";
    document.getElementById("bowl").style.display="none";
    document.getElementById("fail").style.display="none";
    document.getElementById("bat").style.display="none";
    document.getElementById("ins").style.display="block";
    document.getElementById("ins1").innerHTML="In Batting Mode, use RUNS to chase the target set."
    document.getElementById("ins2").innerHTML="In Bowling Mode, you are about to defend your target."
    document.getElementById("ins3").innerHTML="Click on the BALL icon with runs, to play."
    document.getElementById("ins4").innerHTML="ALL THE BEST !"
}
function one(){
    var run=1
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="SINGLEEE...and it's a victory.."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
        else{
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="Oh, man...you failed to chase this target."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    document.getElementById("run").innerHTML="Run : "+run
    document.getElementById("comp").innerHTML="Bowler : "+comp
    if(run==comp){
        document.getElementById("comm").innerHTML="That's Out..!"
        if(total<target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="It's an easy run-out..you failed to chase."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    else{
        total+=run
        document.getElementById("comm").innerHTML="Quick Single"
        document.getElementById("total").innerHTML="Score : "+total+"("+count+")*"
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="Easy win.."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
}
function two(){
    var run=2
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="With that shot, you chased the target comfortably.."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
        else{
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="Just short off the target.."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    document.getElementById("run").innerHTML="Run : "+run
    document.getElementById("comp").innerHTML="Bowler : "+comp
    if(run==comp){
        document.getElementById("comm").innerHTML="That's Out..!"
        if(total<target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="EDGED and TAKEN..you're OUT"
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    else{
        total+=run
        document.getElementById("comm").innerHTML="Double or nothing ? Double it is..!"
        document.getElementById("total").innerHTML="Score : "+total+"("+count+")*"
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="Chased easily..it's a win."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
}
function three(){
    var run=3
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="With that shot, you chased the target comfortably.."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
        else{
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="Just short off the target.."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    document.getElementById("run").innerHTML="Run : "+run
    document.getElementById("comp").innerHTML="Bowler : "+comp
    if(run==comp){
        document.getElementById("comm").innerHTML="That's Out..!"
        if(total<target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="The ball sneaks through and hits the bails.."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    else{
        total+=run
        document.getElementById("comm").innerHTML="That's some fiery running between the wickets.. 3 runs added to the total..!"
        document.getElementById("total").innerHTML="Score : "+total+"("+count+")*"
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="Beautiful running and it's a victory"
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
}
function four(){
    var run=4
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="A text-book drive to 4, brings up the victory..."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
        else{
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="Just short off the target.."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    document.getElementById("run").innerHTML="Run : "+run
    document.getElementById("comp").innerHTML="Bowler : "+comp
    if(run==comp){
        document.getElementById("comm").innerHTML="That's Out..!"
        if(total<target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="Oh...it's an LBW."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    else{
        total+=run
        document.getElementById("comm").innerHTML="It's a FOURRRRRR, beautifully driven to the covers.."
        document.getElementById("total").innerHTML="Score : "+total+"("+count+")*"
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="A clean sweep to the boundary and it's a win.."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
}
function five(){
    var run=5
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="These extra runs brings the victory.."
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
        else{
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You'e misread the ball and you're gone.."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    document.getElementById("run").innerHTML="Run : "+run
    document.getElementById("comp").innerHTML="Bowler : "+comp
    if(run==comp){
        document.getElementById("comm").innerHTML="That's Out..!"
        if(total<target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="Just short off the target.."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    else{
        total+=run
        document.getElementById("comm").innerHTML="Quick single.. Wait, it's an overthrowwww. 5 runs offered."
        document.getElementById("total").innerHTML="Score : "+total+"("+count+")*"
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="A comfortable win..!"
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
}
function six(){
    var run=6
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML=user+" FINISHED OFF IN STYLE !"
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
        else{
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="This 6 is not enough..you lost in this chase."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    document.getElementById("run").innerHTML="Run : "+run
    document.getElementById("comp").innerHTML="Bowler : "+comp
    if(run==comp){
        document.getElementById("comm").innerHTML="That's Out..!"
        if(total<target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You've been caught at the boundary.."
            document.getElementById("sb4").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
    else{
        total+=run
        document.getElementById("comm").innerHTML="SHOTTTT...it's a SIXER "
        document.getElementById("total").innerHTML="Score : "+total+"("+count+")*"
        if(total>=target){
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML=user+" FINISHED OFF IN STYLE !"
            document.getElementById("sb2").innerHTML=user+" "+total+"("+count+")"
            document.getElementById("bat").style.display="none";
        }
    }
}
function oneb(){
    var run=1
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        else{
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="RUN-OUTTTT..it's a win"
            document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
            document.getElementById("bowl").style.display="none";
        }
    }
    document.getElementById("extra").innerHTML="Run : "+run
    document.getElementById("random").innerHTML="Batsman : "+comp
    if(run==comp){
        document.getElementById("com").innerHTML="What a delivery...He's gone"
        document.getElementById("succ").style.display="block";
        document.getElementById("sb").innerHTML="Nice catch at the slips..he's caught out"
        document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
        document.getElementById("bowl").style.display="none";
    }
    else{
        if(comp==1){
            document.getElementById("com").innerHTML="Yorked him.. flicked for a single.."
        }
        if(comp==2){
            document.getElementById("com").innerHTML="A healthy bouncer, pulled away for a double.."
        }
        if(comp==3){
            document.getElementById("com").innerHTML="Finds the gap and it's a 3.."
        }
        if(comp==4){
            document.getElementById("com").innerHTML="FULL-TOSS and is smashed for a FOURRRR"
        }
        if(comp==5){
            document.getElementById("com").innerHTML="Wide delivery..oh ho, the keeper misses it. 5 runs it is.."
        }
        if(comp==6){
            document.getElementById("com").innerHTML="He's been punished. It's a 6"
        }
        total+=comp
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        document.getElementById("sum").innerHTML=total+"("+count+")"
    }
}
function twob(){
    var run=2
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        else{
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="Got him with an easy catch..VICTORYYYY"
            document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
            document.getElementById("bowl").style.display="none";
        }
    }
    document.getElementById("extra").innerHTML="Run : "+run
    document.getElementById("random").innerHTML="Batsman : "+comp
    if(run==comp){
        document.getElementById("com").innerHTML="What a delivery...He's gone"
        document.getElementById("succ").style.display="block";
        document.getElementById("sb").innerHTML="It's a Stump crusher, he's gone.."
        document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
        document.getElementById("bowl").style.display="none";
    }
    else{
        if(comp==1){
            document.getElementById("com").innerHTML="Yorked him.. flicked for a single.."
        }
        if(comp==2){
            document.getElementById("com").innerHTML="A healthy bouncer, pulled away for a double.."
        }
        if(comp==3){
            document.getElementById("com").innerHTML="Finds the gap and it's a 3.."
        }
        if(comp==4){
            document.getElementById("com").innerHTML="FULL-TOSS and is smashed for a FOURRRR"
        }
        if(comp==5){
            document.getElementById("com").innerHTML="Wide delivery..oh ho, the keeper misses it. 5 runs it is.."
        }
        if(comp==6){
            document.getElementById("com").innerHTML="He's been punished. It's a 6"
        }
        total+=comp
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        document.getElementById("sum").innerHTML=total+"("+count+")"
    }
}
function threeb(){
    var run=3
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        else{
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="It's bloodbath at the batter's end..it's a victory"
            document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
            document.getElementById("bowl").style.display="none";
        }
    }
    document.getElementById("extra").innerHTML="Run : "+run
    document.getElementById("random").innerHTML="Batsman : "+comp
    if(run==comp){
        document.getElementById("com").innerHTML="What a delivery...He's gone"
        document.getElementById("succ").style.display="block";
        document.getElementById("sb").innerHTML="GONE, a direct hit brings up the victory"
        document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
        document.getElementById("bowl").style.display="none";
    }
    else{
        if(comp==1){
            document.getElementById("com").innerHTML="Yorked him.. flicked for a single.."
        }
        if(comp==2){
            document.getElementById("com").innerHTML="A healthy bouncer, pulled away for a double.."
        }
        if(comp==3){
            document.getElementById("com").innerHTML="Finds the gap and it's a 3.."
        }
        if(comp==4){
            document.getElementById("com").innerHTML="FULL-TOSS and is smashed for a FOURRRR"
        }
        if(comp==5){
            document.getElementById("com").innerHTML="Wide delivery..oh ho, the keeper misses it. 5 runs it is.."
        }
        if(comp==6){
            document.getElementById("com").innerHTML="He's been punished. It's a 6"
        }
        total+=comp
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        document.getElementById("sum").innerHTML=total+"("+count+")"
    }
}
function fourb(){
    var run=4
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        else{
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="Appeal for a leg-before aanndd finger raised..it's a victory"
            document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
            document.getElementById("bowl").style.display="none";
        }
    }
    document.getElementById("extra").innerHTML="Run : "+run
    document.getElementById("random").innerHTML="Batsman : "+comp
    if(run==comp){
        document.getElementById("com").innerHTML="What a delivery...He's gone"
        document.getElementById("succ").style.display="block";
        document.getElementById("sb").innerHTML="It's bloodbath at the batter's end..it's a victory"
        document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
        document.getElementById("bowl").style.display="none";
    }
    else{
        if(comp==1){
            document.getElementById("com").innerHTML="Yorked him.. flicked for a single.."
        }
        if(comp==2){
            document.getElementById("com").innerHTML="A healthy bouncer, pulled away for a double.."
        }
        if(comp==3){
            document.getElementById("com").innerHTML="Finds the gap and it's a 3.."
        }
        if(comp==4){
            document.getElementById("com").innerHTML="FULL-TOSS and is smashed for a FOURRRR"
        }
        if(comp==5){
            document.getElementById("com").innerHTML="Wide delivery..oh ho, the keeper misses it. 5 runs it is.."
        }
        if(comp==6){
            document.getElementById("com").innerHTML="He's been punished. It's a 6"
        }
        total+=comp
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        document.getElementById("sum").innerHTML=total+"("+count+")"
    }
}
function fiveb(){
    var run=5
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        else{
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="Stumped. He's gone..it's a victory"
            document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
            document.getElementById("bowl").style.display="none";
        }
    }
    document.getElementById("extra").innerHTML="Run : "+run
    document.getElementById("random").innerHTML="Batsman : "+comp
    if(run==comp){
        document.getElementById("com").innerHTML="What a delivery...He's gone"
        document.getElementById("succ").style.display="block";
        document.getElementById("sb").innerHTML="HOWWZZATTTT..it's a victory"
        document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
        document.getElementById("bowl").style.display="none";
    }
    else{
        if(comp==1){
            document.getElementById("com").innerHTML="Yorked him.. flicked for a single.."
        }
        if(comp==2){
            document.getElementById("com").innerHTML="A healthy bouncer, pulled away for a double.."
        }
        if(comp==3){
            document.getElementById("com").innerHTML="Finds the gap and it's a 3.."
        }
        if(comp==4){
            document.getElementById("com").innerHTML="FULL-TOSS and is smashed for a FOURRRR"
        }
        if(comp==5){
            document.getElementById("com").innerHTML="Wide delivery..oh ho, the keeper misses it. 5 runs it is.."
        }
        if(comp==6){
            document.getElementById("com").innerHTML="He's been punished. It's a 6"
        }
        total+=comp
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        document.getElementById("sum").innerHTML=total+"("+count+")"
    }
}
function sixb(){
    var run=6
    var comp=Math.floor(Math.random()*6)+1
    count++
    if(count>=6){
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        else{
            document.getElementById("succ").style.display="block";
            document.getElementById("sb").innerHTML="It's a stunner at point. He's caught..it's a victory"
            document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
            document.getElementById("bowl").style.display="none";
        }
    }
    document.getElementById("extra").innerHTML="Run : "+run
    document.getElementById("random").innerHTML="Batsman : "+comp
    if(run==comp){
        document.getElementById("com").innerHTML="What a delivery...He's gone"
        document.getElementById("succ").style.display="block";
        document.getElementById("sb").innerHTML="Bowled him..it's a victory"
        document.getElementById("sb2").innerHTML=user+" defended "+target+" runs"
        document.getElementById("bowl").style.display="none";
    }
    else{
        if(comp==1){
            document.getElementById("com").innerHTML="Yorked him.. flicked for a single.."
        }
        if(comp==2){
            document.getElementById("com").innerHTML="A healthy bouncer, pulled away for a double.."
        }
        if(comp==3){
            document.getElementById("com").innerHTML="Finds the gap and it's a 3.."
        }
        if(comp==4){
            document.getElementById("com").innerHTML="FULL-TOSS and is smashed for a FOURRRR"
        }
        if(comp==5){
            document.getElementById("com").innerHTML="Wide delivery..oh ho, the keeper misses it. 5 runs it is.."
        }
        if(comp==6){
            document.getElementById("com").innerHTML="He's been punished. It's a 6"
        }
        total+=comp
        if(total>=target){
            document.getElementById("fail").style.display="block";
            document.getElementById("sb3").innerHTML="You failed to defend the target.."
            document.getElementById("sb4").innerHTML=user+" lost the game"
            document.getElementById("bowl").style.display="none";
        }
        document.getElementById("sum").innerHTML=total+"("+count+")"
    }
}
