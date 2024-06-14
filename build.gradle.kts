// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.jetbrains.kotlin.android) apply false
}

val projectDir = rootProject.projectDir

tasks.register<Delete>("deleteFrontendBuild") {
    group = "build"
    description = "Remove the existing copied Frontend directory"

    delete("${projectDir}/app/src/main/assets")
}

tasks.register<Copy>("copyFrontendBuild") {
    group = "build"
    description = "Copy the Frontend dist files to the Android assets directory"

    from("${projectDir}/frontend/dist")
    into("${projectDir}/app/src/main/assets")
}

tasks.register("overrideFrontendBuild") {
    group = "build"
    description = "Remove the existing copied Frontend directory and copy the new one over"

    dependsOn("deleteFrontendBuild")
    dependsOn("copyFrontendBuild")
}
