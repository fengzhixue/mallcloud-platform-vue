<template> 
  <el-card class="form-container" shadow="never">
    <el-form :model="memberBlanceLog" :rules="rules" ref="memberBlanceLogFrom" label-width="150px">

      <el-form-item label="：" prop="memberId">
        <el-input v-model="memberBlanceLog.memberId"></el-input>
      </el-form-item>
      <el-form-item label="：" prop="price">
        <el-input v-model="memberBlanceLog.price"></el-input>
      </el-form-item>
      <el-form-item label="：" prop="type">
        <el-input v-model="memberBlanceLog.type"></el-input>
      </el-form-item>
      <el-form-item label="：" prop="note">
        <el-input v-model="memberBlanceLog.note"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('memberBlanceLogFrom')">提交</el-button>
        <el-button v-if="!isEdit" @click="resetForm('memberBlanceLogFrom')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
  import {createMemberBlanceLog, getMemberBlanceLog, updateMemberBlanceLog} from '@/api/ums/memberBlanceLog'
  import SingleUpload from '@/components/Upload/singleUpload'
  import {formatDate} from '@/utils/date';
  const defaultMemberBlanceLog={
    name: ''
  };
  export default {
    name: 'MemberBlanceLogDetail',
    components:{SingleUpload},
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        memberBlanceLog:Object.assign({}, defaultMemberBlanceLog),
        rules: {
          name: [
            {required: true, message: '请输入品牌名称', trigger: 'blur'},
            {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
          ],
          logo: [
            {required: true, message: '请输入品牌logo', trigger: 'blur'}
          ],
          sort: [
            {type: 'number', message: '排序必须为数字'}
          ],
        }
      }
    },
    created() {
      if (this.isEdit) {
        getMemberBlanceLog(this.$route.query.id).then(response => {
          this.memberBlanceLog = response.data;
        });
      }else{
        this.memberBlanceLog = Object.assign({},defaultMemberBlanceLog);
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('是否提交数据', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              if (this.isEdit) {
                updateMemberBlanceLog(this.$route.query.id, this.memberBlanceLog).then(response => {
                    if(response.code==200){
                      this.$refs[formName].resetFields();
                      this.$message({
                          message: '修改成功',
                          type: 'success',
                          duration:1000
                      });
                      this.$router.back();
                  }else{
                      this.$message({
                          message: response.msg,
                          type: 'error',
                          duration:1000
                      });
                  }

                });
              } else {
                createMemberBlanceLog(this.memberBlanceLog).then(response => {
                    if(response.code==200){
                      this.$refs[formName].resetFields();
                      this.memberBlanceLog = Object.assign({},defaultMemberBlanceLog);
                      this.$message({
                          message: '提交成功',
                          type: 'success',
                          duration:1000
                      });
                      this.$router.back();
                  }else{
                      this.$message({
                          message: response.msg,
                          type: 'error',
                          duration:1000
                      });
                  }

                });
              }
            });

          } else {
            this.$message({
              message: '验证失败',
              type: 'error',
              duration:1000
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.memberBlanceLog = Object.assign({},defaultMemberBlanceLog);
      }
    }
  }
</script>
<style>
</style>


