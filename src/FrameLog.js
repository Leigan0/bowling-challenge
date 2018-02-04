function FrameLog (frameClass = Frame) {
  this.frames = []
  this.frameClass = frameClass
  this.currentFrame = null
}

FrameLog.createFrameLog = function(){
  return new FrameLog()
}

FrameLog.prototype.startFrame = function(firstRollScore){
  this.currentFrame = this.frameClass.createFrame(firstRollScore)
  this._addFrame(this.currentFrame)
}

FrameLog.prototype.endFrame = function(secondRollScore){
  this.currentFrame.setSecondRoll(secondRollScore)
  this.currentFrame = null
}

FrameLog.prototype.frameCount = function(){
  return this.frames.length
}

FrameLog.prototype.isPreviousFrameStike = function(){
  return this.frames[this.frames.length-2].isStrike()
}
FrameLog.prototype.isPreviousFrameSpare = function(){
  return this.frames[this.frames.length-2].isSpare()
}

FrameLog.prototype._addFrame = function(frame){
  this.frames.push(frame)
}
